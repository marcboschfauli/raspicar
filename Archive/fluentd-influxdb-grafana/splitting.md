# Splitting records

## Task

The ingested values from the Pi are ingested in a time series with the name
`pi1.collect` and all values are in one column labelled `message` as so:

    #### Time,RPM,MPH,Throttle,Load,Fuel Status
    10:55:54.246813;776;0.0;17.2549019608;31.7647058824;1000

Now we want to fan that out into six time series:

* pi1.collect.Time
* pi1.collect.RPM
* pi1.collect.MPH
* pi1.collect.Throttle
* pi1.collect.Load
* pi1.collect.FuelStatus

with one column labelled `value` containing the actual value.

## Steps

    select message from pi1.collect where message !~ /Time.*/ limit 10
    select message from pi1.collect where message !~ /Time.*/ and time > now()-20m limit 5
    
    
## Conclusion

Currently not possible doing this in InfluxDB, hence it is done in fluentd
using the [parser](https://github.com/tagomoris/fluent-plugin-parser) plugin:

    $ sudo /usr/lib64/fluent/ruby/bin/fluent-gem install fluent-plugin-parser

    <match **>
      type parser
      format /(?<time>.*);(?<rpm>.*);(?<mph>.*);(?<throttle>.*);(?<load>.*);(?<fuel-status>.*)$/
      key_name message
      tag car
    </match>
