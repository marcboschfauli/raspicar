#!/usr/bin/python

import json
import math
import requests
import sys
from time import sleep

HOST = '54.228.99.11'
DATABASE = 'test'
STATUS_MOD = 10

n = 0
while True:
    for d in range(0, 360):
        v = [{'name': 'sin', 'columns': ['val'], 'points': [[math.sin(math.radians(d))]]}]
        apicall = 'http://%s:8086/db/%s/series?u=root&p=root' %(HOST, DATABASE)
        print 'Trying to ingest %s into %s' % (json.dumps(v), apicall)
        r = requests.post(apicall, data=json.dumps(v))
        if r.status_code != 200:
            print 'Failed to add point to influxdb -- aborting.'
            sys.exit(1)
        n += 1
        sleep(1)
        if n % STATUS_MOD == 0:
            print '%d points inserted.' % n