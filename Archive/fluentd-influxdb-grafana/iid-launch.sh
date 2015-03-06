#!/bin/bash
#
# launches the InfluxDB Ingest process that is reading data from local log file
# (populated by fluentd) and inserting the data into an InfluxDB instance
# configured via the Python script

IID_PY_SCRIPT=/home/ec2-user/influxdb-ingest/local-influxdb-ingest.py
INPUT_LOG_FILE_BASED=/tmp/piin.
TIMEZONE_OFFSET=1

# constructs the today's log file name fluentd dumps the inbound data into
todays_logfile=$(date +%Y%m%d).log

# launch the Python script with dynamic log file name and static timezone offset
python $IID_PY_SCRIPT $INPUT_LOG_FILE_BASED$todays_logfile $TIMEZONE_OFFSET