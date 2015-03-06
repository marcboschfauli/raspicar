var util = require('util');
var fs = require('fs');
var Firebase = require('firebase');

// Firebase.enableLogging(true);

// set target temperature (in C) to:
var targetTemp = parseInt(process.argv[2], 10); 

var THERMOSTAT_DOWNSTAIRS = '6ZoqoWgRo7ovU8FFyTH3KW5yvLIppFn4';
var THERMOSTAT_UPSTAIRS = 'yV5QHshJLjAzESypWt6tNG5yvLIppFn4';

var selectedThermostat = THERMOSTAT_DOWNSTAIRS;

// Nest connectivity and access data:
var firebaseURL = 'wss://developer-api.nest.com';
var baseNode = new Firebase(firebaseURL);
var tokenFile = './nest-token';



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
 * Communicates HEAT control signals to target Nest unit.
 */
function triggerHeating(targetTemp){
  // set target temperature 
  util.log('*** TO Nest  ');
  util.log('Setting Nest client {AT/MapR connected car} to target temperature: ' + targetTemp + 'C ...');
  baseNode.child('devices/thermostats/' + selectedThermostat + '/target_temperature_c').set(targetTemp);
}

function mainTest(authToken){
  baseNode.auth(authToken, function(error, res) {
    if(error) {
      util.error('Could not authenticate against Nest: ' + error);
    }
    else { // we're authenticated and can read current status
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
      });
      // ... and after waiting 2 sec we kick off the API test
      setTimeout(function() {
        triggerHeating(targetTemp); // set
      },
      5000); // wait period in ms
      setTimeout(function() {
        triggerHeating(targetTemp + 2); // set
      },
      5000); // wait period in ms
      
    }
  });
}

/*******************************************************************************
 * Main
 *
 */
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
            mainTest(data.toString());
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