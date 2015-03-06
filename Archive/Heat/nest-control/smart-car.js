var util = require('util');
var fs = require('fs');
var influx = require('influx');
var Firebase = require('firebase');

// Firebase.enableLogging(true);


/*******************************************************************************
 * Usage
 * 
 *  $ node smart-car.js $TARGET_HEAT_TEMPERATURE $TRIGGER_RADIUS_HOME $TRIGGER_RADIUS_WORK $THERMOSTAT $SCENARIO
 *
 *  Note that the second last parameter, $THERMOSTAT can take either UP or DOWN. 
 *  Note that last parameter, $SCENARIO can take  FROMHOME or TOWORK or LASTMILE. 
 *
 * Example:
 *
 *  $ node smart-car.js 23 2 3 DOWN FROMHOME
 *  $ node smart-car.js 23 2 3 DOWN TOWORK
 *  $ node smart-car.js 23 2 3 DOWN LASTMILE
 *
 *   These three runs together give: will switch off heating if the car more 
 *   than 2km away from home and set the target temperature to 23C if it's closer 
 *   than 3km from work.
 */


/*******************************************************************************
 * Config and global variables
 */

// geo-location of HOME (48.239727,11.64344 = 1st data point of 21 Sep run):
var HOME_LOCATION_LAT = 48.239727; // 6 decimals -> 0.1m resolution
var HOME_LOCATION_LNG = 11.64344; // 6 decimals -> 0.1m resolution

// geo-location of WORK (VW labs, Ungererstraße 69, 80805 Munich, Germany):
var WORK_LOCATION_LAT = 48.173807; // 6 decimals -> 0.1m resolution
var WORK_LOCATION_LNG = 11.595274; // 6 decimals -> 0.1m resolution

// the cooling temperature (set to when user far enough from home)
var TARGET_TEMPERATURE_COOLING = 19;
// IDs of the thermostats, for now hardcoded. Should be selectable
// by operator on start-up:
var THERMOSTAT_DOWNSTAIRS = '6ZoqoWgRo7ovU8FFyTH3KW5yvLIppFn4';
var THERMOSTAT_UPSTAIRS = 'yV5QHshJLjAzESypWt6tNG5yvLIppFn4';

///////////////     COMMAND LINE PARAMETERS, DON'T TOUCH     ///////////////////
// set target temperature (in C) to:
var targetTemp = parseInt(process.argv[2], 10); 
// ... when car is farther away than triggerRadius (in km):
var triggerRadiusHome = parseInt(process.argv[3], 10); 
// ... when car is closer than triggerRadius (in km):
var triggerRadiusWork = parseInt(process.argv[4], 10); 
// ... chooses target thermostat: either UP or DOWN
var selectedThermostat = whichThermostat(process.argv[5]);
// ... chooses scenario: either FROMHOME or TOWORK or LASTMILE
var scenario = process.argv[6];


////////     DON'T TOUCH THESE UNLESS YOU KNOW WHAT YOU'RE DOING     ///////////
// defines what radius around destination is considered end of replay:
var proximityRadius = 0.17;
// how often the proximity check should be performed (in sec):
var sampleInterval = 4;
// used to control how fast the replay takes place (delay between events):
var replayDelay = 1000;
// states if trigger leaving home has been pulled
var fromHomeTriggered = false;
// states if trigger approaching work has been pulled
var fromWorkTriggered = false;

// InfluxDB connectivity and access data:
var USER = 'root';
var PWD = 'root';
var DATABASE = 'vw';
var client = influx({host: '54.228.99.11', username: USER, password: PWD, database: DATABASE});
var q = 'SELECT lat, lng FROM car WHERE vehicleid=\'hinfahrtvw\'';

// Nest connectivity and access data:
var firebaseURL = 'wss://developer-api.nest.com';
var baseNode = new Firebase(firebaseURL);
var tokenFile = './nest-token';
var nestDataFile = 'front-end/nest-data.json';
var carDataFile = 'front-end/car-data.json';


/*******************************************************************************
 * Functions and callbacks
 */


/**
 * Selects the thermostat, allowed values are DOWN (default if omitted) or  UP.
 */
function whichThermostat(cliParam){
  if(cliParam == null || cliParam == ''){
    return THERMOSTAT_DOWNSTAIRS;
  }
  else{
    if(cliParam == 'DOWN') return THERMOSTAT_DOWNSTAIRS;
    if(cliParam == 'UP') return THERMOSTAT_UPSTAIRS;
  }
}

/**
 * Calculates difference between two locations based on lat|lng.
 *
 * Note: this is naive, only 'as the crow flies', see also for the background:
 *       http://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates-shows-wrong
 * Note: the fourth decimal place is worth up to 11 m and that is our chosen
 *       worst case resolution (given the heater latency this is more than OK).
 */
function calcDistance(lat0, lng0, lat1, lng1){
  var R = 6371; // radius of the Earth in km
  var dLat = toRad(lat1-lat0);
  var dLon = toRad(lng1-lng0);
  var lat1 = toRad(lat0);
  var lat2 = toRad(lat1);
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  return d = R * c;
}

/**
 * Converts numeric degrees to radians.
 */
function toRad(value){
  return value * Math.PI / 180;
}

/**
 * Communicates HEAT control signals to target Nest unit and reads back value.
 */
function triggerHeating(){
  // set target temperature 
  util.log('*** TO Nest  ');
  util.log('Connected car now within specified radius of ' + triggerRadiusWork + 'km.');
  util.log('Setting Nest client {AT/MapR connected car} to target temperature: ' + targetTemp + 'C ...');
  util.debug('TRIGGER HEAT before Nest API call');  
  baseNode.child('devices/thermostats/' + selectedThermostat + '/target_temperature_c').set(targetTemp);
  util.debug('TRIGGER HEAT done');  
  setTimeout(function() {
    baseNode.on('value', function(snapshot) {
      var data = snapshot.val();
      var thermostats = data.devices.thermostats;
      var selectedThermostat_name = readThermostatSignal(thermostats, selectedThermostat, 'name');
      var selectedThermostat_ambient_temperature_c = readThermostatSignal(thermostats, selectedThermostat, 'ambient_temperature_c');
      var selectedThermostat_target_temperature_c = readThermostatSignal(thermostats, selectedThermostat, 'target_temperature_c');
      var selectedThermostat_hvac = readThermostatSignal(thermostats, selectedThermostat, 'hvac_mode');
      util.log('*** FROM Nest  ');
      util.log('Thermostat ' + selectedThermostat_name);
      util.log(' current ambient temperature is ' + selectedThermostat_ambient_temperature_c + 'C');
      util.log(' current target temperature is ' + selectedThermostat_target_temperature_c + 'C');
      util.log(' HVAC mode is ' + selectedThermostat_hvac);
      // util.debug(JSON.stringify(data, null, 2));
      storeThermostatSignal(selectedThermostat_ambient_temperature_c, selectedThermostat_target_temperature_c);
      process.exit(0);
     });
   },
   2000); // wait period in ms
}

/**
 * Communicates COOL control signals to target Nest unit and reads back value.
 */
function triggerCooling(){
  // set target temperature 
  util.log('*** TO Nest  ');
  util.log('Connected car now outside specified radius of ' + triggerRadiusHome + 'km.');
  util.log('Setting Nest client {AT/MapR connected car} to target temperature: ' + TARGET_TEMPERATURE_COOLING + 'C ...');
  util.debug('TRIGGER COOL before Nest API call');  
  baseNode.child('devices/thermostats/' + selectedThermostat + '/target_temperature_c').set(TARGET_TEMPERATURE_COOLING);
  util.debug('TRIGGER COOL done');
  setTimeout(function() {
    baseNode.on('value', function(snapshot) {
      var data = snapshot.val();
      var thermostats = data.devices.thermostats;
      var selectedThermostat_name = readThermostatSignal(thermostats, selectedThermostat, 'name');
      var selectedThermostat_ambient_temperature_c = readThermostatSignal(thermostats, selectedThermostat, 'ambient_temperature_c');
      var selectedThermostat_target_temperature_c = readThermostatSignal(thermostats, selectedThermostat, 'target_temperature_c');
      var selectedThermostat_hvac = readThermostatSignal(thermostats, selectedThermostat, 'hvac_mode');
      util.log('*** FROM Nest  ');
      util.log('Thermostat ' + selectedThermostat_name);
      util.log(' current ambient temperature is ' + selectedThermostat_ambient_temperature_c + 'C');
      util.log(' current target temperature is ' + selectedThermostat_target_temperature_c + 'C');
      util.log(' HVAC mode is ' + selectedThermostat_hvac);
      // util.debug(JSON.stringify(data, null, 2));
      storeThermostatSignal(selectedThermostat_ambient_temperature_c, selectedThermostat_target_temperature_c);
      process.exit(0);
     });
   },
   2000); // wait period in ms
}

/**
 * Parses signal values out of Nest JSON response.
 */
function readThermostatSignal(thermostats, thermostatID, signalKey){
  var thermostat_x = thermostats[thermostatID];
  var signalVal = thermostat_x[signalKey];
  // util.debug('Data received from Nest: ' + JSON.stringify(signalVal));
  return signalVal;
}


/**
 * Callback that is triggered by continous query, realising scenario:
 * car drives away from home (switch off heating).
 */
function scenarioLeavingHome(err, res){
  var header = '';
  var row = '';
  var lat, lng;
  var distFromHome;
  var distToWork;
  var cur = res[0].points.length - 1;; // pointer to current data point, starting with oldest
  var last = new Date(res[0].points[res[0].points.length - 1][0]); // time stamp of previous data point
  var diff; // calculated difference (in s) between two consecutive data points
  
  if(err) throw err;
  
  util.debug('Evaluating time series ' + res[0].name + ' with ' + res[0].points.length + ' data points ...');

  // dump header info
  for(col in res[0].columns){
    header += res[0].columns[col] + ' ';  
  }
  util.debug(header + '\n-----------------------------------------------------');

  // iterate over query result set:
  for(point in res[0].points){
    otime = new Date(res[0].points[cur][0]);
    diff = (otime.getTime() - last.getTime()) / 1000;
    // util.debug('otime=' + otime + ' last= ' + last + ' diff=' + diff);
    if(diff > sampleInterval){ // we've reached the sample interval size
      lat = res[0].points[cur][2];
      lng = res[0].points[cur][3];
            
      // calculate distances, update location so that front-end can display it
      distFromHome = calcDistance(HOME_LOCATION_LAT, HOME_LOCATION_LNG, lat, lng);
      util.log('At ' + otime + ' the car is ' + Math.round(distFromHome * 100)/100 + 'km away from home.');
      distToWork = calcDistance(WORK_LOCATION_LAT, WORK_LOCATION_LNG, lat, lng);
      util.log('At ' + otime + ' the car is ' + Math.round(distToWork * 100)/100 + 'km close to work.');
      storeCarLocation(otime, lat, lng, distFromHome, distToWork);

      if(distFromHome > triggerRadiusHome){ // outside of specified radius ...
        util.debug('TIMESTAMP=' + res[0].points[cur][0]);
        triggerCooling();
        return;
      }
      sleep(replayDelay, function(){
        process.stdout.write('');
      });
      last = otime;
    }
    cur -= 1;
  }
}

/**
 * Callback that is triggered by continous query, realising  scenario:
 * car drives to work (switch on heating).
 */
function scenarioToWork(err, res){
  var header = '';
  var row = '';
  var lat, lng;
  var distFromHome;
  var distToWork;
  var cur = res[0].points.length - 1;; // pointer to current data point, starting with oldest
  var last = new Date(res[0].points[res[0].points.length - 1][0]); // time stamp of previous data point
  var diff; // calculated difference (in s) between two consecutive data points
  
  if(err) throw err;
  
  util.debug('Evaluating time series ' + res[0].name + ' with ' + res[0].points.length + ' data points ...');

  // dump header info
  for(col in res[0].columns){
    header += res[0].columns[col] + ' ';  
  }
  util.debug(header + '\n-----------------------------------------------------');

  // iterate over query result set:
  for(point in res[0].points){
    otime = new Date(res[0].points[cur][0]);
    diff = (otime.getTime() - last.getTime()) / 1000;
    // util.debug('otime=' + otime + ' last= ' + last + ' diff=' + diff);
        
    if(diff > sampleInterval){ // we've reached the sample interval size
      lat = res[0].points[cur][2];
      lng = res[0].points[cur][3];
      
      //util.debug('TRIGGERED HOME: ' + fromHomeTriggered + ', TRIGGERED WORK: ' + fromWorkTriggered);
      
      // calculate distances, update location so that front-end can display it
      // calculate distances, update location so that front-end can display it
      distFromHome = calcDistance(HOME_LOCATION_LAT, HOME_LOCATION_LNG, lat, lng);
      distToWork = calcDistance(WORK_LOCATION_LAT, WORK_LOCATION_LNG, lat, lng);

      if(distFromHome > triggerRadiusHome){
        util.log('At ' + otime + ' the car is ' + Math.round(distFromHome * 100)/100 + 'km away from home.');
        util.log('At ' + otime + ' the car is ' + Math.round(distToWork * 100)/100 + 'km close to work.');
        storeCarLocation(otime, lat, lng, distFromHome, distToWork);
        if(distToWork < triggerRadiusWork){ // inside of specified radius ...
          triggerHeating();
          return;
        }
        // sync with real time
        sleep(replayDelay, function(){
          process.stdout.write('');
        });
      }
      last = otime;
    }
    cur -= 1;
  }
}


/**
 * Callback that is triggered by continous query, realising  scenario:
 * car drives to work last mile.
 */
function scenarioLastMile(err, res){
  var header = '';
  var row = '';
  var lat, lng;
  var distFromHome;
  var distToWork;
  var cur = res[0].points.length - 1;; // pointer to current data point, starting with oldest
  var last = new Date(res[0].points[res[0].points.length - 1][0]); // time stamp of previous data point
  var diff; // calculated difference (in s) between two consecutive data points
  
  if(err) throw err;
  
  // iterate over query result set:
  for(point in res[0].points){
    otime = new Date(res[0].points[cur][0]);
    diff = (otime.getTime() - last.getTime()) / 1000;
        
    if(diff > sampleInterval){ // we've reached the sample interval size
      lat = res[0].points[cur][2];
      lng = res[0].points[cur][3];
      // calculate distances, update location so that front-end can display it
      distFromHome = calcDistance(HOME_LOCATION_LAT, HOME_LOCATION_LNG, lat, lng);
      distToWork = calcDistance(WORK_LOCATION_LAT, WORK_LOCATION_LNG, lat, lng);

      if(distToWork < triggerRadiusWork){
        util.log('At ' + otime + ' the car is ' + Math.round(distFromHome * 100)/100 + 'km away from home.');
        util.log('At ' + otime + ' the car is ' + Math.round(distToWork * 100)/100 + 'km close to work.');
        storeCarLocation(otime, lat, lng, distFromHome, distToWork);
        // sync with real time
        sleep(replayDelay, function(){
          process.stdout.write('');
        });
      }
      last = otime;
    }
    cur -= 1;
  }
}







function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
}

/** 
 * Stores the signals in nestDataFile so that the front-end can read it out.
 * Note: this is a synchronous function, so make sure that it has time to complete.
 */
function storeThermostatSignal(thermostat_ambient_temperature_c, thermostat_target_temperature_c){
  var nestData = {
     ambient : thermostat_ambient_temperature_c,
     target : thermostat_target_temperature_c,
     triggerRadiusHome : triggerRadiusHome,
     triggerRadiusWork : triggerRadiusWork 
  };
  fs.writeFileSync(nestDataFile, JSON.stringify(nestData));
  // util.debug('Stored thermostat data for front-end');
}

/** 
 * Stores the location of the  car in carDataFile so that the front-end can read it out.
 * Note: this is a synchronous function, so make sure that it has time to complete.
 */
function storeCarLocation(timestamp, lat, lng, distFromHome, distToWork){
  var carData = { timestamp : timestamp, lat : lat, lng : lng, distFromHome : distFromHome, distToWork : distToWork };
  fs.writeFileSync(carDataFile, JSON.stringify(carData));
  // util.debug('Stored car location data for front-end');
}

/** 
 * Main callback that expect a valid Nest OAuth 2.0 authentication token 
 * as string as an input and then polls the InfluxDB instance to calculate
 * the distance of the car from HOME and triggers the heating process when
 * closer than triggerRadius (in km).
 */
function mainPollLoop(authToken){  
  baseNode.auth(authToken, function(error, res) {
    if(error) {
      util.error('Could not authenticate against Nest: ' + error);
    }
    else { // we're authenticated and can read current status and then poll
      util.debug('Successfully authenticated against Nest.');
      // read the current signal, store Nest data in front-end directory ...
      baseNode.on('value', function(snapshot) {
        var data = snapshot.val();
        var thermostats = data.devices.thermostats;
        var selectedThermostat_name = readThermostatSignal(thermostats, selectedThermostat, 'name');
        var selectedThermostat_ambient_temperature_c = readThermostatSignal(thermostats, selectedThermostat, 'ambient_temperature_c');
        var selectedThermostat_target_temperature_c = readThermostatSignal(thermostats, selectedThermostat, 'target_temperature_c');
        var selectedThermostat_hvac = readThermostatSignal(thermostats, selectedThermostat, 'hvac_mode');
        util.log('*** FROM Nest  ');
        util.log('Thermostat ' + selectedThermostat_name);
        util.log(' current ambient temperature is ' + selectedThermostat_ambient_temperature_c + 'C');
        util.log(' current target temperature is ' + selectedThermostat_target_temperature_c + 'C');
        util.log(' HVAC mode is ' + selectedThermostat_hvac);
        // util.debug(JSON.stringify(data, null, 2));
        storeThermostatSignal(selectedThermostat_ambient_temperature_c, selectedThermostat_target_temperature_c);
      });
      // ... and after waiting 5 sec we kick off the query:
      // baseNode.child('devices/thermostats/' + selectedThermostat + '/target_temperature_c').set(22);
      if(scenario == 'FROMHOME'){
        util.log('Selected scenario: leaving home');
        setTimeout(function() {
          client.query(q, scenarioLeavingHome);
        },
        2000); // wait period in ms        
      }
      if(scenario == 'TOWORK'){
        util.log('Selected scenario: approaching work');
        setTimeout(function() {
          client.query(q, scenarioToWork);
        },
        2000); // wait period in ms                
      }
    }
  });
}

/*******************************************************************************
 * Main
 *
 */

if(scenario == 'LASTMILE'){ // time series read-only
  util.log('Selected scenario: last mile');
  client.query(q, scenarioLastMile);
}
else{ // Nest control
  fs.exists(tokenFile, function(exists) { // does authentication token exist?
    if(exists) { // read out value from token file
      fs.open(tokenFile, 'r', function(err, fd) {
        if (err) {
          throw 'Error opening file: ' + err;
        }
        else {
          util.debug('Extracting Nest API auth token from: ' + tokenFile);
          fs.readFile(tokenFile, function (err, data) {
            if(err) {
              throw 'Error opening file: ' + err;
            }
            else{
              util.debug('Using existing auth token: ' + data);
              mainPollLoop(data.toString());
            }
          });
        }    
      });
    }
    else { // we need to generate the auth token and store it locally
      util.log('Didn\'t find an auth token. Please acquire one via the Nest API and store it in ./nest-token');
      util.log('See also: https://developer.nest.com/documentation/how-to-auth#accesstoken');
    }
  });
}




