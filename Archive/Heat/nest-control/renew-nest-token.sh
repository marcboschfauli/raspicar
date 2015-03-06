#!/bin/bash

echo "Trying to get new auth token for client AT/MapR connected car"
curl --data 'code=VASPUJ4X&client_id=baa1a9e6-b0e0-484b-b250-66935fd39065&client_secret=s0gAqbmbJDy7NYOAXynWsnGGF&grant_type=authorization_code' https://api.home.nest.com/oauth2/access_token