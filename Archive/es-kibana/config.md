# Collection of commands and configs

## EC2 access

    $ ssh mapr@54.228.99.11
    $ ssh ec2-user@54.228.99.11

## Elasticsearch (ES)

* Root: `/home/ec2-user/elasticsearch-1.3.2/`
* Config: `/home/ec2-user/elasticsearch-1.3.2/config/elasticsearch.yml`
* Logs: config via `elasticsearch.yml`

Control: 

* Start `./bin/elasticsearch` or `./bin/elasticsearch -d` as daemon (background)
* Stop `curl -XPOST 'http://localhost:9200/_shutdown'`

[Installation](http://www.elasticsearch.org/guide/en/elasticsearch/guide/current/_installing_elasticsearch.html):

    $ curl -L -O https://download.elasticsearch.org/elasticsearch/elasticsearch/elasticsearch-1.3.2.zip
    $ unzip elasticsearch-1.3.2.zip
    $ cd elasticsearch-1.3.2

Test:

    $ curl 'http://localhost:9200/?pretty'
    {
      "status" : 200,
      "name" : "Nth Man: the Ultimate Ninja",
      "version" : {
        "number" : "1.3.2",
        "build_hash" : "dee175dbe2f254f3f26992f5d7591939aaefd12f",
        "build_timestamp" : "2014-08-13T14:29:30Z",
        "build_snapshot" : false,
        "lucene_version" : "4.9"
      },
      "tagline" : "You Know, for Search"
    }


## Kibana

* Root: `/home/ec2-user/kibana-3.1.0/`
* Config: `/home/ec2-user/kibana-3.1.0/config.js`
* Logs: -
* Control: via browser/Nginx

Installation:

    $ curl -O https://download.elasticsearch.org/kibana/kibana/kibana-3.1.0.tar.gz
    $ tar zxvf kibana-3.1.0.tar.gz
    $ cd kibana-3.1.0/

In `config.js` set the `elasticsearch` parameter to the FQH of your Elasticsearch server.

Finally, copy contents of `kibana-3.1.0/` to your Nginx and `sudo service nginx start`.


## Fluentd - ES

Following: http://docs.fluentd.org/articles/free-alternative-to-splunk-by-fluentd

    $ /usr/lib64/fluent/ruby/bin/fluent-gem install fluent-plugin-elasticsearch

TBD.

## Nginx

Needed to host Grafana.

* Root: `/etc/nginx/`
* Config: `/etc/nginx/conf.d/default.conf`
* Logs: `/var/log/nginx/access.log`
* Control: `sudo service nginx start`

See also [configuration](http://wiki.nginx.org/Configuration).

