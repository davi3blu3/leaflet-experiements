
var myMap = L.map('mymap')
  // .setView([35.86, -86.66], 6);  // Full State of TN
  .setView([35.51251, -86.2198], 6);  // geographical center of TN?

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.outdoors',
  // id: 'mapbox.run-bike-hike',
  accessToken: api_token
}).addTo(myMap);

stateParks.forEach(function(park){
  park.marker = L.marker(park.location.coord).addTo(myMap);
  park.marker.bindPopup(popup(park))
});
