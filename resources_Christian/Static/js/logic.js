// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4.5);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'streets' title layer to the map.
streets.addTo(map);

// Accessing the JSON File
// const MonarchURL = 'static/journey_north/JNorth_Adult_Site_2016_11.geojson';

function MonarchURL(year, month)
{
    return `static/journey_north/JNorth_Adult_Site_${year}_${month}.geojson`;
}
// Grabbing our GeoJSON data. Add year and month to produce plots.
d3.json(MonarchURL(yearh, month)).then(function(data) {

 
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data).addTo(map);
});

