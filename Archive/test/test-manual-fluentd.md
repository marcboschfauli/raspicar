# Manually test fluentd

Use: `sudo service td-agent start` and `sudo /etc/init.d/td-agent reload` to
makes changes apply to config.

Run the following on the EC2 instance 54.228.99.11 and with the below config
settings in `/etc/td-agent/td-agent.conf`.

Note: if stuck, do: `sudo rm /var/run/td-agent/td-agent.pid`

## Test 1: piping from stdin to stdout

Config:

    <source>
      type forward
      port 24224
    </source>
    
    <match **>
      type stdout
    </match>

Command:

    $ echo '{"json":"message"}' | /usr/lib64/fluent/ruby/bin/fluent-cat debug.test
    $ sudo tail /var/log/td-agent/td-agent.log
    

## Test 2: piping from stdin to InfluxDB

Config:

    <source>
      type forward
      port 24224
    </source>
    
    <match **>
      type influxdb
      host localhost
      port 8086
      dbname test
      user root
      password root
      flush_interval 2
    </match>

Command:

    $ echo '{ "fluentd_val" : "0"}' | /usr/lib64/fluent/ruby/bin/fluent-cat fluentdts
    
    $ echo '{ "value" : "776"}' | /usr/lib64/fluent/ruby/bin/fluent-cat car.rpm
    InfluxDB: select * from car.rpm

Script-based: see `test-influxdb.sh` with the following usage: 

    $ ./test-influxdb.sh $WAIT_SEC_BETWEEN_INGEST

or

    $ ./test-influxdb.sh # defaults to 5 sec

## Test 3: piping from remote to stdout

Note: the inbound port 24225 needs to be added to the rules in the respective
security group the EC2 instance is in.

Config:

    <source>
      type forward
      port 24225
    </source>

    <match **>
      type stdout
    </match>

Command:

    $ sudo tail /var/log/td-agent/td-agent.log

## Test 4: piping from remote to InfluxDB

Note: the inbound port 24225 needs to be added to the rules in the respective
security group the EC2 instance is in.

Config:

    <source>
      type forward
      port 24225
    </source>
    
    <match **>
      type influxdb
      host localhost
      port 8086
      dbname test
      user root
      password root
      flush_interval 2
    </match>

Command: InfluxDB/Grafana


## Test 5: piping from remote to InfluxDB with dual output

Config:

    <source>
      type forward
      port 24225
    </source>
    
    <match **>
      type copy
      <store>
        type stdout
      </store>
      <store>
        type influxdb
        host localhost
        port 8086
        dbname test
        user root
        password root
        flush_interval 2
      </store>
    </match>

Command: via `sudo tail /var/log/td-agent/td-agent.log` and InfluxDB/Grafana



## Test 6: piping from stdin to stdout with splitting

Install plug-in [parser](https://github.com/tagomoris/fluent-plugin-parser):

    $ sudo /usr/lib64/fluent/ruby/bin/fluent-gem install fluent-plugin-parser

Schema:

    #### Time,RPM,MPH,Throttle,Load,Fuel Status
    10:55:54.246813;776;0.0;17.2549019608;31.7647058824;1000
    
Config:

    <source>
      type forward
      port 24224
    </source>

    <match pi1.collect>
      type parser
      format /(?<time>.*);(?<rpm>.*);(?<mph>.*);(?<throttle>.*);(?<load>.*);(?<fuel-status>.*)$/
      key_name message
      tag car
    </match>

    <match car>
      type stdout
    </match>

Command:

    $ echo '{"message":"10:55:54.246813;776;0.0;17.2549019608;31.7647058824;1000"}' | /usr/lib64/fluent/ruby/bin/fluent-cat pi1.collect
    $ sudo tail /var/log/td-agent/td-agent.log

Result:

    car: {"rpm":"776","mph":"0.0","throttle":"17.2549019608","load":"31.7647058824","fuel-status":"1000"}


## Test 7: piping from stdin to InfluxDB with dual output+splitting

Config:

    # listen to port and forward data
    <source>
      type forward
      port 24224
    </source>

    # turns pi1.collect: {"message":"10:55:54.246813;776;0.0;17.2549019608;31.7647058824;1000"}
    # into car: {"rpm":"776","mph":"0.0","throttle":"17.2549019608","load":"31.7647058824","fuel-status":"1000"}
    <match pi1.collect>
      type parser
      format /(?<time>.*);(?<rpm>.*);(?<mph>.*);(?<throttle>.*);(?<load>.*);(?<fuel-status>.*)$/
      key_name message
      tag car
    </match>
    
    # turns car: {"rpm":"776","mph":"0.0","throttle":"17.2549019608","load":"31.7647058824","fuel-status":"1000"}
    # into car.rpm: {"value":"776"}
   <match car>
      type parser
      format /(?<value>\d{1,})$/
      key_name rpm
      tag car.rpm
    </match>

    # ingests into InfluxDB and also prints it to stdout or /var/log/td-agent/td-agent.log
    <match car.rpm>
      type copy
      <store>
        type influxdb
        host localhost
        port 8086
        dbname test
        user root
        password root
        flush_interval 1
      </store>
      <store>
        type stdout
      </store>
    </match>

Command:

    $ echo '{"message":"10:55:54.246813;776;0.0;17.2549019608;31.7647058824;1000"}' | /usr/lib64/fluent/ruby/bin/fluent-cat pi1.collect
    $ sudo tail /var/log/td-agent/td-agent.log
    
    
InfluxDB:
    
    select * from car.rpm
    


## Solution: via local buffer file

Run:

    $ python /home/ec2-user/test-demo/test-influxdb.py /tmp/piin.YYYYMMDD.log &

Config:


    # listen to port and forward data
    <source>
      type forward
      port 24225 # use 23224 for testing with fluent-cat
    </source>
    
    
    <match pi1.collect>
      type copy
      <store>
        type file
        path /tmp/piin
        flush_interval 1s
        include_time_key false
        format json
        append true
      </store>
      <store>
      type stdout
      </store>
    </match>

In InfluxDB:

  select  * from car where vehicleid = 'chris'







