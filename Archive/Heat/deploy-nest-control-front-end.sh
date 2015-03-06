#!/bin/bash

deploytarget='nest-control/front-end/'

echo "deploying $deploytarget"
scp -r $deploytarget ec2-user@ec2-54-228-99-11.eu-west-1.compute.amazonaws.com:/home/ec2-user/loc-trigger-demo/
