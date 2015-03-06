var baseURL =  'http://' + window.location.hostname + ':6969' + '/' ;
var nestData = 'nest-data.json';
var carData = 'car-data.json';
var map;

// geo-location of HOME (48.239726667,11.64344 = 1st data point of 21 Sep run):
var HOME_LOCATION_LAT = 48.239726667; // 6 decimals -> 0.1m resolution
var HOME_LOCATION_LNG = 11.64344; // 6 decimals -> 0.1m resolution
var HOME_LOCATION = new google.maps.LatLng(HOME_LOCATION_LAT, HOME_LOCATION_LNG);

// geo-location of WORK (VW labs, Ungererstraße 69, 80805 Munich, Germany):
var WORK_LOCATION_LAT = 48.173807; // 6 decimals -> 0.1m resolution
var WORK_LOCATION_LNG = 11.595274; // 6 decimals -> 0.1m resolution
var WORK_LOCATION = new google.maps.LatLng(WORK_LOCATION_LAT, WORK_LOCATION_LNG);

var triggerRadiusHome, triggerRadiusWork;
var triggerCircleHome = null;
var triggerCircleWork = null;
var doTrack = false;
var proximityRadius = 0.17;
var pollInterval = 1200; // check every second for new location data
var carMarker = null;
var homeMarker;
var workMarker;


$(function(){
  initMap();
  updateNestData();

  $('#start').click(function(){
    if(doTrack){
      doTrack = false;
      $('#start').html('Start');
    }
    else{
      doTrack = true;
      $('#start').html('Stop');
      trackCarLocation();
    }
  });
});

function salt() {
  var len = 6;
  var ch = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';
  for (var i = len; i > 0; --i) result += ch[Math.round(Math.random() * (ch.length - 1))];
  return '?' + result;
}

function updateNestData(){
  $.ajax({
    type: 'GET',
    url: baseURL + nestData + salt(),
    dataType : 'json',
    success: function(d){
      if(d) {
        $('#nest').html(
          '<h3>Nest</h3>' +
          '<div>Ambient temperature: <strong>' + d.ambient + 'C</strong></div>' +
          '<div>Target temperature: <strong>' + d.target + 'C</strong></div>' +
          '<div>Trigger radius home: <strong>' + d.triggerRadiusHome + 'km</strong></div>' +
          '<div>Trigger radius work: <strong>' + d.triggerRadiusWork + 'km</strong></div>'
        );
        triggerRadiusHome = d.triggerRadiusHome;
        triggerRadiusWork = d.triggerRadiusWork;
        
        console.debug('Set ambient=' + d.ambient + ' and target=' + d.target);
        
        if(triggerCircleHome == null){
          var homeTriggerCircleOptions = {
            strokeColor: '#FF0000',
            strokeOpacity: 0.5,
            strokeWeight: 1,
            fillColor: '#FF0000',
            fillOpacity: 0.25,
            map: map,
            center: HOME_LOCATION,
            radius: triggerRadiusHome * 1000
          };
          triggerCircleHome = new google.maps.Circle(homeTriggerCircleOptions);
          console.debug('Set trigger radius of HOME to' + triggerRadiusHome + 'km');
        }
        if(triggerCircleWork == null){
          var workTriggerCircleOptions = {
            strokeColor: '#FF0000',
            strokeOpacity: 0.5,
            strokeWeight: 1,
            fillColor: '#FF0000',
            fillOpacity: 0.25,
            map: map,
            center: WORK_LOCATION,
            radius: triggerRadiusWork * 1000
          };
          triggerCircleWork = new google.maps.Circle(workTriggerCircleOptions);
          console.debug('Set trigger radius of WORK to' + triggerRadiusWork + 'km');
        }
      }
    },
    error:  function(msg){
      $("#nest").html("<h3>Nest</h3><div>Can't get Nest data, please make sure client is running.</div>");
    } 
  });
}

function trackCarLocation(){
  if(carMarker != null){ // clear current car marker
    carMarker.setMap(null);
  }
  $.get(baseURL + carData + salt(), function(d) {
    carMarker = new google.maps.Marker({
          position: new google.maps.LatLng(d.lat, d.lng),
          map: map,
          icon: 'img/car-icon.png'
    });
    
    console.debug('Set car marker on lat=' + d.lat + '|lng=' + d.lng);
    
    if(d.distFromHome < triggerRadiusHome){ // inside HOME radius
      console.debug('Car is inside of HOME radius: ' + triggerRadiusHome +'km');
      $('#loc').html('<h3>Car</h3><div>Distance from home: ' + d.distFromHome.toFixed(3) +'km</div>');
    }
    else{ // outside HOME radius
      if(d.distToWork > triggerRadiusWork){ // outside WORK radius
        console.debug('Car is outside of HOME radius: ' + triggerRadiusHome +'km');
        $('#loc').html('<h3>Car</h3><div>Distance to work: ' + d.distToWork.toFixed(3) +'km</div>');
        $('#loc').append('<div>(outside of selected radius of ' + triggerRadiusHome +'km)</div>');
        $('#loc').append('<div><strong>Heating OFF</strong></div>');
      }
      else { // inside WORK radius
        console.debug('Car is within WORK radius: ' + triggerRadiusWork +'km');
        $('#loc').html('<h3>Car</h3><div>Distance to work: ' + d.distToWork.toFixed(3) +'km</div>');
        $('#loc').append('<div>(within selected radius of ' + triggerRadiusWork +'km)</div>');
        $('#loc').append('<div><strong>Heating ON</strong></div>');        
      }
    }
    
    if (d.distToWork < proximityRadius){
      doTrack = false;
      $('#start').html('Start');
    }
    updateNestData();
    if(!doTrack) {
      return;
    }
    setTimeout(trackCarLocation, pollInterval);
  });
}

function initMap() {
  var mapOptions = {
    zoom: 15,
    center: HOME_LOCATION
  };
  var homeIconImage = {
    url: 'img/home-icon.png',
    anchor: new google.maps.Point(30, 30)
  };
  var workIconImage = {
    url: 'img/work-icon.png',
    anchor: new google.maps.Point(30, 30)
  };
  
  
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  console.debug('Centering GoogleMap done.');
  
  homeMarker = new google.maps.Marker({
    position: HOME_LOCATION,
    map: map,
    icon: homeIconImage
  });
  console.debug('Set HOME marker on lat=' + HOME_LOCATION_LAT + '|lng=' + HOME_LOCATION_LNG);  
    
  workMarker = new google.maps.Marker({
    position: WORK_LOCATION,
    map: map,
    icon: workIconImage
  });
  console.debug('Set WORK marker on lat=' + WORK_LOCATION_LAT + '|lng=' + WORK_LOCATION_LNG);  
}