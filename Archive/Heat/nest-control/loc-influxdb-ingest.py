#!/usr/bin/env python
"""
Allows to ingest data from a local buffer log file into InfluxDB. 

Usage: 
     
  ` python test-influxdb-ingest.py`

@author: Michael Hausenblas, http://mhausenblas.info/#i
@since: 2014-09-20
@status: init
"""

import logging
import json
import requests
import sys
import time
from datetime import datetime
from datetime import timedelta

################################################################################
# Defaults
#

DEBUG = True

if DEBUG:
  FORMAT = '%(asctime)-0s %(levelname)s %(message)s [at line %(lineno)d]'
  logging.basicConfig(level=logging.DEBUG, format=FORMAT, datefmt='%Y-%m-%dT%I:%M:%S')
else:
  FORMAT = '%(asctime)-0s %(message)s'
  logging.basicConfig(level=logging.INFO, format=FORMAT, datefmt='%Y-%m-%dT%I:%M:%S')

requests_log = logging.getLogger("requests")
requests_log.setLevel(logging.ERROR)

################################################################################
# Global config
#
HOST = '54.228.99.11' # InfluxDB server IP
DATABASE = 'vw' # InfluxDB target database
SERVER_OFFSET = 1 # InfluxDB server time offset
APICALL = 'http://%s:8086/db/%s/series?u=root&p=root' %(HOST, DATABASE)

lineno = 0 # pointer to the current position in the local buffer log


# Returns and epoch timestamp reppresentation in ms resolution of the 
# datetime object, taking into account time zone offsets.
def to_epoch_ms(dt, time_offset):  
  epoch = datetime.utcfromtimestamp(0)
  delta = dt - timedelta(hours=int(SERVER_OFFSET + time_offset)) - epoch
  # the following only works in Python 2.7 and above:
  # d = delta.total_seconds() * 1000.0 
  # ... and this is the workaround for Python 2.6:
  d = ((delta.microseconds + (delta.seconds + delta.days * 24 * 3600) * 10**6) / 10**6) * 1000.0
  logging.debug('--- time: %s' %(d))
  return int(d)

# Parses a single log line and extracts the respective fields out of it.  
# The log line format is as folllows:
#
#  {"message":"2014-09-21 19:00;ll;200;33.56;83.92;56.86;20;48.2;11.6;20;15.1"}
#
# with the following message schema:
#
# Timestamp;VehicleID;RPM;MPH;Throttle;Load;Fuel_Status;Latitude;Longitude;Altitude;GPS_speed
def parse_line(line, time_offset):
  try:
    # pre-processing:
    line = line.split('{"message":"')[1]
    line = line.split('"}')[0]
    line = line.split(';')
    
    logging.debug('-- raw: %s' %line)
    # field extraction and conversion:
    otime = datetime.strptime(str(line[0]), '%Y-%m-%d %H:%M:%S.%f')
    otime = to_epoch_ms(otime, time_offset)
    vehicleid =  str(line[1])
    logging.debug('--- vehicleid: %s' %vehicleid)
    rpm =  int(line[2])
    logging.debug('--- rpm: %s' %rpm)
    mph = float(line[3])
    logging.debug('--- mph: %s' %mph)
    throttle = float(line[4])
    logging.debug('--- throttle: %s' %throttle)
    vload = float(line[5])
    logging.debug('--- vload: %s' %vload)
    if line[6] == 'NODATA':
      fuelstatus = 0
    else:
      fuelstatus =  int(line[6])
    logging.debug('--- fuelstatus: %s' %fuelstatus)
    lat = float(line[7])
    lng = float(line[8])
    altitude = float(line[9])
    logging.debug('--- location: (lat=%s|lng=%s)@alt=%s' %(lat, lng, altitude))
    gpsspeed = float(line[10])
    logging.debug('--- GPS speed: %s' %(gpsspeed))
    
    # data point assembly:
    points = [ otime, vehicleid, rpm, mph, throttle, vload, fuelstatus, lat, lng, altitude, gpsspeed ]
    return   [ {
        'name': 'car',
        'columns': ['time', 'vehicleid', 'rpm', 'mph','throttle','load','fuelstatus', 'lat', 'lng', 'altitude', 'gpsspeed'],
        'points': [ points ]}
    ]
  except Exception, e:
    logging.error('Error passing line: %s' %e)
    return None

# Ingests data points into InfluxDB reading the values from the local buffer
# file specified via `in_log_filename` and performing timezone offset
# adjustments of the time stamps via the `time_offset` parameter.
def ingest(in_log_filename, time_offset):
  global lineno
  in_log = open(in_log_filename, "r" )
  for i, line in enumerate(in_log):
    if i >= lineno :
      data_point = parse_line(line, time_offset)
      if data_point:
        r = requests.post(APICALL, data=json.dumps(data_point))
        if r.status_code != 200:
          logging.warning('Unable to ingest data point %s into to InfluxDB at %s' %(json.dumps(data_point), APICALL))
      else:
        logging.warning('Skipping line, cannot parse: %s' %(line))
      lineno += 1
  in_log.close()


################################################################################
# Main script
#
if __name__ == '__main__':
  try:
      in_log_filename = sys.argv[1] # path to local buffer
      time_offset = int(sys.argv[2]) # timezone offset (hours) of ingest place
      while True:
        ingest(in_log_filename, time_offset)
        time.sleep(.5) # wait 500ms before polling for new data in the buffer
  except Exception, e:
    logging.error(e)
    sys.exit(2)