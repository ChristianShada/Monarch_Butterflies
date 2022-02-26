// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40, -40], 4);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


// Accessing the JSON File
//const MonarchURL = 'static/journey_north/JNorth_Adult_Site_2016_11.geojson';
// Grabbing our GeoJSON data.
//d3.json(MonarchURL).then(function(data) {
// console.log(data);
// Creating a GeoJSON layer with the retrieved data.
//L.geoJSON(data).addTo(map);
//});


// Create the map object with a center and zoom level.
let map2 = L.map('mapid2').setView([40, -40], 4);

// We create the tile layer that will be the background of our map.
let streets2 = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets2.addTo(map2);
