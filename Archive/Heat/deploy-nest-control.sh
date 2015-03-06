#!/bin/bash

BASE_DIR='nest-control/'

for deploytarget in $( ls $BASE_DIR | egrep '\.py$|\.js$|\.sh$|nest-token' ); do
  echo "deploying $deploytarget"
  scp $BASE_DIR$deploytarget ec2-user@ec2-54-228-99-11.eu-west-1.compute.amazonaws.com:/home/ec2-user/loc-trigger-demo/
done