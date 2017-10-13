
var myMap = L.map('mymap')
  // .setView([35.86, -86.66], 7);  // Full State
  // .setView([36.16, -86.78], 12); // Nashville
  .setView([35.6568, -85.3480], 13); // Fall Creek Falls State Park

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  // id: 'mapbox.streets',
  // id: 'mapbox.outdoors',
  id: 'mapbox.run-bike-hike',
  accessToken: api_token
}).addTo(myMap);

