// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the second tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [40.7, -94.5],
	zoom: 3,
	layers: [streets]
});

// Create a base layer that holds all three maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets,
  "Dark": dark
};

// 1. Add a 2nd layer group for the tectonic plate data.
let adultFirstSightings = new L.LayerGroup();
let adultSightings= new L.LayerGroup();
let eggsFirstSightings = new L.LayerGroup();

// 2. Add a reference to the tectonic plates group to the overlays object.
let overlays = {
  "Adult First Sightings": adultFirstSightings,
  "Adult Sightings": adultSightings,
  "Egg First Sightings": eggsFirstSightings
};

// Then we add a control to the map that will allow the user to change which
// layers are visible.
L.control.layers(baseMaps, overlays).addTo(map);

// Retrieve the earthquake GeoJSON data.
adultSightingsdata = "MWatch_Recoveries_2017.json"
d3.json(adultSightingsdata).then(function(data) {

  // This function returns the style data for each of the earthquakes we plot on
  // the map. We pass the magnitude of the earthquake into two separate functions
  // to calculate the color and radius.
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColor(feature.properties.number),
      color: "#000000",
      radius: getRadius(feature.properties.number),
      stroke: true,
      weight: 0.5
    };
  }

  // This function determines the color of the marker based on the magnitude of the earthquake.
  function getColor(number) {
    if (number > 5000) {
      return "#ea2c2c";
    }
    if (number > 4000) {
      return "#ea822c";
    }
    if (number > 3000) {
      return "#ee9c00";
    }
    if (number > 2000) {
      return "#eecc00";
    }
    if (number > 1000) {
      return "#d4ee00";
    }
    return "#98ee00";
  }

  // This function determines the radius of the earthquake marker based on its magnitude.
  // Earthquakes with a magnitude of 0 were being plotted with the wrong radius.
  function getRadius(number) {
    if (number === 0) {
      return 1;
    }
    return number ;
  }

  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    	// We turn each feature into a circleMarker on the map.
    	pointToLayer: function(feature, latlng) {
      		// console.log(data);
      		return L.circleMarker(latlng);
        },
      // We set the style for each circleMarker using our styleInfo function.
    style: styleInfo,
     // We create a popup for each circleMarker to display the magnitude and location of the earthquake
     //  after the marker has been created and styled.
     onEachFeature: function(feature, layer) {
      layer.bindPopup("Number: " + feature.properties.number + "<br>Location: " + feature.properties.school);
    }
  }).addTo(adultFirstSightings);

  // Then we add the earthquake layer to our map.
  adultFirstSightings.addTo(map);

  // 3. Retrieve the major earthquake GeoJSON data >4.5 mag for the week.
  eggFirstSightingdata = "JNorth_Adult_Site_2020_1.json"
  d3.json(eggFirstSightingdata).then(function(data) {

  // 4. Use the same style as the earthquake data.
  function styleInfo(feature) { 
    return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: getColor(feature.properties.number),
    color: "#000000",
    radius: getRadius(feature.properties.number),
    stroke: true,
    weight: 0.5
  };
}
  // 5. Change the color function to use three colors for the major earthquakes based on the magnitude of the earthquake.
  function getColor(number) {
    if (number > 5000) {
      return "red" ; //"#ea2c2c"
    }
    if (number > 4000) {
      return "orange"; //"#ea822c"
    }
    return "#98ee00";
  }
  
  // 6. Use the function that determines the radius of the earthquake marker based on its magnitude.
  function getRadius(number) {
    if (number === 0) {
      return 1;
    }
    return number * 1;
  }
  
  // 7. Creating a GeoJSON layer with the retrieved data that adds a circle to the map 
  // sets the style of the circle, and displays the magnitude and location of the earthquake
  //  after the marker has been created and styled.
  L.geoJson(data, {
    pointToLayer: function(feature, latlng) {
      console.log(data);
      return L.circleMarker(latlng);
    },
    style: styleInfo,
    onEachFeature: function(feature, layer) {
      layer.bindPopup("Number: " + feature.properties.number + "<br>Location: " + feature.properties.place);
    }
  }).addTo(eggsFirstSightings);
  // 8. Add the major earthquakes layer to the map.
  eggsFirstSightings.addTo(map);
  // 9. Close the braces and parentheses for the major earthquake data.
  });

  // Here we create a legend control object.
let legend = L.control({
  position: "bottomright"
});

// Then add all the details for the legend
legend.onAdd = function() {
  let div = L.DomUtil.create("div", "info legend");

  const numbers = [0, 1, 2, 3, 4, 5];
  const colors = [
    "#98ee00",
    "#d4ee00",
    "#eecc00",
    "#ee9c00",
    "#ea822c",
    "#ea2c2c"
  ];

// Looping through our intervals to generate a label with a colored square for each interval.
  for (var i = 0; i < numbers.length; i++) {
    // console.log(colors[i]);
    div.innerHTML +=
      "<i style='background: " + colors[i] + "'></i> " +
      numbers[i] + (numbers[i + 1] ? "&ndash;" + numbers[i + 1] + "<br>" : "+");
    }
    return div;
  };

  // Finally, we our legend to the map.
  legend.addTo(map);


   // 3. Use d3.json to make a call to get our Tectonic Plate geoJSON data.
  adultSightingsdata = "MWatch_Recoveries_2018.json"
  d3.json(adultSightingsdata).then(function(data) {
    // console.log(data);
    L.geoJson(data, {
      style: {color: "brown", weight: 2},
      }).addTo(adultSightings);
  });

  // add techtonic layer group to map
  adultSightings.addTo(map);
});