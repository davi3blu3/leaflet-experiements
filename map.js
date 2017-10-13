
var myMap = L.map('mymap')
  .setView([35.86, -86.66], 7);  // Full State

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.outdoors',
  // id: 'mapbox.run-bike-hike',
  accessToken: api_token
}).addTo(myMap);

var stateParks = [
  {
    "id": 1,
    "name": "Cedars of Lebanon",
    "loc": [36.0859, -86.3242],
    "address": "328 Cedar Forest Rd<br>Lebanon, TN 37090"
  },
  {
    "id": 2,
    "name": "Fall Creek Falls",
    "loc": [35.6568, -85.348],
    "address": "2009 Village Camp Road<br>Spencer, TN 38585"
  },
  {
    "id": 3,
    "name": "Paris Landing",
    "loc": [36.434, -88.0861],
    "address": "16055 Hwy 79 N<br>Buchanan, TN 38222"
  },
  {
    "id": 4,
    "name": "Reelfoot Lake",
    "loc": [36.3627, -89.4318],
    "address": "2595 Hwy 21 E<br>Tiptonville, TN 38079"
  },
  {
    "id": 5,
    "name": "Rocky Fork",
    "loc": [36.0526, -82.5749],
    "address": "501 Rocky Fork Road<br>Flag Pond, TN 37657"
  }
];

stateParks.forEach(function(park){
  park.marker = L.marker(park.loc).addTo(myMap);
  park.marker.bindPopup(`<b>${park.name}</b><br>${park.address}`)
});
