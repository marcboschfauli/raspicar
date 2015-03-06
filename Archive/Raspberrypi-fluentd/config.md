# Fluentd

## Start fluentd

    $ fluentd -c /home/pi/fluentd.conf -v &

## Raspberry Pi Fluentd Config File 

    <source>
      type tail
      path /home/pi/pyobd-pi/log/*.log
     # path /home/pi/pyobd-pi/log/car-2014-8-28-10-55-52.log
     pos_file /home/pi/fluentd/file_pos_trailbreaker.pos
     # path /home/pi/my_log
     # dictates from which raspberry pi collector the data has been sent
     # change from pi1 to pi[n] with n from [2->n] to differentiate data collectors
      tag pi1.collect
     read_from_head true
     format none
     #format csv
     #keys key1, key2
     #time_key key1
    </source>
    
    #### Time,RPM,MPH,Throttle,Load,Fuel Status
    #### 10:55:53.994146,771,0.0,17.2549019608,31.3725490196,1000

    <match pi1.collect>
      type forward
      send_timeout 60s
      recover_wait 10s
      heartbeat_interval 30s
      phi_threshold 16
      hard_timeout 60s
      flush_interval 20s
      
      <server>
        name mapr
        # host mapr1.alexanderthamm.de
        host 80.147.104.161
        port 24224
        #port 24225
        #host 54.228.99.11
        weight 60
      </server>
     
      <secondary>
        type file
        path /home/pi/fluentd/forward-failed
      </secondary>
    
    </match>

The following things need to be done on the Raspberry Pi fluentd tail input:

* **DONE** Enable all Log Files
* Set read_from_head false  after testing.

## MapR Cluster Fluentd Target Configuration

    $ cat /etc/td-agent/td-agent.conf
      ####
      ## Output descriptions:
      ##
  



      <source>
        type forward
        port 24224
        bind 0.0.0.0
      </source>


      <match pi1.collect>
      type copy
      <store>
        type forward
        send_timeout 60s
        recover_wait 10s
        heartbeat_interval 30s
       phi_threshold 16
       hard_timeout 60s
       flush_interval 30s

       <server>
       name mapr-db
       host 54.228.99.11
       port 24225
       weight 60
       </server>

      <secondary>
        type file
        path /tmp/fluent-forward-failed
      </secondary>
      </store>

      <store>
        type file
        path /mapr/alexanderthamm.com/fe/incoming/log
        format ltsv
        label_delimiter ;
        time_slice_format %Y%m%d
        time_format %Y%m%dT%H%M%S%z
        flush_interval 15s
        append true
        utc

      </store>

      </match>



    _____________________________________________

    Message Format

    ###### File Output with the correct Message Format so that we can query the data with Apache Drill

    #message;10:58:25.461355;2232;20.5096333126;23.9215686275;40.3921568627;0800
    #message;10:58:25.744218;2248;21.1311373524;24.3137254902;37.6470588235;0800
    #message;10:58:26.66649;2303;21.1311373524;23.9215686275;33.3333333333;0800
    #message;10:58:26.395684;2332;21.7526413922;23.9215686275;33.3333333333;NORESPONSE


    <match my.access>
      type file
      path /mapr/alexanderthamm.com/fe/incoming/log
      output_tag false
      output_time false
      format ltsv
      label_delimiter ;
      time_slice_format %Y%m%d
      time_slice_wait 10m
      time_format %Y%m%dT%H%M%S%z
      flush_interval 15s
      append true
      utc
    </match>


The default `file_out` plugin will store everything with the prefix `.log` and
in order for Apache Drill to be able to use it we had to  changed it to `.csv`.

Note: it was not possible to configure `.log` extension in drill storage plugin (check with Engineering).

Patched File:

    /usr/lib64/fluent/ruby/lib/ruby/gems/1.9.1/gems/fluentd-0.10.50/lib/fluent/plugin/out_file.rb    (replace .log with .csv)

Drill Configuration:
 
Below is the storage Plugin Configuration. Data is Ingested in:

    /fe/incoming/<log fortmat looks like log.20140910.csv) 

We changed the CSV format to use `;` as a delimiter instead of `,`:

    {
      "type": "file",
      "enabled": true,
      "connection": "maprfs:///",
      "workspaces": {
        "root": {
          "location": "/",
          "writable": false,
          "storageformat": null
        },
        "pbt": {
          "location": "/fe/ptb",
          "writable": false,
          "storageformat": null
        },
        "views": {
          "location": "/fe/views",
          "writable": true,
          "storageformat": null
        },
        "tmp": {
          "location": "/tmp",
          "writable": true,
          "storageformat": "csv"
        }
      },
      "formats": {
        "psv": {
          "type": "text",
          "extensions": [
            "tbl"
          ],
          "delimiter": "|"
        },
        "csv": {
          "type": "text",
          "extensions": [
            "csv"
          ],
          "delimiter": ";"
        },
        "tsv": {
          "type": "text",
          "extensions": [
            "tsv"
          ],
          "delimiter": "\t"
        },
        "parquet": {
          "type": "parquet"
        },
        "json": {
          "type": "json"
        }
      }
    }


DRILL VIEW

We created a view `ptb` in `dfs.views.ptb`  with below SQL statement:

    SELECT CAST(`columns`[1] AS VARCHAR(20)) AS `time1`, CAST(`columns`[2] AS VARCHAR(20)) AS `rpm`, CAST(`columns`[3] AS VARCHAR(20)) AS `mph`, CAST(`columns`[4] AS VARCHAR(20)) AS `throttle`, CAST(`columns`[5] AS VARCHAR(20)) AS `load`, CAST(`columns`[6] AS VARCHAR(20)) AS `fuel` FROM `dfs`.`root`.`fe/incoming/`

A query result on the view looks like the following now:

    0.0	10:55:53.994146	17.2549019608	771	1000	31.3725490196
    0.0	10:55:54.246813	17.2549019608	776	1000	31.7647058824
    0.0	10:55:54.491922	17.2549019608	769	1000	31.3725490196
    0.0	10:55:54.718291	17.2549019608	774	1000	31.7647058824
    0.0	10:55:54.964643	17.2549019608	769	1000	31.3725490196

We used Drill ODBC Driver to connect our dataset to Qlikview as a dashboard application.

The fluentd Port for the MapR cluster is accessible from outside:

    remote.alexanderthamm.com:24224

##Update

we had an issue because of the firewall of the remote host were only opened for tcp.

fluentd forwarder plugin will send heartbeats through udp.

We need to open the Firewall Ports for both, TCP and UDP Port 24224 and on the cloud instance 24225




