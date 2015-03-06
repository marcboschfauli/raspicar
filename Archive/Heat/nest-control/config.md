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

Note that after a while InfluxDB will suffer from the 'too many open files' issue 
and a quick `ulimit -n` which yields 1024 confirms this. So you gotta add the 
following line to the end of `/etc/security/limits.d/90-nproc.conf`:

    ec2-user hard nofile 65536

which gives us enough space to operate. In order to apply these changes, reboot the instance. 
See also http://stackoverflow.com/questions/11342167/how-to-increase-ulimit-on-amazon-ec2-instance


## Install node.js on EC2

Based on [Joyent's](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager#enterprise-linux-and-fedora-core)
install instructions:

    $ sudo yum install nodejs npm

## InfluxDB from node.js
Using node module [node-influx](https://github.com/bencevans/node-influx). 
In order to work, you'll need [node.js](http://nodejs.org/) installed that comes 
with the package manager `npm`. 

Note that `npm install influx` will install the package locally (as a sub-dir) 
of the current directory (and that's OK).


## Nest from node.js
Using node module [firebase](https://www.npmjs.org/package/firebase).

Note that `npm install firebase` will install the package locally.


Note that before you can programmatically access a Nest you need to define a [client](https://developer.nest.com/clients).
The Firebase URL of the Nest API is `wss://developer-api.nest.com` and code examples are here:

* ETA API [example](https://developer.nest.com/documentation/eta-reference)
* Web app thermostat control [example](https://github.com/nestlabs/control-jquery)



