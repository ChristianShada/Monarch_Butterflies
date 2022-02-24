
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4.5);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
accessToken: API_KEY
});


// // Then we add our 'streets' title layer to the map.
// streets.addTo(map);

// // Pass our map layers into our layers control and add the layers control to the map.
// L.control.layers(baseMaps).addTo(map);

//------BENJI CODE START
// Accessing the JSON File
function MonarchURL(year, month)
{
    return `static/journey_north/JNorth_Adult_Site_${year}_${month}.geojson`;
}

function updateMap(y)
{
    const promises = [];

    for(let m = 1; m <= 12; m++)
        promises.push(d3.json(MonarchURL(y, m)));

    Promise.all(promises).then(function(datas){
        for(let i =0 ; i < datas.length; i++)
            L.geoJSON(datas[i]).addTo(map);
    });
}

d3.json(MonarchURL(2018, 9)).then(data => L.geoJSON(data).addTo(map));


//----BENJI CODE END
