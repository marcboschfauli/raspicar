#!/bin/bash -

if [ -z "$1" ]
  then
    waittime=5
  else
    waittime=$1
fi

echo "Ingesting random numbers into InfluxDB with $waittime sec delay"
while [ 1 ] 
do
  number=$RANDOM
  jsonval='{ "fluentd_val" : "'$number'"}'
  echo $jsonval | /usr/lib64/fluent/ruby/bin/fluent-cat fluentdts
  echo $jsonval
  sleep $waittime
done