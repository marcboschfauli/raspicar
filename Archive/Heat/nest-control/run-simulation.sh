#!/bin/bash

echo "Launching simulation for client AT/MapR connected car"

targetTemp=$1
fromHome=$2
toWork=$3

node smart-car.js $targetTemp $fromHome $toWork DOWN FROMHOME
node smart-car.js $targetTemp $fromHome $toWork DOWN TOWORK
node smart-car.js $targetTemp $fromHome $toWork DOWN LASTMILE