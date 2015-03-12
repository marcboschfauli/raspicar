#!/usr/bin/env python

import obd_io
import serial
import platform
import obd_sensors
import time
import getpass
import os
import threading
from gps import * 
from datetime import datetime
from obd_utils import scanSerial

gpsd = None ## setting the global variable

os.system('clear') #clear the terminal (optional)


class GpsPoller(threading.Thread):
  def __init__(self):
    threading.Thread.__init__(self)
    global gpsd # bring it in scope
    gpsd = gps(mode=WATCH_ENABLE) #starting the stream of info
    self.current_value = None
    self.running = True #setting the thread running to true
 
  def run(self):
    global gpsd
    while gpsp.running:
      gpsd.next() # continue to loop, grab set of gpsd info to clear buffer

class OBD_Recorder():
    def __init__(self, path, car, log_items):  # imports sensor data and creates data log file
        self.port = None
        self.sensorlist = []
        localtime = time.localtime(time.time())
        filename = path+car+"-"+str(localtime[0])+"-"+str(localtime[1])+"-"+str(localtime[2])+"-"+str(localtime[3])+"-"+str(localtime[4])+"-"+str(localtime[5])+".log"
        self.log_file = open(filename, "w", 128)
        self.log_file.write("Timestamp;VehicleID;RPM;MPH;Throttle;Load;Fuel_Status;Latitude;Longitude;Altitude;GPS_speed\n");

        for item in log_items:  # creates list with desired log items
            self.add_log_item(item)

        self.gear_ratios = [34/13, 39/21, 36/23, 27/20, 26/21, 25/22]
        #log_formatter = logging.Formatter('%(asctime)s.%(msecs).03d,%(message)s', "%H:%M:%S")

    def connect(self):  # connects to ports for desired log items
        portnames = scanSerial()
        #portnames = ['COM10']gp
        print portnames
        for port in portnames:
            self.port = obd_io.OBDPort(port, None, 2, 2)
            if(self.port.State == 0):  #
                self.port.close()
                self.port = None
            else:
                break

        if(self.port):
            print "Connected to "+self.port.port.name
            
    def is_connected(self):
        return self.port
        
		
		##only includes log items called from bellow
    def add_log_item(self, item):
        for index, e in enumerate(obd_sensors.SENSORS):
            if(item == e.shortname):
                self.sensorlist.append(index)
                print "Logging item: "+e.name
                break
            
            
    def record_data(self):
        if(self.port is None):
            return None
        
        print "Logging started"
        
        while 1:
            #localtime = datetime.now()
            #current_time = str(localtime.hour)+":"+str(localtime.minute)+":"+str(localtime.second)+"."+str(localtime.microsecond)
            #current_time  = datetime.datetime.now()
            current_time = str(datetime.now())
	    log_string = current_time+";"+car
            results = {}
            for index in self.sensorlist:
                (name, value, unit) = self.port.sensor(index)
                log_string = log_string + ";"+str(value)
                results[obd_sensors.SENSORS[index].shortname] = value;

            gear = self.calculate_gear(results["rpm"], results["speed"])
            log_string = log_string +";"+ str(gpsd.fix.latitude)+";"+ str(gpsd.fix.longitude)+";"+ str(gpsd.fix.altitude)+";"+ str(gpsd.fix.speed)#+ ";" + str(gear)
            self.log_file.write(log_string+"\n")

            
    def calculate_gear(self, rpm, speed):
        if speed == "" or speed == 0:
            return 0
        if rpm == "" or rpm == 0:
            return 0

        rps = rpm/60
        mps = (speed*1.609*1000)/3600
        
        primary_gear = 85/46 #street triple
        final_drive  = 47/16
        
        tyre_circumference = 1.978 #meters

        current_gear_ratio = (rps*tyre_circumference)/(mps*primary_gear*final_drive)
        
        #print current_gear_ratio
        gear = min((abs(current_gear_ratio - i), i) for i in self.gear_ratios)[1] 
        return gear


if __name__ == '__main__':
  gpsp = GpsPoller() # create the thread
  gpsp.start() #start gps
  username = os.getenv("SUDO_USER")  
  car = raw_input('Please enter vehicle ID:')
  logitems = ["rpm", "speed", "throttle_pos", "load", "fuel_status"]
  #o = OBD_Recorder('/home/'+username+'/pyobd-pi/log/',car, logitems)
  o = OBD_Recorder('/home/'+username+'/pyobd-pi/dev/',car, logitems)
  o.connect()

  if not o.is_connected():
      print "Not connected"
  o.record_data()