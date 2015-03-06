# Collection of commands and configs

## EC2 access

    $ ssh mapr@54.228.99.11
    $ ssh ec2-user@54.228.99.11

## Fluentd

Following [Aggregate and Analyze Syslog with InfluxDB](http://www.fluentd.org/guides/recipes/syslog-influxdb) via fluentd.org.

Note: we use `td-agent`, see also [documentation](http://docs.treasuredata.com/articles/td-agent).

* Root: `/etc/td-agent/`
* Config: `/etc/td-agent/td-agent.conf`
* Logs: `/var/log/td-agent/td-agent.log`
* Control: `sudo service td-agent start` and `sudo /etc/init.d/td-agent reload`

## Fluentd - InfluxDB plugin

See in Step 2 of [Aggregate and Analyze Syslog with InfluxDB](http://www.fluentd.org/guides/recipes/syslog-influxdb):

Install:

    $ sudo /usr/lib64/fluent/ruby/bin/fluent-gem install fluent-plugin-influxdb


Configure `/etc/td-agent/td-agent.conf` as follows:

    <source>
      type syslog
      port 42185
      tag system
    </source>

    <match system.*.*>
      type influxdb
      host localhost
      port 8086
      dbname test
      user root
      password root
      flush_interval 2
    </match>

## rsyslogd

To pipe data into fluentd and finally into InfluxDB, change bottom of
`/etc/rsyslog.conf` to:

    *.* @@54.228.99.11:42185

[Note](http://www.thegeekstuff.com/2012/01/rsyslog-remote-logging/) the 
`@@` which stands for TCP forwarding while a single `@` means UDP.

Finally, restart it:

    $ sudo service rsyslog restart

## InfluxDB 

* Root: `/opt/influxdb`
* Config: `/opt/influxdb/versions/0.8.2/config.toml`
* Logs: `/opt/influxdb/shared/log.txt`
* Control: `sudo /etc/init.d/influxdb start`

See also [install](http://influxdb.com/docs/v0.8/introduction/installation.html):

    wget http://s3.amazonaws.com/influxdb/influxdb-latest-1.x86_64.rpm
    sudo rpm -ivh influxdb-latest-1.x86_64.rpm

Note that on EC2 you need to make sure the security group has rules for inbound
traffic on following ports: `8083`, `8086`, `8090`, and `8099`.

Try out simple stuff in database `mh`:

    SELECT * FROM response_times


Try out E2E flow in database `test`:

    SELECT COUNT(ident) FROM /^system\./ GROUP BY time(1s)
    SELECT * from system.daemon.info

## Nginx

Needed to host Grafana.

* Root: `/etc/nginx/`
* Config: `/etc/nginx/conf.d/default.conf`
* Logs: `/var/log/nginx/access.log`
* Control: `sudo service nginx start`

See also [configuration](http://wiki.nginx.org/Configuration).


## Grafana

* Root: `/home/ec2-user/grafana-1.7.0`
* Config: `/home/ec2-user/grafana-1.7.0/config.js`
* Logs: via browser (Chrome: Developer Tools)
* Control: via Nginx restart (Grafana is a pure client-side Web app)

Note: in order for Nginx to serve Grafana, set `root` in 
`/etc/nginx/conf.d/default.conf` accordingly.

Example content for `/home/ec2-user/grafana-1.7.0/config.js` (note that `mh` is
the real content database, that is where fluentd pipes in and `grafana` is
the database Grafana uses to store dashboard settings):

     datasources: {
       'mh': {
          type: 'influxdb',
         	url: 'http://54.228.99.11:8086/db/mh',
          username: 'root',
          password: 'root',
          default: true
       },
       'test': {
        type: 'influxdb',
       	url: 'http://54.228.99.11:8086/db/test',
        username: 'root',
        password: 'root',
       },
        'grafana': {
          type: 'influxdb',
          url: 'http://54.228.99.11:8086/db/grafana',
          username: 'root',
          password: 'root',
          grafanaDB: true
       }
     },

See also:

* [installation](http://datadventures.ghost.io/2014/09/07/dweet-io-influxdb-grafana/)
* [configuration](http://grafana.org/docs/#configuration)

