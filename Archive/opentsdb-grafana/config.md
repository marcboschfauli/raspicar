# Collection of commands and configs


Note: due to a bug in OpenTSDB the below config in Nginx DOES NOT WORK.
We'd need to build OpenTSDB from the [next branch](https://github.com/OpenTSDB/opentsdb/archive/next.zip).

## Nginx

Control:

    $ sudo service nginx restart
    
Log:

    $ tail -f /var/log/nginx/access.log
    

[Config](http://wiki.nginx.org/Configuration):
    
In `nginx.conf` make sure it's `include /etc/nginx/conf.d/default.conf;` otherwise all .conf files are included.
    
    $ cat /etc/nginx/conf.d/default.conf
    upstream opentsdb {
      server 54.228.99.11:4242 fail_timeout=0;
    }
    
    server {
      listen *:4243;

      location / {
        # Regex to whitelist systems
        if ($http_origin ~* (https?://([a-z0-9._-]*\.)?54.228.99.11(:[0-9]+)?)) {
          set $cors "true";
        }

        # OPTIONS indicates a CORS pre-flight request
        if ($request_method = 'OPTIONS') {
          set $cors "${cors}-options";
        }

        # If it's OPTIONS, then it's a CORS preflight request so respond immediately with no response body
        if ($cors = "true-options") {
          add_header 'Access-Control-Allow-Origin' "$http_origin";
          add_header 'Access-Control-Allow-Credentials' 'true';
          add_header 'Access-Control-Max-Age' 1728000;
          add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
          add_header 'Access-Control-Allow-Headers' 'Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,Keep-Alive,X-Requested-With,If-Modified-Since';
          add_header 'Content-Length' 0;
          add_header 'Content-Type' 'application/json;charset=utf-8';
          return 204;
        }

        # Proxy the request
        proxy_set_header X-Host 54.228.99.11;
        proxy_set_header X-Forwarded-For $Proxy_add_x_forwarded_for;
        proxy_set_header Authorization "";
        proxy_pass http://opentsdb;
        proxy_redirect default;
        proxy_buffer_size 16k;
        proxy_buffers 8 32k;
        proxy_busy_buffers_size 64k;
        proxy_temp_file_write_size 64k;
        proxy_read_timeout 120;
        # Strip any OpenTSDB-generated CORS headers that overlap with our own
        proxy_hide_header 'Access-Control-Allow-Origin';
        proxy_hide_header 'Access-Control-Allow-Credentials';
        proxy_hide_header 'Access-Control-Allow-Headers';

        # if it's a GET or POST, set the standard CORS responses header
        if ($cors = "true") {
          # Add our own CORS headers
          add_header 'Access-Control-Allow-Origin' "$http_origin";
          add_header 'Access-Control-Allow-Credentials' 'true';
          add_header 'Access-Control-Allow-Headers' '*';
          add_header 'Content-Type' 'application/json;charset=utf-8';
        }
      }
    }


## OpenTSDB 

Control:

    sudo service opentsdb restart
    
    
Example metrics:

* `tsd.connectionmgr.connections`


[Config](http://opentsdb.net/docs/build/html/user_guide/configuration.html#configuration-file):

    $ cat /etc/opentsdb/opentsdb.conf
    # --------- NETWORK ----------
    # The TCP port TSD should use for communications
    # *** REQUIRED ***
    tsd.network.port = 4242

    # The IPv4 network address to bind to, defaults to all addresses
    # tsd.network.bind = 0.0.0.0

    # Enables Nagel's algorithm to reduce the number of packets sent over the
    # network, default is True
    #tsd.network.tcpnodelay = true

    # Determines whether or not to send keepalive packets to peers, default
    # is True
    #tsd.network.keepalive = true

    # Determines if the same socket should be used for new connections, default
    # is True
    #tsd.network.reuseaddress = true

    # Number of worker threads dedicated to Netty, defaults to # of CPUs * 2
    #tsd.network.worker_threads = 8

    # Whether or not to use NIO or tradditional blocking IO, defaults to True
    #tsd.network.async_io = true

    # ----------- HTTP -----------
    # The location of static files for the HTTP GUI interface.
    # *** REQUIRED ***
    tsd.http.staticroot = /usr/share/opentsdb/static/

    # Where TSD should write it's cache files to
    # *** REQUIRED ***
    tsd.http.cachedir = /tmp/opentsdb

    # --------- CORE ----------
    # Whether or not to automatically create UIDs for new metric types, default
    # is False
    tsd.core.auto_create_metrics = true

    # Full path to a directory containing plugins for OpenTSDB
    tsd.core.plugin_path = /usr/share/opentsdb/plugins

    # --------- STORAGE ----------
    # Whether or not to enable data compaction in HBase, default is True
    tsd.storage.enable_compaction = false

    # How often, in milliseconds, to flush the data point queue to storage,
    # default is 1,000
    # tsd.storage.flush_interval = 1000

    # Name of the HBase table where data points are stored, default is "tsdb"
    tsd.storage.hbase.data_table = /opentsdb/db/tsdb

    # Name of the HBase table where UID information is stored, default is "tsdb-uid"
    tsd.storage.hbase.uid_table = /opentsdb/db/tsdb-uid

    # Path under which the znode for the -ROOT- region is located, default is "/hbase"
    #tsd.storage.hbase.zk_basedir = /hbase

    # A space separated list of Zookeeper hosts to connect to, with or without
    # port specifiers, default is "localhost"
    tsd.storage.hbase.zk_quorum = 10.84.17.34:5181
    
    tsd.http.request.cors_domains = *


## Grafana

Root:

    /mapr/mapr-de02/opentsdb/grafana-1.7.0

[Config](http://grafana.org/docs/features/opentsdb/):

    $ cat /mapr/mapr-de02/opentsdb/grafana-1.7.0/config.js
    define(['settings'],
    function (Settings) {


      return new Settings({
        // OpenTSDB & Elasticsearch example setup

        datasources: {
          opentsdb: {
            type: "opentsdb",
            url: "http://54.228.99.11:4242",
            default: true
          }
        },

        /* Global configuration options
        * ========================================================
        */

        // specify the limit for dashboard search results
        search: {
          max_results: 20
        },

        // default start dashboard
        default_route: '/dashboard/file/default.json',

        // set to false to disable unsaved changes warning
        unsaved_changes_warning: true,

        // set the default timespan for the playlist feature
        // Example: "1m", "1h"
        playlist_timespan: "1m",

        // If you want to specify password before saving, please specify it bellow
        // The purpose of this password is not security, but to stop some users from accidentally changing dashboards
        admin: {
          password: ''
        },

        // Add your own custom pannels
        plugins: {
          panels: []
        }

      });
    });
    