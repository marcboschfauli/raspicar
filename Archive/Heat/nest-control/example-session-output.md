This example session shows that Nest is switched off if the car more than `2km` away 
from home and sets the target temperature to `23C` if it's closer than `3km` 
from work. 

    $ ./run-simulation.sh 23 2 3
    Launching simulation for client AT/MapR connected car
    DEBUG: Extracting Nest API auth token from: ./nest-token
    DEBUG: Using existing auth token: c.AycmBHVwPgoMfJ1Jj1BLl83UCwzVB9HoH7lxSqQmdTYlQ0JtjEvUUrG78fbeQrHindiCPHePJ6OQBFENPzRqTMrVWJ1tfl7DZ2OHfIQfdHGqbga5UGSXwPJww6ZUHPPp1PPueyY8BbBlno0v
    DEBUG: Successfully authenticated against Nest.
    23 Sep 11:46:23 - Selected scenario: leaving home
    23 Sep 11:46:23 - *** FROM Nest
    23 Sep 11:46:23 - Thermostat Downstairs
    23 Sep 11:46:23 -  current ambient temperature is 22C
    23 Sep 11:46:23 -  current target temperature is 22C
    23 Sep 11:46:23 -  HVAC mode is heat
    DEBUG: Evaluating time series car with 1685 data points ...
    DEBUG: time sequence_number lat lng
    -----------------------------------------------------
    23 Sep 11:46:25 - At Sun Sep 21 2014 12:55:39 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:46:25 - At Sun Sep 21 2014 12:55:39 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:46:26 - At Sun Sep 21 2014 12:55:42 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:46:26 - At Sun Sep 21 2014 12:55:42 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:46:27 - At Sun Sep 21 2014 12:55:45 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:46:27 - At Sun Sep 21 2014 12:55:45 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:46:28 - At Sun Sep 21 2014 12:55:48 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:46:28 - At Sun Sep 21 2014 12:55:48 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:46:29 - At Sun Sep 21 2014 12:55:51 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:46:29 - At Sun Sep 21 2014 12:55:51 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:46:30 - At Sun Sep 21 2014 12:55:54 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:46:30 - At Sun Sep 21 2014 12:55:54 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:46:31 - At Sun Sep 21 2014 12:55:57 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:46:31 - At Sun Sep 21 2014 12:55:57 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:46:32 - At Sun Sep 21 2014 12:56:00 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:46:32 - At Sun Sep 21 2014 12:56:00 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:46:33 - At Sun Sep 21 2014 12:56:03 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:46:33 - At Sun Sep 21 2014 12:56:03 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:46:34 - At Sun Sep 21 2014 12:56:06 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:46:34 - At Sun Sep 21 2014 12:56:06 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:46:35 - At Sun Sep 21 2014 12:56:09 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:46:35 - At Sun Sep 21 2014 12:56:09 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:46:36 - At Sun Sep 21 2014 12:56:12 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:46:36 - At Sun Sep 21 2014 12:56:12 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:46:37 - At Sun Sep 21 2014 12:56:15 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:46:37 - At Sun Sep 21 2014 12:56:15 GMT-0400 (EDT) the car is 8.53km close to work.
    23 Sep 11:46:38 - At Sun Sep 21 2014 12:56:18 GMT-0400 (EDT) the car is 0.01km away from home.
    23 Sep 11:46:38 - At Sun Sep 21 2014 12:56:18 GMT-0400 (EDT) the car is 8.53km close to work.
    23 Sep 11:46:39 - At Sun Sep 21 2014 12:56:21 GMT-0400 (EDT) the car is 0.02km away from home.
    23 Sep 11:46:39 - At Sun Sep 21 2014 12:56:21 GMT-0400 (EDT) the car is 8.52km close to work.
    23 Sep 11:46:40 - At Sun Sep 21 2014 12:56:24 GMT-0400 (EDT) the car is 0.04km away from home.
    23 Sep 11:46:40 - At Sun Sep 21 2014 12:56:24 GMT-0400 (EDT) the car is 8.5km close to work.
    23 Sep 11:46:41 - At Sun Sep 21 2014 12:56:27 GMT-0400 (EDT) the car is 0.06km away from home.
    23 Sep 11:46:41 - At Sun Sep 21 2014 12:56:27 GMT-0400 (EDT) the car is 8.48km close to work.
    23 Sep 11:46:42 - At Sun Sep 21 2014 12:56:30 GMT-0400 (EDT) the car is 0.09km away from home.
    23 Sep 11:46:42 - At Sun Sep 21 2014 12:56:30 GMT-0400 (EDT) the car is 8.45km close to work.
    23 Sep 11:46:43 - At Sun Sep 21 2014 12:56:33 GMT-0400 (EDT) the car is 0.12km away from home.
    23 Sep 11:46:43 - At Sun Sep 21 2014 12:56:33 GMT-0400 (EDT) the car is 8.41km close to work.
    23 Sep 11:46:44 - At Sun Sep 21 2014 12:56:36 GMT-0400 (EDT) the car is 0.17km away from home.
    23 Sep 11:46:44 - At Sun Sep 21 2014 12:56:36 GMT-0400 (EDT) the car is 8.36km close to work.
    23 Sep 11:46:45 - At Sun Sep 21 2014 12:56:39 GMT-0400 (EDT) the car is 0.21km away from home.
    23 Sep 11:46:45 - At Sun Sep 21 2014 12:56:39 GMT-0400 (EDT) the car is 8.32km close to work.
    23 Sep 11:46:46 - At Sun Sep 21 2014 12:56:42 GMT-0400 (EDT) the car is 0.25km away from home.
    23 Sep 11:46:46 - At Sun Sep 21 2014 12:56:42 GMT-0400 (EDT) the car is 8.28km close to work.
    23 Sep 11:46:47 - At Sun Sep 21 2014 12:56:45 GMT-0400 (EDT) the car is 0.28km away from home.
    23 Sep 11:46:47 - At Sun Sep 21 2014 12:56:45 GMT-0400 (EDT) the car is 8.26km close to work.
    23 Sep 11:46:48 - At Sun Sep 21 2014 12:56:48 GMT-0400 (EDT) the car is 0.32km away from home.
    23 Sep 11:46:48 - At Sun Sep 21 2014 12:56:48 GMT-0400 (EDT) the car is 8.22km close to work.
    23 Sep 11:46:49 - At Sun Sep 21 2014 12:56:51 GMT-0400 (EDT) the car is 0.36km away from home.
    23 Sep 11:46:49 - At Sun Sep 21 2014 12:56:51 GMT-0400 (EDT) the car is 8.18km close to work.
    23 Sep 11:46:50 - At Sun Sep 21 2014 12:56:54 GMT-0400 (EDT) the car is 0.41km away from home.
    23 Sep 11:46:50 - At Sun Sep 21 2014 12:56:54 GMT-0400 (EDT) the car is 8.14km close to work.
    23 Sep 11:46:51 - At Sun Sep 21 2014 12:56:57 GMT-0400 (EDT) the car is 0.45km away from home.
    23 Sep 11:46:51 - At Sun Sep 21 2014 12:56:57 GMT-0400 (EDT) the car is 8.09km close to work.
    23 Sep 11:46:52 - At Sun Sep 21 2014 12:57:00 GMT-0400 (EDT) the car is 0.49km away from home.
    23 Sep 11:46:52 - At Sun Sep 21 2014 12:57:00 GMT-0400 (EDT) the car is 8.05km close to work.
    23 Sep 11:46:53 - At Sun Sep 21 2014 12:57:03 GMT-0400 (EDT) the car is 0.54km away from home.
    23 Sep 11:46:53 - At Sun Sep 21 2014 12:57:03 GMT-0400 (EDT) the car is 8.01km close to work.
    23 Sep 11:46:54 - At Sun Sep 21 2014 12:57:06 GMT-0400 (EDT) the car is 0.58km away from home.
    23 Sep 11:46:54 - At Sun Sep 21 2014 12:57:06 GMT-0400 (EDT) the car is 7.98km close to work.
    23 Sep 11:46:55 - At Sun Sep 21 2014 12:57:09 GMT-0400 (EDT) the car is 0.61km away from home.
    23 Sep 11:46:55 - At Sun Sep 21 2014 12:57:09 GMT-0400 (EDT) the car is 7.94km close to work.
    23 Sep 11:46:56 - At Sun Sep 21 2014 12:57:12 GMT-0400 (EDT) the car is 0.65km away from home.
    23 Sep 11:46:56 - At Sun Sep 21 2014 12:57:12 GMT-0400 (EDT) the car is 7.91km close to work.
    23 Sep 11:46:57 - At Sun Sep 21 2014 12:57:15 GMT-0400 (EDT) the car is 0.7km away from home.
    23 Sep 11:46:57 - At Sun Sep 21 2014 12:57:15 GMT-0400 (EDT) the car is 7.86km close to work.
    23 Sep 11:46:58 - At Sun Sep 21 2014 12:57:18 GMT-0400 (EDT) the car is 0.72km away from home.
    23 Sep 11:46:58 - At Sun Sep 21 2014 12:57:18 GMT-0400 (EDT) the car is 7.84km close to work.
    23 Sep 11:46:59 - At Sun Sep 21 2014 12:57:21 GMT-0400 (EDT) the car is 0.77km away from home.
    23 Sep 11:46:59 - At Sun Sep 21 2014 12:57:21 GMT-0400 (EDT) the car is 7.8km close to work.
    23 Sep 11:47:00 - At Sun Sep 21 2014 12:57:24 GMT-0400 (EDT) the car is 0.8km away from home.
    23 Sep 11:47:00 - At Sun Sep 21 2014 12:57:24 GMT-0400 (EDT) the car is 7.77km close to work.
    23 Sep 11:47:01 - At Sun Sep 21 2014 12:57:27 GMT-0400 (EDT) the car is 0.84km away from home.
    23 Sep 11:47:01 - At Sun Sep 21 2014 12:57:27 GMT-0400 (EDT) the car is 7.73km close to work.
    23 Sep 11:47:02 - At Sun Sep 21 2014 12:57:30 GMT-0400 (EDT) the car is 0.87km away from home.
    23 Sep 11:47:02 - At Sun Sep 21 2014 12:57:30 GMT-0400 (EDT) the car is 7.7km close to work.
    23 Sep 11:47:03 - At Sun Sep 21 2014 12:57:33 GMT-0400 (EDT) the car is 0.9km away from home.
    23 Sep 11:47:03 - At Sun Sep 21 2014 12:57:33 GMT-0400 (EDT) the car is 7.68km close to work.
    23 Sep 11:47:04 - At Sun Sep 21 2014 12:57:36 GMT-0400 (EDT) the car is 0.95km away from home.
    23 Sep 11:47:04 - At Sun Sep 21 2014 12:57:36 GMT-0400 (EDT) the car is 7.64km close to work.
    23 Sep 11:47:05 - At Sun Sep 21 2014 12:57:39 GMT-0400 (EDT) the car is 0.98km away from home.
    23 Sep 11:47:05 - At Sun Sep 21 2014 12:57:39 GMT-0400 (EDT) the car is 7.61km close to work.
    23 Sep 11:47:06 - At Sun Sep 21 2014 12:57:42 GMT-0400 (EDT) the car is 1.01km away from home.
    23 Sep 11:47:06 - At Sun Sep 21 2014 12:57:42 GMT-0400 (EDT) the car is 7.59km close to work.
    23 Sep 11:47:07 - At Sun Sep 21 2014 12:57:45 GMT-0400 (EDT) the car is 1.05km away from home.
    23 Sep 11:47:07 - At Sun Sep 21 2014 12:57:45 GMT-0400 (EDT) the car is 7.56km close to work.
    23 Sep 11:47:08 - At Sun Sep 21 2014 12:57:48 GMT-0400 (EDT) the car is 1.07km away from home.
    23 Sep 11:47:08 - At Sun Sep 21 2014 12:57:48 GMT-0400 (EDT) the car is 7.53km close to work.
    23 Sep 11:47:09 - At Sun Sep 21 2014 12:57:51 GMT-0400 (EDT) the car is 1.11km away from home.
    23 Sep 11:47:09 - At Sun Sep 21 2014 12:57:51 GMT-0400 (EDT) the car is 7.5km close to work.
    23 Sep 11:47:10 - At Sun Sep 21 2014 12:57:54 GMT-0400 (EDT) the car is 1.15km away from home.
    23 Sep 11:47:10 - At Sun Sep 21 2014 12:57:54 GMT-0400 (EDT) the car is 7.46km close to work.
    23 Sep 11:47:11 - At Sun Sep 21 2014 12:57:57 GMT-0400 (EDT) the car is 1.2km away from home.
    23 Sep 11:47:11 - At Sun Sep 21 2014 12:57:57 GMT-0400 (EDT) the car is 7.42km close to work.
    23 Sep 11:47:12 - At Sun Sep 21 2014 12:58:00 GMT-0400 (EDT) the car is 1.24km away from home.
    23 Sep 11:47:12 - At Sun Sep 21 2014 12:58:00 GMT-0400 (EDT) the car is 7.37km close to work.
    23 Sep 11:47:13 - At Sun Sep 21 2014 12:58:03 GMT-0400 (EDT) the car is 1.29km away from home.
    23 Sep 11:47:13 - At Sun Sep 21 2014 12:58:03 GMT-0400 (EDT) the car is 7.33km close to work.
    23 Sep 11:47:14 - At Sun Sep 21 2014 12:58:06 GMT-0400 (EDT) the car is 1.34km away from home.
    23 Sep 11:47:14 - At Sun Sep 21 2014 12:58:06 GMT-0400 (EDT) the car is 7.28km close to work.
    23 Sep 11:47:15 - At Sun Sep 21 2014 12:58:09 GMT-0400 (EDT) the car is 1.4km away from home.
    23 Sep 11:47:15 - At Sun Sep 21 2014 12:58:09 GMT-0400 (EDT) the car is 7.22km close to work.
    23 Sep 11:47:16 - At Sun Sep 21 2014 12:58:12 GMT-0400 (EDT) the car is 1.46km away from home.
    23 Sep 11:47:16 - At Sun Sep 21 2014 12:58:12 GMT-0400 (EDT) the car is 7.16km close to work.
    23 Sep 11:47:17 - At Sun Sep 21 2014 12:58:15 GMT-0400 (EDT) the car is 1.53km away from home.
    23 Sep 11:47:17 - At Sun Sep 21 2014 12:58:15 GMT-0400 (EDT) the car is 7.1km close to work.
    23 Sep 11:47:18 - At Sun Sep 21 2014 12:58:18 GMT-0400 (EDT) the car is 1.6km away from home.
    23 Sep 11:47:18 - At Sun Sep 21 2014 12:58:18 GMT-0400 (EDT) the car is 7.03km close to work.
    23 Sep 11:47:19 - At Sun Sep 21 2014 12:58:21 GMT-0400 (EDT) the car is 1.67km away from home.
    23 Sep 11:47:19 - At Sun Sep 21 2014 12:58:21 GMT-0400 (EDT) the car is 6.97km close to work.
    23 Sep 11:47:20 - At Sun Sep 21 2014 12:58:24 GMT-0400 (EDT) the car is 1.74km away from home.
    23 Sep 11:47:20 - At Sun Sep 21 2014 12:58:24 GMT-0400 (EDT) the car is 6.9km close to work.
    23 Sep 11:47:21 - At Sun Sep 21 2014 12:58:27 GMT-0400 (EDT) the car is 1.81km away from home.
    23 Sep 11:47:21 - At Sun Sep 21 2014 12:58:27 GMT-0400 (EDT) the car is 6.83km close to work.
    23 Sep 11:47:22 - At Sun Sep 21 2014 12:58:30 GMT-0400 (EDT) the car is 1.89km away from home.
    23 Sep 11:47:22 - At Sun Sep 21 2014 12:58:30 GMT-0400 (EDT) the car is 6.76km close to work.
    23 Sep 11:47:23 - At Sun Sep 21 2014 12:58:33 GMT-0400 (EDT) the car is 1.96km away from home.
    23 Sep 11:47:23 - At Sun Sep 21 2014 12:58:33 GMT-0400 (EDT) the car is 6.69km close to work.
    23 Sep 11:47:24 - At Sun Sep 21 2014 12:58:36 GMT-0400 (EDT) the car is 2.05km away from home.
    23 Sep 11:47:24 - At Sun Sep 21 2014 12:58:36 GMT-0400 (EDT) the car is 6.6km close to work.
    DEBUG: TIMESTAMP=1411318716000
    23 Sep 11:47:24 - *** TO Nest
    23 Sep 11:47:24 - Connected car now outside specified radius of 2km.
    23 Sep 11:47:24 - Setting Nest client {AT/MapR connected car} to target temperature: 19C ...
    DEBUG: TRIGGER COOL before Nest API call
    23 Sep 11:47:24 - *** FROM Nest
    23 Sep 11:47:24 - Thermostat Downstairs
    23 Sep 11:47:24 -  current ambient temperature is 22C
    23 Sep 11:47:24 -  current target temperature is 19C
    23 Sep 11:47:24 -  HVAC mode is heat
    DEBUG: TRIGGER COOL done
    23 Sep 11:47:24 - *** FROM Nest
    23 Sep 11:47:24 - Thermostat Downstairs
    23 Sep 11:47:24 -  current ambient temperature is 22C
    23 Sep 11:47:24 -  current target temperature is 19C
    23 Sep 11:47:24 -  HVAC mode is heat
    23 Sep 11:47:24 - *** FROM Nest
    23 Sep 11:47:24 - Thermostat Downstairs
    23 Sep 11:47:24 -  current ambient temperature is 22C
    23 Sep 11:47:24 -  current target temperature is 19C
    23 Sep 11:47:24 -  HVAC mode is heat
    23 Sep 11:47:25 - *** FROM Nest
    23 Sep 11:47:25 - Thermostat Downstairs
    23 Sep 11:47:25 -  current ambient temperature is 22C
    23 Sep 11:47:25 -  current target temperature is 19C
    23 Sep 11:47:25 -  HVAC mode is heat
    23 Sep 11:47:25 - *** FROM Nest
    23 Sep 11:47:25 - Thermostat Downstairs
    23 Sep 11:47:25 -  current ambient temperature is 22C
    23 Sep 11:47:25 -  current target temperature is 19C
    23 Sep 11:47:25 -  HVAC mode is heat
    23 Sep 11:47:26 - *** FROM Nest
    23 Sep 11:47:26 - Thermostat Downstairs
    23 Sep 11:47:26 -  current ambient temperature is 22C
    23 Sep 11:47:26 -  current target temperature is 19C
    23 Sep 11:47:26 -  HVAC mode is heat
    DEBUG: Extracting Nest API auth token from: ./nest-token
    DEBUG: Using existing auth token: c.AycmBHVwPgoMfJ1Jj1BLl83UCwzVB9HoH7lxSqQmdTYlQ0JtjEvUUrG78fbeQrHindiCPHePJ6OQBFENPzRqTMrVWJ1tfl7DZ2OHfIQfdHGqbga5UGSXwPJww6ZUHPPp1PPueyY8BbBlno0v
    DEBUG: Successfully authenticated against Nest.
    23 Sep 11:47:27 - Selected scenario: approaching work
    23 Sep 11:47:27 - *** FROM Nest
    23 Sep 11:47:27 - Thermostat Downstairs
    23 Sep 11:47:27 -  current ambient temperature is 22C
    23 Sep 11:47:27 -  current target temperature is 19C
    23 Sep 11:47:27 -  HVAC mode is heat
    DEBUG: Evaluating time series car with 1685 data points ...
    DEBUG: time sequence_number lat lng
    -----------------------------------------------------
    23 Sep 11:47:30 - At Sun Sep 21 2014 12:58:36 GMT-0400 (EDT) the car is 2.05km away from home.
    23 Sep 11:47:30 - At Sun Sep 21 2014 12:58:36 GMT-0400 (EDT) the car is 6.6km close to work.
    23 Sep 11:47:31 - At Sun Sep 21 2014 12:58:39 GMT-0400 (EDT) the car is 2.1km away from home.
    23 Sep 11:47:31 - At Sun Sep 21 2014 12:58:39 GMT-0400 (EDT) the car is 6.56km close to work.
    23 Sep 11:47:32 - At Sun Sep 21 2014 12:58:42 GMT-0400 (EDT) the car is 2.18km away from home.
    23 Sep 11:47:32 - At Sun Sep 21 2014 12:58:42 GMT-0400 (EDT) the car is 6.49km close to work.
    23 Sep 11:47:33 - At Sun Sep 21 2014 12:58:45 GMT-0400 (EDT) the car is 2.25km away from home.
    23 Sep 11:47:33 - At Sun Sep 21 2014 12:58:45 GMT-0400 (EDT) the car is 6.42km close to work.
    23 Sep 11:47:34 - At Sun Sep 21 2014 12:58:48 GMT-0400 (EDT) the car is 2.32km away from home.
    23 Sep 11:47:34 - At Sun Sep 21 2014 12:58:48 GMT-0400 (EDT) the car is 6.35km close to work.
    23 Sep 11:47:35 - At Sun Sep 21 2014 12:58:51 GMT-0400 (EDT) the car is 2.39km away from home.
    23 Sep 11:47:35 - At Sun Sep 21 2014 12:58:51 GMT-0400 (EDT) the car is 6.28km close to work.
    23 Sep 11:47:36 - At Sun Sep 21 2014 12:58:54 GMT-0400 (EDT) the car is 2.46km away from home.
    23 Sep 11:47:36 - At Sun Sep 21 2014 12:58:54 GMT-0400 (EDT) the car is 6.22km close to work.
    23 Sep 11:47:37 - At Sun Sep 21 2014 12:58:57 GMT-0400 (EDT) the car is 2.54km away from home.
    23 Sep 11:47:37 - At Sun Sep 21 2014 12:58:57 GMT-0400 (EDT) the car is 6.15km close to work.
    23 Sep 11:47:38 - At Sun Sep 21 2014 12:59:00 GMT-0400 (EDT) the car is 2.61km away from home.
    23 Sep 11:47:38 - At Sun Sep 21 2014 12:59:00 GMT-0400 (EDT) the car is 6.08km close to work.
    23 Sep 11:47:39 - At Sun Sep 21 2014 12:59:03 GMT-0400 (EDT) the car is 2.68km away from home.
    23 Sep 11:47:39 - At Sun Sep 21 2014 12:59:03 GMT-0400 (EDT) the car is 6.01km close to work.
    23 Sep 11:47:40 - At Sun Sep 21 2014 12:59:06 GMT-0400 (EDT) the car is 2.75km away from home.
    23 Sep 11:47:40 - At Sun Sep 21 2014 12:59:06 GMT-0400 (EDT) the car is 5.95km close to work.
    23 Sep 11:47:41 - At Sun Sep 21 2014 12:59:09 GMT-0400 (EDT) the car is 2.83km away from home.
    23 Sep 11:47:41 - At Sun Sep 21 2014 12:59:09 GMT-0400 (EDT) the car is 5.88km close to work.
    23 Sep 11:47:42 - At Sun Sep 21 2014 12:59:12 GMT-0400 (EDT) the car is 2.9km away from home.
    23 Sep 11:47:42 - At Sun Sep 21 2014 12:59:12 GMT-0400 (EDT) the car is 5.81km close to work.
    23 Sep 11:47:43 - At Sun Sep 21 2014 12:59:15 GMT-0400 (EDT) the car is 2.96km away from home.
    23 Sep 11:47:43 - At Sun Sep 21 2014 12:59:15 GMT-0400 (EDT) the car is 5.75km close to work.
    23 Sep 11:47:44 - At Sun Sep 21 2014 12:59:18 GMT-0400 (EDT) the car is 3.02km away from home.
    23 Sep 11:47:44 - At Sun Sep 21 2014 12:59:18 GMT-0400 (EDT) the car is 5.7km close to work.
    23 Sep 11:47:45 - At Sun Sep 21 2014 12:59:21 GMT-0400 (EDT) the car is 3.07km away from home.
    23 Sep 11:47:45 - At Sun Sep 21 2014 12:59:21 GMT-0400 (EDT) the car is 5.65km close to work.
    23 Sep 11:47:46 - At Sun Sep 21 2014 12:59:24 GMT-0400 (EDT) the car is 3.12km away from home.
    23 Sep 11:47:46 - At Sun Sep 21 2014 12:59:24 GMT-0400 (EDT) the car is 5.6km close to work.
    23 Sep 11:47:47 - At Sun Sep 21 2014 12:59:27 GMT-0400 (EDT) the car is 3.17km away from home.
    23 Sep 11:47:47 - At Sun Sep 21 2014 12:59:27 GMT-0400 (EDT) the car is 5.55km close to work.
    23 Sep 11:47:48 - At Sun Sep 21 2014 12:59:30 GMT-0400 (EDT) the car is 3.23km away from home.
    23 Sep 11:47:48 - At Sun Sep 21 2014 12:59:30 GMT-0400 (EDT) the car is 5.49km close to work.
    23 Sep 11:47:49 - At Sun Sep 21 2014 12:59:33 GMT-0400 (EDT) the car is 3.26km away from home.
    23 Sep 11:47:49 - At Sun Sep 21 2014 12:59:33 GMT-0400 (EDT) the car is 5.46km close to work.
    23 Sep 11:47:50 - At Sun Sep 21 2014 12:59:36 GMT-0400 (EDT) the car is 3.3km away from home.
    23 Sep 11:47:50 - At Sun Sep 21 2014 12:59:36 GMT-0400 (EDT) the car is 5.42km close to work.
    23 Sep 11:47:51 - At Sun Sep 21 2014 12:59:39 GMT-0400 (EDT) the car is 3.35km away from home.
    23 Sep 11:47:51 - At Sun Sep 21 2014 12:59:39 GMT-0400 (EDT) the car is 5.38km close to work.
    23 Sep 11:47:52 - At Sun Sep 21 2014 12:59:42 GMT-0400 (EDT) the car is 3.4km away from home.
    23 Sep 11:47:52 - At Sun Sep 21 2014 12:59:42 GMT-0400 (EDT) the car is 5.32km close to work.
    23 Sep 11:47:53 - At Sun Sep 21 2014 12:59:45 GMT-0400 (EDT) the car is 3.43km away from home.
    23 Sep 11:47:53 - At Sun Sep 21 2014 12:59:45 GMT-0400 (EDT) the car is 5.29km close to work.
    23 Sep 11:47:54 - At Sun Sep 21 2014 12:59:48 GMT-0400 (EDT) the car is 3.48km away from home.
    23 Sep 11:47:54 - At Sun Sep 21 2014 12:59:48 GMT-0400 (EDT) the car is 5.24km close to work.
    23 Sep 11:47:55 - At Sun Sep 21 2014 12:59:51 GMT-0400 (EDT) the car is 3.53km away from home.
    23 Sep 11:47:55 - At Sun Sep 21 2014 12:59:51 GMT-0400 (EDT) the car is 5.2km close to work.
    23 Sep 11:47:56 - At Sun Sep 21 2014 12:59:54 GMT-0400 (EDT) the car is 3.59km away from home.
    23 Sep 11:47:56 - At Sun Sep 21 2014 12:59:54 GMT-0400 (EDT) the car is 5.14km close to work.
    23 Sep 11:47:57 - At Sun Sep 21 2014 12:59:57 GMT-0400 (EDT) the car is 3.64km away from home.
    23 Sep 11:47:57 - At Sun Sep 21 2014 12:59:57 GMT-0400 (EDT) the car is 5.09km close to work.
    23 Sep 11:47:58 - At Sun Sep 21 2014 13:00:00 GMT-0400 (EDT) the car is 3.67km away from home.
    23 Sep 11:47:58 - At Sun Sep 21 2014 13:00:00 GMT-0400 (EDT) the car is 5.06km close to work.
    23 Sep 11:47:59 - At Sun Sep 21 2014 13:00:03 GMT-0400 (EDT) the car is 3.71km away from home.
    23 Sep 11:47:59 - At Sun Sep 21 2014 13:00:03 GMT-0400 (EDT) the car is 5.01km close to work.
    23 Sep 11:48:00 - At Sun Sep 21 2014 13:00:06 GMT-0400 (EDT) the car is 3.76km away from home.
    23 Sep 11:48:00 - At Sun Sep 21 2014 13:00:06 GMT-0400 (EDT) the car is 4.97km close to work.
    23 Sep 11:48:01 - At Sun Sep 21 2014 13:00:09 GMT-0400 (EDT) the car is 3.81km away from home.
    23 Sep 11:48:01 - At Sun Sep 21 2014 13:00:09 GMT-0400 (EDT) the car is 4.92km close to work.
    23 Sep 11:48:02 - At Sun Sep 21 2014 13:00:12 GMT-0400 (EDT) the car is 3.86km away from home.
    23 Sep 11:48:02 - At Sun Sep 21 2014 13:00:12 GMT-0400 (EDT) the car is 4.87km close to work.
    23 Sep 11:48:03 - At Sun Sep 21 2014 13:00:15 GMT-0400 (EDT) the car is 3.9km away from home.
    23 Sep 11:48:03 - At Sun Sep 21 2014 13:00:15 GMT-0400 (EDT) the car is 4.83km close to work.
    23 Sep 11:48:04 - At Sun Sep 21 2014 13:00:18 GMT-0400 (EDT) the car is 3.95km away from home.
    23 Sep 11:48:04 - At Sun Sep 21 2014 13:00:18 GMT-0400 (EDT) the car is 4.78km close to work.
    23 Sep 11:48:05 - At Sun Sep 21 2014 13:00:21 GMT-0400 (EDT) the car is 4.01km away from home.
    23 Sep 11:48:05 - At Sun Sep 21 2014 13:00:21 GMT-0400 (EDT) the car is 4.72km close to work.
    23 Sep 11:48:06 - At Sun Sep 21 2014 13:00:24 GMT-0400 (EDT) the car is 4.06km away from home.
    23 Sep 11:48:06 - At Sun Sep 21 2014 13:00:24 GMT-0400 (EDT) the car is 4.68km close to work.
    23 Sep 11:48:07 - At Sun Sep 21 2014 13:00:27 GMT-0400 (EDT) the car is 4.09km away from home.
    23 Sep 11:48:07 - At Sun Sep 21 2014 13:00:27 GMT-0400 (EDT) the car is 4.64km close to work.
    23 Sep 11:48:08 - At Sun Sep 21 2014 13:00:30 GMT-0400 (EDT) the car is 4.14km away from home.
    23 Sep 11:48:08 - At Sun Sep 21 2014 13:00:30 GMT-0400 (EDT) the car is 4.6km close to work.
    23 Sep 11:48:09 - At Sun Sep 21 2014 13:00:33 GMT-0400 (EDT) the car is 4.19km away from home.
    23 Sep 11:48:09 - At Sun Sep 21 2014 13:00:33 GMT-0400 (EDT) the car is 4.55km close to work.
    23 Sep 11:48:10 - At Sun Sep 21 2014 13:00:36 GMT-0400 (EDT) the car is 4.24km away from home.
    23 Sep 11:48:10 - At Sun Sep 21 2014 13:00:36 GMT-0400 (EDT) the car is 4.5km close to work.
    23 Sep 11:48:11 - At Sun Sep 21 2014 13:00:39 GMT-0400 (EDT) the car is 4.3km away from home.
    23 Sep 11:48:11 - At Sun Sep 21 2014 13:00:39 GMT-0400 (EDT) the car is 4.44km close to work.
    23 Sep 11:48:12 - At Sun Sep 21 2014 13:00:42 GMT-0400 (EDT) the car is 4.35km away from home.
    23 Sep 11:48:12 - At Sun Sep 21 2014 13:00:42 GMT-0400 (EDT) the car is 4.39km close to work.
    23 Sep 11:48:13 - At Sun Sep 21 2014 13:00:45 GMT-0400 (EDT) the car is 4.39km away from home.
    23 Sep 11:48:13 - At Sun Sep 21 2014 13:00:45 GMT-0400 (EDT) the car is 4.36km close to work.
    23 Sep 11:48:14 - At Sun Sep 21 2014 13:00:48 GMT-0400 (EDT) the car is 4.44km away from home.
    23 Sep 11:48:14 - At Sun Sep 21 2014 13:00:48 GMT-0400 (EDT) the car is 4.31km close to work.
    23 Sep 11:48:15 - At Sun Sep 21 2014 13:00:51 GMT-0400 (EDT) the car is 4.49km away from home.
    23 Sep 11:48:15 - At Sun Sep 21 2014 13:00:51 GMT-0400 (EDT) the car is 4.26km close to work.
    23 Sep 11:48:16 - At Sun Sep 21 2014 13:00:54 GMT-0400 (EDT) the car is 4.54km away from home.
    23 Sep 11:48:16 - At Sun Sep 21 2014 13:00:54 GMT-0400 (EDT) the car is 4.21km close to work.
    23 Sep 11:48:17 - At Sun Sep 21 2014 13:00:57 GMT-0400 (EDT) the car is 4.59km away from home.
    23 Sep 11:48:17 - At Sun Sep 21 2014 13:00:57 GMT-0400 (EDT) the car is 4.17km close to work.
    23 Sep 11:48:18 - At Sun Sep 21 2014 13:01:00 GMT-0400 (EDT) the car is 4.64km away from home.
    23 Sep 11:48:18 - At Sun Sep 21 2014 13:01:00 GMT-0400 (EDT) the car is 4.12km close to work.
    23 Sep 11:48:19 - At Sun Sep 21 2014 13:01:03 GMT-0400 (EDT) the car is 4.69km away from home.
    23 Sep 11:48:19 - At Sun Sep 21 2014 13:01:03 GMT-0400 (EDT) the car is 4.07km close to work.
    23 Sep 11:48:20 - At Sun Sep 21 2014 13:01:06 GMT-0400 (EDT) the car is 4.76km away from home.
    23 Sep 11:48:20 - At Sun Sep 21 2014 13:01:06 GMT-0400 (EDT) the car is 4km close to work.
    23 Sep 11:48:21 - At Sun Sep 21 2014 13:01:09 GMT-0400 (EDT) the car is 4.79km away from home.
    23 Sep 11:48:21 - At Sun Sep 21 2014 13:01:09 GMT-0400 (EDT) the car is 3.97km close to work.
    23 Sep 11:48:22 - At Sun Sep 21 2014 13:01:12 GMT-0400 (EDT) the car is 4.84km away from home.
    23 Sep 11:48:22 - At Sun Sep 21 2014 13:01:12 GMT-0400 (EDT) the car is 3.92km close to work.
    23 Sep 11:48:23 - At Sun Sep 21 2014 13:01:15 GMT-0400 (EDT) the car is 4.9km away from home.
    23 Sep 11:48:23 - At Sun Sep 21 2014 13:01:15 GMT-0400 (EDT) the car is 3.87km close to work.
    23 Sep 11:48:24 - At Sun Sep 21 2014 13:01:18 GMT-0400 (EDT) the car is 4.95km away from home.
    23 Sep 11:48:24 - At Sun Sep 21 2014 13:01:18 GMT-0400 (EDT) the car is 3.82km close to work.
    23 Sep 11:48:25 - At Sun Sep 21 2014 13:01:21 GMT-0400 (EDT) the car is 5km away from home.
    23 Sep 11:48:25 - At Sun Sep 21 2014 13:01:21 GMT-0400 (EDT) the car is 3.77km close to work.
    23 Sep 11:48:26 - At Sun Sep 21 2014 13:01:24 GMT-0400 (EDT) the car is 5.06km away from home.
    23 Sep 11:48:26 - At Sun Sep 21 2014 13:01:24 GMT-0400 (EDT) the car is 3.71km close to work.
    23 Sep 11:48:27 - At Sun Sep 21 2014 13:01:27 GMT-0400 (EDT) the car is 5.11km away from home.
    23 Sep 11:48:27 - At Sun Sep 21 2014 13:01:27 GMT-0400 (EDT) the car is 3.67km close to work.
    23 Sep 11:48:28 - At Sun Sep 21 2014 13:01:30 GMT-0400 (EDT) the car is 5.14km away from home.
    23 Sep 11:48:28 - At Sun Sep 21 2014 13:01:30 GMT-0400 (EDT) the car is 3.64km close to work.
    23 Sep 11:48:29 - At Sun Sep 21 2014 13:01:33 GMT-0400 (EDT) the car is 5.18km away from home.
    23 Sep 11:48:29 - At Sun Sep 21 2014 13:01:33 GMT-0400 (EDT) the car is 3.6km close to work.
    23 Sep 11:48:30 - At Sun Sep 21 2014 13:01:36 GMT-0400 (EDT) the car is 5.21km away from home.
    23 Sep 11:48:30 - At Sun Sep 21 2014 13:01:36 GMT-0400 (EDT) the car is 3.57km close to work.
    23 Sep 11:48:31 - At Sun Sep 21 2014 13:01:39 GMT-0400 (EDT) the car is 5.21km away from home.
    23 Sep 11:48:31 - At Sun Sep 21 2014 13:01:39 GMT-0400 (EDT) the car is 3.57km close to work.
    23 Sep 11:48:32 - At Sun Sep 21 2014 13:01:42 GMT-0400 (EDT) the car is 5.21km away from home.
    23 Sep 11:48:32 - At Sun Sep 21 2014 13:01:42 GMT-0400 (EDT) the car is 3.57km close to work.
    23 Sep 11:48:33 - At Sun Sep 21 2014 13:01:45 GMT-0400 (EDT) the car is 5.21km away from home.
    23 Sep 11:48:33 - At Sun Sep 21 2014 13:01:45 GMT-0400 (EDT) the car is 3.57km close to work.
    23 Sep 11:48:34 - At Sun Sep 21 2014 13:01:48 GMT-0400 (EDT) the car is 5.22km away from home.
    23 Sep 11:48:34 - At Sun Sep 21 2014 13:01:48 GMT-0400 (EDT) the car is 3.56km close to work.
    23 Sep 11:48:35 - At Sun Sep 21 2014 13:01:51 GMT-0400 (EDT) the car is 5.25km away from home.
    23 Sep 11:48:35 - At Sun Sep 21 2014 13:01:51 GMT-0400 (EDT) the car is 3.54km close to work.
    23 Sep 11:48:36 - At Sun Sep 21 2014 13:01:54 GMT-0400 (EDT) the car is 5.28km away from home.
    23 Sep 11:48:36 - At Sun Sep 21 2014 13:01:54 GMT-0400 (EDT) the car is 3.5km close to work.
    23 Sep 11:48:37 - At Sun Sep 21 2014 13:01:57 GMT-0400 (EDT) the car is 5.33km away from home.
    23 Sep 11:48:37 - At Sun Sep 21 2014 13:01:57 GMT-0400 (EDT) the car is 3.46km close to work.
    23 Sep 11:48:38 - At Sun Sep 21 2014 13:02:00 GMT-0400 (EDT) the car is 5.36km away from home.
    23 Sep 11:48:38 - At Sun Sep 21 2014 13:02:00 GMT-0400 (EDT) the car is 3.43km close to work.
    23 Sep 11:48:39 - At Sun Sep 21 2014 13:02:03 GMT-0400 (EDT) the car is 5.4km away from home.
    23 Sep 11:48:39 - At Sun Sep 21 2014 13:02:03 GMT-0400 (EDT) the car is 3.39km close to work.
    23 Sep 11:48:40 - At Sun Sep 21 2014 13:02:06 GMT-0400 (EDT) the car is 5.47km away from home.
    23 Sep 11:48:40 - At Sun Sep 21 2014 13:02:06 GMT-0400 (EDT) the car is 3.33km close to work.
    23 Sep 11:48:41 - At Sun Sep 21 2014 13:02:09 GMT-0400 (EDT) the car is 5.51km away from home.
    23 Sep 11:48:41 - At Sun Sep 21 2014 13:02:09 GMT-0400 (EDT) the car is 3.28km close to work.
    23 Sep 11:48:42 - At Sun Sep 21 2014 13:02:12 GMT-0400 (EDT) the car is 5.55km away from home.
    23 Sep 11:48:42 - At Sun Sep 21 2014 13:02:12 GMT-0400 (EDT) the car is 3.25km close to work.
    23 Sep 11:48:43 - At Sun Sep 21 2014 13:02:15 GMT-0400 (EDT) the car is 5.59km away from home.
    23 Sep 11:48:43 - At Sun Sep 21 2014 13:02:15 GMT-0400 (EDT) the car is 3.21km close to work.
    23 Sep 11:48:44 - At Sun Sep 21 2014 13:02:18 GMT-0400 (EDT) the car is 5.64km away from home.
    23 Sep 11:48:44 - At Sun Sep 21 2014 13:02:18 GMT-0400 (EDT) the car is 3.16km close to work.
    23 Sep 11:48:45 - At Sun Sep 21 2014 13:02:21 GMT-0400 (EDT) the car is 5.68km away from home.
    23 Sep 11:48:45 - At Sun Sep 21 2014 13:02:21 GMT-0400 (EDT) the car is 3.11km close to work.
    23 Sep 11:48:46 - At Sun Sep 21 2014 13:02:24 GMT-0400 (EDT) the car is 5.72km away from home.
    23 Sep 11:48:46 - At Sun Sep 21 2014 13:02:24 GMT-0400 (EDT) the car is 3.07km close to work.
    23 Sep 11:48:47 - At Sun Sep 21 2014 13:02:27 GMT-0400 (EDT) the car is 5.76km away from home.
    23 Sep 11:48:47 - At Sun Sep 21 2014 13:02:27 GMT-0400 (EDT) the car is 3.02km close to work.
    23 Sep 11:48:48 - At Sun Sep 21 2014 13:02:30 GMT-0400 (EDT) the car is 5.79km away from home.
    23 Sep 11:48:48 - At Sun Sep 21 2014 13:02:30 GMT-0400 (EDT) the car is 2.97km close to work.
    23 Sep 11:48:48 - *** TO Nest
    23 Sep 11:48:48 - Connected car now within specified radius of 3km.
    23 Sep 11:48:48 - Setting Nest client {AT/MapR connected car} to target temperature: 23C ...
    DEBUG: TRIGGER HEAT before Nest API call
    23 Sep 11:48:48 - *** FROM Nest
    23 Sep 11:48:48 - Thermostat Downstairs
    23 Sep 11:48:48 -  current ambient temperature is 22C
    23 Sep 11:48:48 -  current target temperature is 23C
    23 Sep 11:48:48 -  HVAC mode is heat
    DEBUG: TRIGGER HEAT done
    23 Sep 11:48:48 - *** FROM Nest
    23 Sep 11:48:48 - Thermostat Downstairs
    23 Sep 11:48:48 -  current ambient temperature is 22C
    23 Sep 11:48:48 -  current target temperature is 23C
    23 Sep 11:48:48 -  HVAC mode is heat
    23 Sep 11:48:48 - *** FROM Nest
    23 Sep 11:48:48 - Thermostat Downstairs
    23 Sep 11:48:48 -  current ambient temperature is 22C
    23 Sep 11:48:48 -  current target temperature is 23C
    23 Sep 11:48:48 -  HVAC mode is heat
    23 Sep 11:48:49 - *** FROM Nest
    23 Sep 11:48:49 - Thermostat Downstairs
    23 Sep 11:48:49 -  current ambient temperature is 22C
    23 Sep 11:48:49 -  current target temperature is 23C
    23 Sep 11:48:49 -  HVAC mode is heat
    23 Sep 11:48:49 - *** FROM Nest
    23 Sep 11:48:49 - Thermostat Downstairs
    23 Sep 11:48:49 -  current ambient temperature is 22C
    23 Sep 11:48:49 -  current target temperature is 23C
    23 Sep 11:48:49 -  HVAC mode is heat
    23 Sep 11:48:50 - *** FROM Nest
    23 Sep 11:48:50 - Thermostat Downstairs
    23 Sep 11:48:50 -  current ambient temperature is 22C
    23 Sep 11:48:50 -  current target temperature is 23C
    23 Sep 11:48:50 -  HVAC mode is heat
    23 Sep 11:48:50 - Selected scenario: last mile
    23 Sep 11:48:50 - At Sun Sep 21 2014 13:02:30 GMT-0400 (EDT) the car is 5.79km away from home.
    23 Sep 11:48:50 - At Sun Sep 21 2014 13:02:30 GMT-0400 (EDT) the car is 2.97km close to work.
    23 Sep 11:48:51 - At Sun Sep 21 2014 13:02:33 GMT-0400 (EDT) the car is 5.82km away from home.
    23 Sep 11:48:51 - At Sun Sep 21 2014 13:02:33 GMT-0400 (EDT) the car is 2.93km close to work.
    23 Sep 11:48:52 - At Sun Sep 21 2014 13:02:36 GMT-0400 (EDT) the car is 5.85km away from home.
    23 Sep 11:48:52 - At Sun Sep 21 2014 13:02:36 GMT-0400 (EDT) the car is 2.88km close to work.
    23 Sep 11:48:53 - At Sun Sep 21 2014 13:02:39 GMT-0400 (EDT) the car is 5.88km away from home.
    23 Sep 11:48:53 - At Sun Sep 21 2014 13:02:39 GMT-0400 (EDT) the car is 2.84km close to work.
    23 Sep 11:48:54 - At Sun Sep 21 2014 13:02:42 GMT-0400 (EDT) the car is 5.92km away from home.
    23 Sep 11:48:54 - At Sun Sep 21 2014 13:02:42 GMT-0400 (EDT) the car is 2.78km close to work.
    23 Sep 11:48:55 - At Sun Sep 21 2014 13:02:45 GMT-0400 (EDT) the car is 5.94km away from home.
    23 Sep 11:48:55 - At Sun Sep 21 2014 13:02:45 GMT-0400 (EDT) the car is 2.76km close to work.
    23 Sep 11:48:56 - At Sun Sep 21 2014 13:02:48 GMT-0400 (EDT) the car is 5.97km away from home.
    23 Sep 11:48:56 - At Sun Sep 21 2014 13:02:48 GMT-0400 (EDT) the car is 2.71km close to work.
    23 Sep 11:48:57 - At Sun Sep 21 2014 13:02:51 GMT-0400 (EDT) the car is 6km away from home.
    23 Sep 11:48:57 - At Sun Sep 21 2014 13:02:51 GMT-0400 (EDT) the car is 2.67km close to work.
    23 Sep 11:48:58 - At Sun Sep 21 2014 13:02:54 GMT-0400 (EDT) the car is 6.04km away from home.
    23 Sep 11:48:58 - At Sun Sep 21 2014 13:02:54 GMT-0400 (EDT) the car is 2.62km close to work.
    23 Sep 11:48:59 - At Sun Sep 21 2014 13:02:57 GMT-0400 (EDT) the car is 6.07km away from home.
    23 Sep 11:48:59 - At Sun Sep 21 2014 13:02:57 GMT-0400 (EDT) the car is 2.58km close to work.
    ^C[ec2-user@ip-10-84-17-3 loc-trigger-demo]$ clear
    [ec2-user@ip-10-84-17-3 loc-trigger-demo]$ ./run-simulation.sh 23 2 3
    Launching simulation for client AT/MapR connected car
    DEBUG: Extracting Nest API auth token from: ./nest-token
    DEBUG: Using existing auth token: c.AycmBHVwPgoMfJ1Jj1BLl83UCwzVB9HoH7lxSqQmdTYlQ0JtjEvUUrG78fbeQrHindiCPHePJ6OQBFENPzRqTMrVWJ1tfl7DZ2OHfIQfdHGqbga5UGSXwPJww6ZUHPPp1PPueyY8BbBlno0v
    DEBUG: Successfully authenticated against Nest.
    23 Sep 11:49:58 - Selected scenario: leaving home
    23 Sep 11:49:58 - *** FROM Nest
    23 Sep 11:49:58 - Thermostat Downstairs
    23 Sep 11:49:58 -  current ambient temperature is 21.5C
    23 Sep 11:49:58 -  current target temperature is 23C
    23 Sep 11:49:58 -  HVAC mode is heat
    DEBUG: Evaluating time series car with 1685 data points ...
    DEBUG: time sequence_number lat lng
    -----------------------------------------------------
    23 Sep 11:50:00 - At Sun Sep 21 2014 12:55:39 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:50:00 - At Sun Sep 21 2014 12:55:39 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:50:01 - At Sun Sep 21 2014 12:55:42 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:50:01 - At Sun Sep 21 2014 12:55:42 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:50:02 - At Sun Sep 21 2014 12:55:45 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:50:02 - At Sun Sep 21 2014 12:55:45 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:50:03 - At Sun Sep 21 2014 12:55:48 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:50:03 - At Sun Sep 21 2014 12:55:48 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:50:04 - At Sun Sep 21 2014 12:55:51 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:50:04 - At Sun Sep 21 2014 12:55:51 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:50:05 - At Sun Sep 21 2014 12:55:54 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:50:05 - At Sun Sep 21 2014 12:55:54 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:50:06 - At Sun Sep 21 2014 12:55:57 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:50:06 - At Sun Sep 21 2014 12:55:57 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:50:07 - At Sun Sep 21 2014 12:56:00 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:50:07 - At Sun Sep 21 2014 12:56:00 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:50:08 - At Sun Sep 21 2014 12:56:03 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:50:08 - At Sun Sep 21 2014 12:56:03 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:50:09 - At Sun Sep 21 2014 12:56:06 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:50:09 - At Sun Sep 21 2014 12:56:06 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:50:10 - At Sun Sep 21 2014 12:56:09 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:50:10 - At Sun Sep 21 2014 12:56:09 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:50:11 - At Sun Sep 21 2014 12:56:12 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:50:11 - At Sun Sep 21 2014 12:56:12 GMT-0400 (EDT) the car is 8.54km close to work.
    23 Sep 11:50:12 - At Sun Sep 21 2014 12:56:15 GMT-0400 (EDT) the car is 0km away from home.
    23 Sep 11:50:12 - At Sun Sep 21 2014 12:56:15 GMT-0400 (EDT) the car is 8.53km close to work.
    23 Sep 11:50:13 - At Sun Sep 21 2014 12:56:18 GMT-0400 (EDT) the car is 0.01km away from home.
    23 Sep 11:50:13 - At Sun Sep 21 2014 12:56:18 GMT-0400 (EDT) the car is 8.53km close to work.
    23 Sep 11:50:14 - At Sun Sep 21 2014 12:56:21 GMT-0400 (EDT) the car is 0.02km away from home.
    23 Sep 11:50:14 - At Sun Sep 21 2014 12:56:21 GMT-0400 (EDT) the car is 8.52km close to work.
    23 Sep 11:50:15 - At Sun Sep 21 2014 12:56:24 GMT-0400 (EDT) the car is 0.04km away from home.
    23 Sep 11:50:15 - At Sun Sep 21 2014 12:56:24 GMT-0400 (EDT) the car is 8.5km close to work.
    23 Sep 11:50:16 - At Sun Sep 21 2014 12:56:27 GMT-0400 (EDT) the car is 0.06km away from home.
    23 Sep 11:50:16 - At Sun Sep 21 2014 12:56:27 GMT-0400 (EDT) the car is 8.48km close to work.
    23 Sep 11:50:17 - At Sun Sep 21 2014 12:56:30 GMT-0400 (EDT) the car is 0.09km away from home.
    23 Sep 11:50:17 - At Sun Sep 21 2014 12:56:30 GMT-0400 (EDT) the car is 8.45km close to work.
    23 Sep 11:50:18 - At Sun Sep 21 2014 12:56:33 GMT-0400 (EDT) the car is 0.12km away from home.
    23 Sep 11:50:18 - At Sun Sep 21 2014 12:56:33 GMT-0400 (EDT) the car is 8.41km close to work.
    23 Sep 11:50:19 - At Sun Sep 21 2014 12:56:36 GMT-0400 (EDT) the car is 0.17km away from home.
    23 Sep 11:50:19 - At Sun Sep 21 2014 12:56:36 GMT-0400 (EDT) the car is 8.36km close to work.
    23 Sep 11:50:20 - At Sun Sep 21 2014 12:56:39 GMT-0400 (EDT) the car is 0.21km away from home.
    23 Sep 11:50:20 - At Sun Sep 21 2014 12:56:39 GMT-0400 (EDT) the car is 8.32km close to work.
    23 Sep 11:50:21 - At Sun Sep 21 2014 12:56:42 GMT-0400 (EDT) the car is 0.25km away from home.
    23 Sep 11:50:21 - At Sun Sep 21 2014 12:56:42 GMT-0400 (EDT) the car is 8.28km close to work.
    23 Sep 11:50:22 - At Sun Sep 21 2014 12:56:45 GMT-0400 (EDT) the car is 0.28km away from home.
    23 Sep 11:50:22 - At Sun Sep 21 2014 12:56:45 GMT-0400 (EDT) the car is 8.26km close to work.
    23 Sep 11:50:23 - At Sun Sep 21 2014 12:56:48 GMT-0400 (EDT) the car is 0.32km away from home.
    23 Sep 11:50:23 - At Sun Sep 21 2014 12:56:48 GMT-0400 (EDT) the car is 8.22km close to work.
    23 Sep 11:50:24 - At Sun Sep 21 2014 12:56:51 GMT-0400 (EDT) the car is 0.36km away from home.
    23 Sep 11:50:24 - At Sun Sep 21 2014 12:56:51 GMT-0400 (EDT) the car is 8.18km close to work.
    23 Sep 11:50:25 - At Sun Sep 21 2014 12:56:54 GMT-0400 (EDT) the car is 0.41km away from home.
    23 Sep 11:50:25 - At Sun Sep 21 2014 12:56:54 GMT-0400 (EDT) the car is 8.14km close to work.
    23 Sep 11:50:26 - At Sun Sep 21 2014 12:56:57 GMT-0400 (EDT) the car is 0.45km away from home.
    23 Sep 11:50:26 - At Sun Sep 21 2014 12:56:57 GMT-0400 (EDT) the car is 8.09km close to work.
    23 Sep 11:50:27 - At Sun Sep 21 2014 12:57:00 GMT-0400 (EDT) the car is 0.49km away from home.
    23 Sep 11:50:27 - At Sun Sep 21 2014 12:57:00 GMT-0400 (EDT) the car is 8.05km close to work.
    23 Sep 11:50:28 - At Sun Sep 21 2014 12:57:03 GMT-0400 (EDT) the car is 0.54km away from home.
    23 Sep 11:50:28 - At Sun Sep 21 2014 12:57:03 GMT-0400 (EDT) the car is 8.01km close to work.
    23 Sep 11:50:29 - At Sun Sep 21 2014 12:57:06 GMT-0400 (EDT) the car is 0.58km away from home.
    23 Sep 11:50:29 - At Sun Sep 21 2014 12:57:06 GMT-0400 (EDT) the car is 7.98km close to work.
    23 Sep 11:50:30 - At Sun Sep 21 2014 12:57:09 GMT-0400 (EDT) the car is 0.61km away from home.
    23 Sep 11:50:30 - At Sun Sep 21 2014 12:57:09 GMT-0400 (EDT) the car is 7.94km close to work.
    23 Sep 11:50:31 - At Sun Sep 21 2014 12:57:12 GMT-0400 (EDT) the car is 0.65km away from home.
    23 Sep 11:50:31 - At Sun Sep 21 2014 12:57:12 GMT-0400 (EDT) the car is 7.91km close to work.
    23 Sep 11:50:32 - At Sun Sep 21 2014 12:57:15 GMT-0400 (EDT) the car is 0.7km away from home.
    23 Sep 11:50:32 - At Sun Sep 21 2014 12:57:15 GMT-0400 (EDT) the car is 7.86km close to work.
    23 Sep 11:50:33 - At Sun Sep 21 2014 12:57:18 GMT-0400 (EDT) the car is 0.72km away from home.
    23 Sep 11:50:33 - At Sun Sep 21 2014 12:57:18 GMT-0400 (EDT) the car is 7.84km close to work.
    23 Sep 11:50:34 - At Sun Sep 21 2014 12:57:21 GMT-0400 (EDT) the car is 0.77km away from home.
    23 Sep 11:50:34 - At Sun Sep 21 2014 12:57:21 GMT-0400 (EDT) the car is 7.8km close to work.
    23 Sep 11:50:35 - At Sun Sep 21 2014 12:57:24 GMT-0400 (EDT) the car is 0.8km away from home.
    23 Sep 11:50:35 - At Sun Sep 21 2014 12:57:24 GMT-0400 (EDT) the car is 7.77km close to work.
    23 Sep 11:50:36 - At Sun Sep 21 2014 12:57:27 GMT-0400 (EDT) the car is 0.84km away from home.
    23 Sep 11:50:36 - At Sun Sep 21 2014 12:57:27 GMT-0400 (EDT) the car is 7.73km close to work.
    23 Sep 11:50:37 - At Sun Sep 21 2014 12:57:30 GMT-0400 (EDT) the car is 0.87km away from home.
    23 Sep 11:50:37 - At Sun Sep 21 2014 12:57:30 GMT-0400 (EDT) the car is 7.7km close to work.
    23 Sep 11:50:38 - At Sun Sep 21 2014 12:57:33 GMT-0400 (EDT) the car is 0.9km away from home.
    23 Sep 11:50:38 - At Sun Sep 21 2014 12:57:33 GMT-0400 (EDT) the car is 7.68km close to work.
    23 Sep 11:50:39 - At Sun Sep 21 2014 12:57:36 GMT-0400 (EDT) the car is 0.95km away from home.
    23 Sep 11:50:39 - At Sun Sep 21 2014 12:57:36 GMT-0400 (EDT) the car is 7.64km close to work.
    23 Sep 11:50:40 - At Sun Sep 21 2014 12:57:39 GMT-0400 (EDT) the car is 0.98km away from home.
    23 Sep 11:50:40 - At Sun Sep 21 2014 12:57:39 GMT-0400 (EDT) the car is 7.61km close to work.
    23 Sep 11:50:41 - At Sun Sep 21 2014 12:57:42 GMT-0400 (EDT) the car is 1.01km away from home.
    23 Sep 11:50:41 - At Sun Sep 21 2014 12:57:42 GMT-0400 (EDT) the car is 7.59km close to work.
    23 Sep 11:50:42 - At Sun Sep 21 2014 12:57:45 GMT-0400 (EDT) the car is 1.05km away from home.
    23 Sep 11:50:42 - At Sun Sep 21 2014 12:57:45 GMT-0400 (EDT) the car is 7.56km close to work.
    23 Sep 11:50:43 - At Sun Sep 21 2014 12:57:48 GMT-0400 (EDT) the car is 1.07km away from home.
    23 Sep 11:50:43 - At Sun Sep 21 2014 12:57:48 GMT-0400 (EDT) the car is 7.53km close to work.
    23 Sep 11:50:44 - At Sun Sep 21 2014 12:57:51 GMT-0400 (EDT) the car is 1.11km away from home.
    23 Sep 11:50:44 - At Sun Sep 21 2014 12:57:51 GMT-0400 (EDT) the car is 7.5km close to work.
    23 Sep 11:50:45 - At Sun Sep 21 2014 12:57:54 GMT-0400 (EDT) the car is 1.15km away from home.
    23 Sep 11:50:45 - At Sun Sep 21 2014 12:57:54 GMT-0400 (EDT) the car is 7.46km close to work.
    23 Sep 11:50:46 - At Sun Sep 21 2014 12:57:57 GMT-0400 (EDT) the car is 1.2km away from home.
    23 Sep 11:50:46 - At Sun Sep 21 2014 12:57:57 GMT-0400 (EDT) the car is 7.42km close to work.
    23 Sep 11:50:47 - At Sun Sep 21 2014 12:58:00 GMT-0400 (EDT) the car is 1.24km away from home.
    23 Sep 11:50:47 - At Sun Sep 21 2014 12:58:00 GMT-0400 (EDT) the car is 7.37km close to work.
    23 Sep 11:50:48 - At Sun Sep 21 2014 12:58:03 GMT-0400 (EDT) the car is 1.29km away from home.
    23 Sep 11:50:48 - At Sun Sep 21 2014 12:58:03 GMT-0400 (EDT) the car is 7.33km close to work.
    23 Sep 11:50:49 - At Sun Sep 21 2014 12:58:06 GMT-0400 (EDT) the car is 1.34km away from home.
    23 Sep 11:50:49 - At Sun Sep 21 2014 12:58:06 GMT-0400 (EDT) the car is 7.28km close to work.
    23 Sep 11:50:50 - At Sun Sep 21 2014 12:58:09 GMT-0400 (EDT) the car is 1.4km away from home.
    23 Sep 11:50:50 - At Sun Sep 21 2014 12:58:09 GMT-0400 (EDT) the car is 7.22km close to work.
    23 Sep 11:50:51 - At Sun Sep 21 2014 12:58:12 GMT-0400 (EDT) the car is 1.46km away from home.
    23 Sep 11:50:51 - At Sun Sep 21 2014 12:58:12 GMT-0400 (EDT) the car is 7.16km close to work.
    23 Sep 11:50:52 - At Sun Sep 21 2014 12:58:15 GMT-0400 (EDT) the car is 1.53km away from home.
    23 Sep 11:50:52 - At Sun Sep 21 2014 12:58:15 GMT-0400 (EDT) the car is 7.1km close to work.
    23 Sep 11:50:53 - At Sun Sep 21 2014 12:58:18 GMT-0400 (EDT) the car is 1.6km away from home.
    23 Sep 11:50:53 - At Sun Sep 21 2014 12:58:18 GMT-0400 (EDT) the car is 7.03km close to work.
    23 Sep 11:50:54 - At Sun Sep 21 2014 12:58:21 GMT-0400 (EDT) the car is 1.67km away from home.
    23 Sep 11:50:54 - At Sun Sep 21 2014 12:58:21 GMT-0400 (EDT) the car is 6.97km close to work.
    23 Sep 11:50:55 - At Sun Sep 21 2014 12:58:24 GMT-0400 (EDT) the car is 1.74km away from home.
    23 Sep 11:50:55 - At Sun Sep 21 2014 12:58:24 GMT-0400 (EDT) the car is 6.9km close to work.
    23 Sep 11:50:56 - At Sun Sep 21 2014 12:58:27 GMT-0400 (EDT) the car is 1.81km away from home.
    23 Sep 11:50:56 - At Sun Sep 21 2014 12:58:27 GMT-0400 (EDT) the car is 6.83km close to work.
    23 Sep 11:50:57 - At Sun Sep 21 2014 12:58:30 GMT-0400 (EDT) the car is 1.89km away from home.
    23 Sep 11:50:57 - At Sun Sep 21 2014 12:58:30 GMT-0400 (EDT) the car is 6.76km close to work.
    23 Sep 11:50:58 - At Sun Sep 21 2014 12:58:33 GMT-0400 (EDT) the car is 1.96km away from home.
    23 Sep 11:50:58 - At Sun Sep 21 2014 12:58:33 GMT-0400 (EDT) the car is 6.69km close to work.
    23 Sep 11:50:59 - At Sun Sep 21 2014 12:58:36 GMT-0400 (EDT) the car is 2.05km away from home.
    23 Sep 11:50:59 - At Sun Sep 21 2014 12:58:36 GMT-0400 (EDT) the car is 6.6km close to work.
    DEBUG: TIMESTAMP=1411318716000
    23 Sep 11:50:59 - *** TO Nest
    23 Sep 11:50:59 - Connected car now outside specified radius of 2km.
    23 Sep 11:50:59 - Setting Nest client {AT/MapR connected car} to target temperature: 19C ...
    DEBUG: TRIGGER COOL before Nest API call
    23 Sep 11:50:59 - *** FROM Nest
    23 Sep 11:50:59 - Thermostat Downstairs
    23 Sep 11:50:59 -  current ambient temperature is 21.5C
    23 Sep 11:50:59 -  current target temperature is 19C
    23 Sep 11:50:59 -  HVAC mode is heat
    DEBUG: TRIGGER COOL done
    23 Sep 11:50:59 - *** FROM Nest
    23 Sep 11:50:59 - Thermostat Downstairs
    23 Sep 11:50:59 -  current ambient temperature is 21.5C
    23 Sep 11:50:59 -  current target temperature is 19C
    23 Sep 11:50:59 -  HVAC mode is heat
    23 Sep 11:50:59 - *** FROM Nest
    23 Sep 11:50:59 - Thermostat Downstairs
    23 Sep 11:50:59 -  current ambient temperature is 21.5C
    23 Sep 11:50:59 -  current target temperature is 19C
    23 Sep 11:50:59 -  HVAC mode is heat
    23 Sep 11:50:59 - *** FROM Nest
    23 Sep 11:50:59 - Thermostat Downstairs
    23 Sep 11:50:59 -  current ambient temperature is 21.5C
    23 Sep 11:50:59 -  current target temperature is 19C
    23 Sep 11:50:59 -  HVAC mode is heat
    23 Sep 11:50:59 - *** FROM Nest
    23 Sep 11:50:59 - Thermostat Downstairs
    23 Sep 11:50:59 -  current ambient temperature is 22C
    23 Sep 11:50:59 -  current target temperature is 19C
    23 Sep 11:50:59 -  HVAC mode is heat
    23 Sep 11:50:59 - *** FROM Nest
    23 Sep 11:50:59 - Thermostat Downstairs
    23 Sep 11:50:59 -  current ambient temperature is 22C
    23 Sep 11:50:59 -  current target temperature is 19C
    23 Sep 11:50:59 -  HVAC mode is heat
    23 Sep 11:50:59 - *** FROM Nest
    23 Sep 11:50:59 - Thermostat Downstairs
    23 Sep 11:50:59 -  current ambient temperature is 22C
    23 Sep 11:50:59 -  current target temperature is 19C
    23 Sep 11:50:59 -  HVAC mode is heat
    23 Sep 11:50:59 - *** FROM Nest
    23 Sep 11:50:59 - Thermostat Downstairs
    23 Sep 11:50:59 -  current ambient temperature is 22C
    23 Sep 11:50:59 -  current target temperature is 19C
    23 Sep 11:50:59 -  HVAC mode is heat
    23 Sep 11:51:00 - *** FROM Nest
    23 Sep 11:51:00 - Thermostat Downstairs
    23 Sep 11:51:00 -  current ambient temperature is 22C
    23 Sep 11:51:00 -  current target temperature is 19C
    23 Sep 11:51:00 -  HVAC mode is heat
    23 Sep 11:51:01 - *** FROM Nest
    23 Sep 11:51:01 - Thermostat Downstairs
    23 Sep 11:51:01 -  current ambient temperature is 22C
    23 Sep 11:51:01 -  current target temperature is 19C
    23 Sep 11:51:01 -  HVAC mode is heat
    23 Sep 11:51:01 - *** FROM Nest
    23 Sep 11:51:01 - Thermostat Downstairs
    23 Sep 11:51:01 -  current ambient temperature is 22C
    23 Sep 11:51:01 -  current target temperature is 19C
    23 Sep 11:51:01 -  HVAC mode is heat
    DEBUG: Extracting Nest API auth token from: ./nest-token
    DEBUG: Using existing auth token: c.AycmBHVwPgoMfJ1Jj1BLl83UCwzVB9HoH7lxSqQmdTYlQ0JtjEvUUrG78fbeQrHindiCPHePJ6OQBFENPzRqTMrVWJ1tfl7DZ2OHfIQfdHGqbga5UGSXwPJww6ZUHPPp1PPueyY8BbBlno0v
    DEBUG: Successfully authenticated against Nest.
    23 Sep 11:51:03 - Selected scenario: approaching work
    23 Sep 11:51:03 - *** FROM Nest
    23 Sep 11:51:03 - Thermostat Downstairs
    23 Sep 11:51:03 -  current ambient temperature is 22C
    23 Sep 11:51:03 -  current target temperature is 19C
    23 Sep 11:51:03 -  HVAC mode is heat
    DEBUG: Evaluating time series car with 1685 data points ...
    DEBUG: time sequence_number lat lng
    -----------------------------------------------------
    23 Sep 11:51:05 - At Sun Sep 21 2014 12:58:36 GMT-0400 (EDT) the car is 2.05km away from home.
    23 Sep 11:51:05 - At Sun Sep 21 2014 12:58:36 GMT-0400 (EDT) the car is 6.6km close to work.
    23 Sep 11:51:06 - At Sun Sep 21 2014 12:58:39 GMT-0400 (EDT) the car is 2.1km away from home.
    23 Sep 11:51:06 - At Sun Sep 21 2014 12:58:39 GMT-0400 (EDT) the car is 6.56km close to work.
    23 Sep 11:51:07 - At Sun Sep 21 2014 12:58:42 GMT-0400 (EDT) the car is 2.18km away from home.
    23 Sep 11:51:07 - At Sun Sep 21 2014 12:58:42 GMT-0400 (EDT) the car is 6.49km close to work.
    23 Sep 11:51:08 - At Sun Sep 21 2014 12:58:45 GMT-0400 (EDT) the car is 2.25km away from home.
    23 Sep 11:51:08 - At Sun Sep 21 2014 12:58:45 GMT-0400 (EDT) the car is 6.42km close to work.
    23 Sep 11:51:09 - At Sun Sep 21 2014 12:58:48 GMT-0400 (EDT) the car is 2.32km away from home.
    23 Sep 11:51:09 - At Sun Sep 21 2014 12:58:48 GMT-0400 (EDT) the car is 6.35km close to work.
    23 Sep 11:51:10 - At Sun Sep 21 2014 12:58:51 GMT-0400 (EDT) the car is 2.39km away from home.
    23 Sep 11:51:10 - At Sun Sep 21 2014 12:58:51 GMT-0400 (EDT) the car is 6.28km close to work.
    23 Sep 11:51:11 - At Sun Sep 21 2014 12:58:54 GMT-0400 (EDT) the car is 2.46km away from home.
    23 Sep 11:51:11 - At Sun Sep 21 2014 12:58:54 GMT-0400 (EDT) the car is 6.22km close to work.
    23 Sep 11:51:12 - At Sun Sep 21 2014 12:58:57 GMT-0400 (EDT) the car is 2.54km away from home.
    23 Sep 11:51:12 - At Sun Sep 21 2014 12:58:57 GMT-0400 (EDT) the car is 6.15km close to work.
    23 Sep 11:51:13 - At Sun Sep 21 2014 12:59:00 GMT-0400 (EDT) the car is 2.61km away from home.
    23 Sep 11:51:13 - At Sun Sep 21 2014 12:59:00 GMT-0400 (EDT) the car is 6.08km close to work.
    23 Sep 11:51:14 - At Sun Sep 21 2014 12:59:03 GMT-0400 (EDT) the car is 2.68km away from home.
    23 Sep 11:51:14 - At Sun Sep 21 2014 12:59:03 GMT-0400 (EDT) the car is 6.01km close to work.
    23 Sep 11:51:15 - At Sun Sep 21 2014 12:59:06 GMT-0400 (EDT) the car is 2.75km away from home.
    23 Sep 11:51:15 - At Sun Sep 21 2014 12:59:06 GMT-0400 (EDT) the car is 5.95km close to work.
    23 Sep 11:51:16 - At Sun Sep 21 2014 12:59:09 GMT-0400 (EDT) the car is 2.83km away from home.
    23 Sep 11:51:16 - At Sun Sep 21 2014 12:59:09 GMT-0400 (EDT) the car is 5.88km close to work.
    23 Sep 11:51:17 - At Sun Sep 21 2014 12:59:12 GMT-0400 (EDT) the car is 2.9km away from home.
    23 Sep 11:51:17 - At Sun Sep 21 2014 12:59:12 GMT-0400 (EDT) the car is 5.81km close to work.
    23 Sep 11:51:18 - At Sun Sep 21 2014 12:59:15 GMT-0400 (EDT) the car is 2.96km away from home.
    23 Sep 11:51:18 - At Sun Sep 21 2014 12:59:15 GMT-0400 (EDT) the car is 5.75km close to work.
    23 Sep 11:51:19 - At Sun Sep 21 2014 12:59:18 GMT-0400 (EDT) the car is 3.02km away from home.
    23 Sep 11:51:19 - At Sun Sep 21 2014 12:59:18 GMT-0400 (EDT) the car is 5.7km close to work.
    23 Sep 11:51:20 - At Sun Sep 21 2014 12:59:21 GMT-0400 (EDT) the car is 3.07km away from home.
    23 Sep 11:51:20 - At Sun Sep 21 2014 12:59:21 GMT-0400 (EDT) the car is 5.65km close to work.
    23 Sep 11:51:21 - At Sun Sep 21 2014 12:59:24 GMT-0400 (EDT) the car is 3.12km away from home.
    23 Sep 11:51:21 - At Sun Sep 21 2014 12:59:24 GMT-0400 (EDT) the car is 5.6km close to work.
    23 Sep 11:51:22 - At Sun Sep 21 2014 12:59:27 GMT-0400 (EDT) the car is 3.17km away from home.
    23 Sep 11:51:22 - At Sun Sep 21 2014 12:59:27 GMT-0400 (EDT) the car is 5.55km close to work.
    23 Sep 11:51:23 - At Sun Sep 21 2014 12:59:30 GMT-0400 (EDT) the car is 3.23km away from home.
    23 Sep 11:51:23 - At Sun Sep 21 2014 12:59:30 GMT-0400 (EDT) the car is 5.49km close to work.
    23 Sep 11:51:24 - At Sun Sep 21 2014 12:59:33 GMT-0400 (EDT) the car is 3.26km away from home.
    23 Sep 11:51:24 - At Sun Sep 21 2014 12:59:33 GMT-0400 (EDT) the car is 5.46km close to work.
    23 Sep 11:51:25 - At Sun Sep 21 2014 12:59:36 GMT-0400 (EDT) the car is 3.3km away from home.
    23 Sep 11:51:25 - At Sun Sep 21 2014 12:59:36 GMT-0400 (EDT) the car is 5.42km close to work.
    23 Sep 11:51:26 - At Sun Sep 21 2014 12:59:39 GMT-0400 (EDT) the car is 3.35km away from home.
    23 Sep 11:51:26 - At Sun Sep 21 2014 12:59:39 GMT-0400 (EDT) the car is 5.38km close to work.
    23 Sep 11:51:27 - At Sun Sep 21 2014 12:59:42 GMT-0400 (EDT) the car is 3.4km away from home.
    23 Sep 11:51:27 - At Sun Sep 21 2014 12:59:42 GMT-0400 (EDT) the car is 5.32km close to work.
    23 Sep 11:51:28 - At Sun Sep 21 2014 12:59:45 GMT-0400 (EDT) the car is 3.43km away from home.
    23 Sep 11:51:28 - At Sun Sep 21 2014 12:59:45 GMT-0400 (EDT) the car is 5.29km close to work.
    23 Sep 11:51:29 - At Sun Sep 21 2014 12:59:48 GMT-0400 (EDT) the car is 3.48km away from home.
    23 Sep 11:51:29 - At Sun Sep 21 2014 12:59:48 GMT-0400 (EDT) the car is 5.24km close to work.
    23 Sep 11:51:30 - At Sun Sep 21 2014 12:59:51 GMT-0400 (EDT) the car is 3.53km away from home.
    23 Sep 11:51:30 - At Sun Sep 21 2014 12:59:51 GMT-0400 (EDT) the car is 5.2km close to work.
    23 Sep 11:51:31 - At Sun Sep 21 2014 12:59:54 GMT-0400 (EDT) the car is 3.59km away from home.
    23 Sep 11:51:31 - At Sun Sep 21 2014 12:59:54 GMT-0400 (EDT) the car is 5.14km close to work.
    23 Sep 11:51:32 - At Sun Sep 21 2014 12:59:57 GMT-0400 (EDT) the car is 3.64km away from home.
    23 Sep 11:51:32 - At Sun Sep 21 2014 12:59:57 GMT-0400 (EDT) the car is 5.09km close to work.
    23 Sep 11:51:33 - At Sun Sep 21 2014 13:00:00 GMT-0400 (EDT) the car is 3.67km away from home.
    23 Sep 11:51:33 - At Sun Sep 21 2014 13:00:00 GMT-0400 (EDT) the car is 5.06km close to work.
    23 Sep 11:51:34 - At Sun Sep 21 2014 13:00:03 GMT-0400 (EDT) the car is 3.71km away from home.
    23 Sep 11:51:34 - At Sun Sep 21 2014 13:00:03 GMT-0400 (EDT) the car is 5.01km close to work.
    23 Sep 11:51:35 - At Sun Sep 21 2014 13:00:06 GMT-0400 (EDT) the car is 3.76km away from home.
    23 Sep 11:51:35 - At Sun Sep 21 2014 13:00:06 GMT-0400 (EDT) the car is 4.97km close to work.
    23 Sep 11:51:36 - At Sun Sep 21 2014 13:00:09 GMT-0400 (EDT) the car is 3.81km away from home.
    23 Sep 11:51:36 - At Sun Sep 21 2014 13:00:09 GMT-0400 (EDT) the car is 4.92km close to work.
    23 Sep 11:51:37 - At Sun Sep 21 2014 13:00:12 GMT-0400 (EDT) the car is 3.86km away from home.
    23 Sep 11:51:37 - At Sun Sep 21 2014 13:00:12 GMT-0400 (EDT) the car is 4.87km close to work.
    23 Sep 11:51:38 - At Sun Sep 21 2014 13:00:15 GMT-0400 (EDT) the car is 3.9km away from home.
    23 Sep 11:51:38 - At Sun Sep 21 2014 13:00:15 GMT-0400 (EDT) the car is 4.83km close to work.
    23 Sep 11:51:39 - At Sun Sep 21 2014 13:00:18 GMT-0400 (EDT) the car is 3.95km away from home.
    23 Sep 11:51:39 - At Sun Sep 21 2014 13:00:18 GMT-0400 (EDT) the car is 4.78km close to work.
    23 Sep 11:51:40 - At Sun Sep 21 2014 13:00:21 GMT-0400 (EDT) the car is 4.01km away from home.
    23 Sep 11:51:40 - At Sun Sep 21 2014 13:00:21 GMT-0400 (EDT) the car is 4.72km close to work.
    23 Sep 11:51:41 - At Sun Sep 21 2014 13:00:24 GMT-0400 (EDT) the car is 4.06km away from home.
    23 Sep 11:51:41 - At Sun Sep 21 2014 13:00:24 GMT-0400 (EDT) the car is 4.68km close to work.
    23 Sep 11:51:42 - At Sun Sep 21 2014 13:00:27 GMT-0400 (EDT) the car is 4.09km away from home.
    23 Sep 11:51:42 - At Sun Sep 21 2014 13:00:27 GMT-0400 (EDT) the car is 4.64km close to work.
    23 Sep 11:51:43 - At Sun Sep 21 2014 13:00:30 GMT-0400 (EDT) the car is 4.14km away from home.
    23 Sep 11:51:43 - At Sun Sep 21 2014 13:00:30 GMT-0400 (EDT) the car is 4.6km close to work.
    23 Sep 11:51:44 - At Sun Sep 21 2014 13:00:33 GMT-0400 (EDT) the car is 4.19km away from home.
    23 Sep 11:51:44 - At Sun Sep 21 2014 13:00:33 GMT-0400 (EDT) the car is 4.55km close to work.
    23 Sep 11:51:45 - At Sun Sep 21 2014 13:00:36 GMT-0400 (EDT) the car is 4.24km away from home.
    23 Sep 11:51:45 - At Sun Sep 21 2014 13:00:36 GMT-0400 (EDT) the car is 4.5km close to work.
    23 Sep 11:51:46 - At Sun Sep 21 2014 13:00:39 GMT-0400 (EDT) the car is 4.3km away from home.
    23 Sep 11:51:46 - At Sun Sep 21 2014 13:00:39 GMT-0400 (EDT) the car is 4.44km close to work.
    23 Sep 11:51:47 - At Sun Sep 21 2014 13:00:42 GMT-0400 (EDT) the car is 4.35km away from home.
    23 Sep 11:51:47 - At Sun Sep 21 2014 13:00:42 GMT-0400 (EDT) the car is 4.39km close to work.
    23 Sep 11:51:48 - At Sun Sep 21 2014 13:00:45 GMT-0400 (EDT) the car is 4.39km away from home.
    23 Sep 11:51:48 - At Sun Sep 21 2014 13:00:45 GMT-0400 (EDT) the car is 4.36km close to work.
    23 Sep 11:51:49 - At Sun Sep 21 2014 13:00:48 GMT-0400 (EDT) the car is 4.44km away from home.
    23 Sep 11:51:49 - At Sun Sep 21 2014 13:00:48 GMT-0400 (EDT) the car is 4.31km close to work.
    23 Sep 11:51:50 - At Sun Sep 21 2014 13:00:51 GMT-0400 (EDT) the car is 4.49km away from home.
    23 Sep 11:51:50 - At Sun Sep 21 2014 13:00:51 GMT-0400 (EDT) the car is 4.26km close to work.
    23 Sep 11:51:51 - At Sun Sep 21 2014 13:00:54 GMT-0400 (EDT) the car is 4.54km away from home.
    23 Sep 11:51:51 - At Sun Sep 21 2014 13:00:54 GMT-0400 (EDT) the car is 4.21km close to work.
    23 Sep 11:51:52 - At Sun Sep 21 2014 13:00:57 GMT-0400 (EDT) the car is 4.59km away from home.
    23 Sep 11:51:52 - At Sun Sep 21 2014 13:00:57 GMT-0400 (EDT) the car is 4.17km close to work.
    23 Sep 11:51:53 - At Sun Sep 21 2014 13:01:00 GMT-0400 (EDT) the car is 4.64km away from home.
    23 Sep 11:51:53 - At Sun Sep 21 2014 13:01:00 GMT-0400 (EDT) the car is 4.12km close to work.
    23 Sep 11:51:54 - At Sun Sep 21 2014 13:01:03 GMT-0400 (EDT) the car is 4.69km away from home.
    23 Sep 11:51:54 - At Sun Sep 21 2014 13:01:03 GMT-0400 (EDT) the car is 4.07km close to work.
    23 Sep 11:51:55 - At Sun Sep 21 2014 13:01:06 GMT-0400 (EDT) the car is 4.76km away from home.
    23 Sep 11:51:55 - At Sun Sep 21 2014 13:01:06 GMT-0400 (EDT) the car is 4km close to work.
    23 Sep 11:51:56 - At Sun Sep 21 2014 13:01:09 GMT-0400 (EDT) the car is 4.79km away from home.
    23 Sep 11:51:56 - At Sun Sep 21 2014 13:01:09 GMT-0400 (EDT) the car is 3.97km close to work.
    23 Sep 11:51:57 - At Sun Sep 21 2014 13:01:12 GMT-0400 (EDT) the car is 4.84km away from home.
    23 Sep 11:51:57 - At Sun Sep 21 2014 13:01:12 GMT-0400 (EDT) the car is 3.92km close to work.
    23 Sep 11:51:58 - At Sun Sep 21 2014 13:01:15 GMT-0400 (EDT) the car is 4.9km away from home.
    23 Sep 11:51:58 - At Sun Sep 21 2014 13:01:15 GMT-0400 (EDT) the car is 3.87km close to work.
    23 Sep 11:51:59 - At Sun Sep 21 2014 13:01:18 GMT-0400 (EDT) the car is 4.95km away from home.
    23 Sep 11:51:59 - At Sun Sep 21 2014 13:01:18 GMT-0400 (EDT) the car is 3.82km close to work.
    23 Sep 11:52:00 - At Sun Sep 21 2014 13:01:21 GMT-0400 (EDT) the car is 5km away from home.
    23 Sep 11:52:00 - At Sun Sep 21 2014 13:01:21 GMT-0400 (EDT) the car is 3.77km close to work.
    23 Sep 11:52:01 - At Sun Sep 21 2014 13:01:24 GMT-0400 (EDT) the car is 5.06km away from home.
    23 Sep 11:52:01 - At Sun Sep 21 2014 13:01:24 GMT-0400 (EDT) the car is 3.71km close to work.
    23 Sep 11:52:02 - At Sun Sep 21 2014 13:01:27 GMT-0400 (EDT) the car is 5.11km away from home.
    23 Sep 11:52:02 - At Sun Sep 21 2014 13:01:27 GMT-0400 (EDT) the car is 3.67km close to work.
    23 Sep 11:52:03 - At Sun Sep 21 2014 13:01:30 GMT-0400 (EDT) the car is 5.14km away from home.
    23 Sep 11:52:03 - At Sun Sep 21 2014 13:01:30 GMT-0400 (EDT) the car is 3.64km close to work.
    23 Sep 11:52:04 - At Sun Sep 21 2014 13:01:33 GMT-0400 (EDT) the car is 5.18km away from home.
    23 Sep 11:52:04 - At Sun Sep 21 2014 13:01:33 GMT-0400 (EDT) the car is 3.6km close to work.
    23 Sep 11:52:05 - At Sun Sep 21 2014 13:01:36 GMT-0400 (EDT) the car is 5.21km away from home.
    23 Sep 11:52:05 - At Sun Sep 21 2014 13:01:36 GMT-0400 (EDT) the car is 3.57km close to work.
    23 Sep 11:52:06 - At Sun Sep 21 2014 13:01:39 GMT-0400 (EDT) the car is 5.21km away from home.
    23 Sep 11:52:06 - At Sun Sep 21 2014 13:01:39 GMT-0400 (EDT) the car is 3.57km close to work.
    23 Sep 11:52:07 - At Sun Sep 21 2014 13:01:42 GMT-0400 (EDT) the car is 5.21km away from home.
    23 Sep 11:52:07 - At Sun Sep 21 2014 13:01:42 GMT-0400 (EDT) the car is 3.57km close to work.
    23 Sep 11:52:08 - At Sun Sep 21 2014 13:01:45 GMT-0400 (EDT) the car is 5.21km away from home.
    23 Sep 11:52:08 - At Sun Sep 21 2014 13:01:45 GMT-0400 (EDT) the car is 3.57km close to work.
    23 Sep 11:52:09 - At Sun Sep 21 2014 13:01:48 GMT-0400 (EDT) the car is 5.22km away from home.
    23 Sep 11:52:09 - At Sun Sep 21 2014 13:01:48 GMT-0400 (EDT) the car is 3.56km close to work.
    23 Sep 11:52:10 - At Sun Sep 21 2014 13:01:51 GMT-0400 (EDT) the car is 5.25km away from home.
    23 Sep 11:52:10 - At Sun Sep 21 2014 13:01:51 GMT-0400 (EDT) the car is 3.54km close to work.
    23 Sep 11:52:11 - At Sun Sep 21 2014 13:01:54 GMT-0400 (EDT) the car is 5.28km away from home.
    23 Sep 11:52:11 - At Sun Sep 21 2014 13:01:54 GMT-0400 (EDT) the car is 3.5km close to work.
    23 Sep 11:52:12 - At Sun Sep 21 2014 13:01:57 GMT-0400 (EDT) the car is 5.33km away from home.
    23 Sep 11:52:12 - At Sun Sep 21 2014 13:01:57 GMT-0400 (EDT) the car is 3.46km close to work.
    23 Sep 11:52:13 - At Sun Sep 21 2014 13:02:00 GMT-0400 (EDT) the car is 5.36km away from home.
    23 Sep 11:52:13 - At Sun Sep 21 2014 13:02:00 GMT-0400 (EDT) the car is 3.43km close to work.
    23 Sep 11:52:14 - At Sun Sep 21 2014 13:02:03 GMT-0400 (EDT) the car is 5.4km away from home.
    23 Sep 11:52:14 - At Sun Sep 21 2014 13:02:03 GMT-0400 (EDT) the car is 3.39km close to work.
    23 Sep 11:52:15 - At Sun Sep 21 2014 13:02:06 GMT-0400 (EDT) the car is 5.47km away from home.
    23 Sep 11:52:15 - At Sun Sep 21 2014 13:02:06 GMT-0400 (EDT) the car is 3.33km close to work.
    23 Sep 11:52:16 - At Sun Sep 21 2014 13:02:09 GMT-0400 (EDT) the car is 5.51km away from home.
    23 Sep 11:52:16 - At Sun Sep 21 2014 13:02:09 GMT-0400 (EDT) the car is 3.28km close to work.
    23 Sep 11:52:17 - At Sun Sep 21 2014 13:02:12 GMT-0400 (EDT) the car is 5.55km away from home.
    23 Sep 11:52:17 - At Sun Sep 21 2014 13:02:12 GMT-0400 (EDT) the car is 3.25km close to work.
    23 Sep 11:52:18 - At Sun Sep 21 2014 13:02:15 GMT-0400 (EDT) the car is 5.59km away from home.
    23 Sep 11:52:18 - At Sun Sep 21 2014 13:02:15 GMT-0400 (EDT) the car is 3.21km close to work.
    23 Sep 11:52:19 - At Sun Sep 21 2014 13:02:18 GMT-0400 (EDT) the car is 5.64km away from home.
    23 Sep 11:52:19 - At Sun Sep 21 2014 13:02:18 GMT-0400 (EDT) the car is 3.16km close to work.
    23 Sep 11:52:20 - At Sun Sep 21 2014 13:02:21 GMT-0400 (EDT) the car is 5.68km away from home.
    23 Sep 11:52:20 - At Sun Sep 21 2014 13:02:21 GMT-0400 (EDT) the car is 3.11km close to work.
    23 Sep 11:52:21 - At Sun Sep 21 2014 13:02:24 GMT-0400 (EDT) the car is 5.72km away from home.
    23 Sep 11:52:21 - At Sun Sep 21 2014 13:02:24 GMT-0400 (EDT) the car is 3.07km close to work.
    23 Sep 11:52:22 - At Sun Sep 21 2014 13:02:27 GMT-0400 (EDT) the car is 5.76km away from home.
    23 Sep 11:52:22 - At Sun Sep 21 2014 13:02:27 GMT-0400 (EDT) the car is 3.02km close to work.
    23 Sep 11:52:23 - At Sun Sep 21 2014 13:02:30 GMT-0400 (EDT) the car is 5.79km away from home.
    23 Sep 11:52:23 - At Sun Sep 21 2014 13:02:30 GMT-0400 (EDT) the car is 2.97km close to work.
    23 Sep 11:52:23 - *** TO Nest
    23 Sep 11:52:23 - Connected car now within specified radius of 3km.
    23 Sep 11:52:23 - Setting Nest client {AT/MapR connected car} to target temperature: 23C ...
    DEBUG: TRIGGER HEAT before Nest API call
    23 Sep 11:52:23 - *** FROM Nest
    23 Sep 11:52:23 - Thermostat Downstairs
    23 Sep 11:52:23 -  current ambient temperature is 22C
    23 Sep 11:52:23 -  current target temperature is 23C
    23 Sep 11:52:23 -  HVAC mode is heat
    DEBUG: TRIGGER HEAT done
    23 Sep 11:52:23 - *** FROM Nest
    23 Sep 11:52:23 - Thermostat Downstairs
    23 Sep 11:52:23 -  current ambient temperature is 22C
    23 Sep 11:52:23 -  current target temperature is 23C
    23 Sep 11:52:23 -  HVAC mode is heat
    23 Sep 11:52:24 - *** FROM Nest
    23 Sep 11:52:24 - Thermostat Downstairs
    23 Sep 11:52:24 -  current ambient temperature is 22C
    23 Sep 11:52:24 -  current target temperature is 23C
    23 Sep 11:52:24 -  HVAC mode is heat
    23 Sep 11:52:24 - *** FROM Nest
    23 Sep 11:52:24 - Thermostat Downstairs
    23 Sep 11:52:24 -  current ambient temperature is 22C
    23 Sep 11:52:24 -  current target temperature is 23C
    23 Sep 11:52:24 -  HVAC mode is heat
    23 Sep 11:52:24 - *** FROM Nest
    23 Sep 11:52:24 - Thermostat Downstairs
    23 Sep 11:52:24 -  current ambient temperature is 22C
    23 Sep 11:52:24 -  current target temperature is 23C
    23 Sep 11:52:24 -  HVAC mode is heat
    23 Sep 11:52:25 - *** FROM Nest
    23 Sep 11:52:25 - Thermostat Downstairs
    23 Sep 11:52:25 -  current ambient temperature is 22C
    23 Sep 11:52:25 -  current target temperature is 23C
    23 Sep 11:52:25 -  HVAC mode is heat
    23 Sep 11:52:25 - Selected scenario: last mile
    23 Sep 11:52:25 - At Sun Sep 21 2014 13:02:30 GMT-0400 (EDT) the car is 5.79km away from home.
    23 Sep 11:52:25 - At Sun Sep 21 2014 13:02:30 GMT-0400 (EDT) the car is 2.97km close to work.
    23 Sep 11:52:26 - At Sun Sep 21 2014 13:02:33 GMT-0400 (EDT) the car is 5.82km away from home.
    23 Sep 11:52:26 - At Sun Sep 21 2014 13:02:33 GMT-0400 (EDT) the car is 2.93km close to work.
    23 Sep 11:52:27 - At Sun Sep 21 2014 13:02:36 GMT-0400 (EDT) the car is 5.85km away from home.
    23 Sep 11:52:27 - At Sun Sep 21 2014 13:02:36 GMT-0400 (EDT) the car is 2.88km close to work.
    23 Sep 11:52:28 - At Sun Sep 21 2014 13:02:39 GMT-0400 (EDT) the car is 5.88km away from home.
    23 Sep 11:52:28 - At Sun Sep 21 2014 13:02:39 GMT-0400 (EDT) the car is 2.84km close to work.
    23 Sep 11:52:29 - At Sun Sep 21 2014 13:02:42 GMT-0400 (EDT) the car is 5.92km away from home.
    23 Sep 11:52:29 - At Sun Sep 21 2014 13:02:42 GMT-0400 (EDT) the car is 2.78km close to work.
    23 Sep 11:52:30 - At Sun Sep 21 2014 13:02:45 GMT-0400 (EDT) the car is 5.94km away from home.
    23 Sep 11:52:30 - At Sun Sep 21 2014 13:02:45 GMT-0400 (EDT) the car is 2.76km close to work.
    23 Sep 11:52:31 - At Sun Sep 21 2014 13:02:48 GMT-0400 (EDT) the car is 5.97km away from home.
    23 Sep 11:52:31 - At Sun Sep 21 2014 13:02:48 GMT-0400 (EDT) the car is 2.71km close to work.
    23 Sep 11:52:32 - At Sun Sep 21 2014 13:02:51 GMT-0400 (EDT) the car is 6km away from home.
    23 Sep 11:52:32 - At Sun Sep 21 2014 13:02:51 GMT-0400 (EDT) the car is 2.67km close to work.
    23 Sep 11:52:33 - At Sun Sep 21 2014 13:02:54 GMT-0400 (EDT) the car is 6.04km away from home.
    23 Sep 11:52:33 - At Sun Sep 21 2014 13:02:54 GMT-0400 (EDT) the car is 2.62km close to work.
    23 Sep 11:52:34 - At Sun Sep 21 2014 13:02:57 GMT-0400 (EDT) the car is 6.07km away from home.
    23 Sep 11:52:34 - At Sun Sep 21 2014 13:02:57 GMT-0400 (EDT) the car is 2.58km close to work.
    23 Sep 11:52:35 - At Sun Sep 21 2014 13:03:00 GMT-0400 (EDT) the car is 6.1km away from home.
    23 Sep 11:52:35 - At Sun Sep 21 2014 13:03:00 GMT-0400 (EDT) the car is 2.55km close to work.
    23 Sep 11:52:36 - At Sun Sep 21 2014 13:03:03 GMT-0400 (EDT) the car is 6.12km away from home.
    23 Sep 11:52:36 - At Sun Sep 21 2014 13:03:03 GMT-0400 (EDT) the car is 2.52km close to work.
    23 Sep 11:52:37 - At Sun Sep 21 2014 13:03:06 GMT-0400 (EDT) the car is 6.16km away from home.
    23 Sep 11:52:37 - At Sun Sep 21 2014 13:03:06 GMT-0400 (EDT) the car is 2.49km close to work.
    23 Sep 11:52:38 - At Sun Sep 21 2014 13:03:09 GMT-0400 (EDT) the car is 6.21km away from home.
    23 Sep 11:52:38 - At Sun Sep 21 2014 13:03:09 GMT-0400 (EDT) the car is 2.43km close to work.
    23 Sep 11:52:39 - At Sun Sep 21 2014 13:03:12 GMT-0400 (EDT) the car is 6.23km away from home.
    23 Sep 11:52:39 - At Sun Sep 21 2014 13:03:12 GMT-0400 (EDT) the car is 2.4km close to work.
    23 Sep 11:52:40 - At Sun Sep 21 2014 13:03:15 GMT-0400 (EDT) the car is 6.24km away from home.
    23 Sep 11:52:40 - At Sun Sep 21 2014 13:03:15 GMT-0400 (EDT) the car is 2.39km close to work.
    23 Sep 11:52:41 - At Sun Sep 21 2014 13:03:18 GMT-0400 (EDT) the car is 6.24km away from home.
    23 Sep 11:52:41 - At Sun Sep 21 2014 13:03:18 GMT-0400 (EDT) the car is 2.39km close to work.
    23 Sep 11:52:42 - At Sun Sep 21 2014 13:03:21 GMT-0400 (EDT) the car is 6.24km away from home.
    23 Sep 11:52:42 - At Sun Sep 21 2014 13:03:21 GMT-0400 (EDT) the car is 2.39km close to work.
    23 Sep 11:52:43 - At Sun Sep 21 2014 13:03:24 GMT-0400 (EDT) the car is 6.24km away from home.
    23 Sep 11:52:43 - At Sun Sep 21 2014 13:03:24 GMT-0400 (EDT) the car is 2.39km close to work.
    23 Sep 11:52:44 - At Sun Sep 21 2014 13:03:27 GMT-0400 (EDT) the car is 6.24km away from home.
    23 Sep 11:52:44 - At Sun Sep 21 2014 13:03:27 GMT-0400 (EDT) the car is 2.39km close to work.
    23 Sep 11:52:45 - At Sun Sep 21 2014 13:03:30 GMT-0400 (EDT) the car is 6.24km away from home.
    23 Sep 11:52:45 - At Sun Sep 21 2014 13:03:30 GMT-0400 (EDT) the car is 2.39km close to work.
    23 Sep 11:52:46 - At Sun Sep 21 2014 13:03:33 GMT-0400 (EDT) the car is 6.24km away from home.
    23 Sep 11:52:46 - At Sun Sep 21 2014 13:03:33 GMT-0400 (EDT) the car is 2.39km close to work.