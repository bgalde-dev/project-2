d3.csv("data/wage_by_location.csv", function(errorA, dataA) {
    d3.json("2019_PUMA.json", function(errorB, dataB) {
      // Use data to do stuff

    });

    console.log(dataA)


  });








// //  Read in average_salary.csv
// d3.csv("data/wage_by_location.csv").then(function (data) {
//     console.log(data);
//     buildCharts(data)
// });

// // Build Chart
// function buildCharts(data) {

//     // Create objects with Industry Group and Average Wage
//     var results = d3.nest()
//         .key(d => d["PUMA"])
//         .rollup(v => d3.mean(v, a => a.AverageWage))
//         .entries(data)

//     results.sort((a, b) => (a.value > b.value) ? 1 : -1);

//     console.log(results);

//     // x
//     var names1 = results.map(r => r.key).slice(0, 10);
//     var names2 = results.map(r => r.key).slice(2368, 2378);
   
//     // y
//     var averageWage1 = results.map(r => r.value).slice(0, 10);
//     var averageWage2 = results.map(r => r.value).slice(2368, 2378);

//     // console.log(names);

//     // console.log(averageWage);

//     // Bar chart 1
//     var barData1 = [{
//         x: names1,
//         y: averageWage1,
//         text: names1,
//         type: "bar",
//         orientation: "v"
//     }]

//     var layout = {
//         title: 'Average Salary by Industry',
//     };

//     //Plot
//     Plotly.newPlot("bar1", barData1, layout, { displayModeBar: true });


//     // Bar chart 2
//     var barData2 = [{
//         x: names2,
//         y: averageWage2,
//         text: names2,
//         type: "bar",
//         orientation: "v"
//     }]

//     var layout = {
//         title: 'Average Salary by Industry',
//     };

//     //Plot
//     Plotly.newPlot("bar2", barData2, layout, { displayModeBar: true });

// }





// // // API queryUrl
// // var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// // d3.json(queryUrl, function(data) {
// //   // createFeatures function
// //   createFeatures(data.features);
// // });

// // function createFeatures(earthquakeData) {

// //     // Define a function we want to run once for each feature in the features array
// //     // Give each feature a popup describing the place and time of the earthquake
// //     function onEachFeature(feature, layer) {
// //       layer.bindPopup("<h3>" + feature.properties.place + " " + feature.properties.mag +
// //         "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
// //     }

// //     // Create a GeoJSON layer containing the features array on the earthquakeData object
// //     // Run the onEachFeature function once for each piece of data in the array

// //     function mag_color(mag){
// //       if (mag >4)
// //           return "red"
// //       else if (mag >3.5)
// //           return "orange"
// //       else if (mag >3.0)
// //           return "yellow"
// //       else if (mag >2.5)
// //           return "blue"
// //       else if (mag >2.0)
// //           return "green"
// //       else if (mag >1.5)
// //           return "lightgreen"
// //       else if (mag >1.0)
// //           return "gray"
// //       else if (mag >0.5)
// //           return "black"
// //       else
// //           return "white"


// //     }

// //     var earthquakes = L.geoJSON(earthquakeData, {
// //         onEachFeature: onEachFeature, 
// //         pointToLayer : function(feature, latlng) {
// //             return L.circleMarker (latlng)

// //         },
// //         style: function(feature, latlng) {
// //             return {radius: feature.properties.mag *5, fillOpacity: 0.75, fillColor: mag_color(feature.properties.mag)}
// //         },

// //       });

// //       // Sending our earthquakes layer to the createMap function
// //       createMap(earthquakes);
// //     }

// //     function createMap(earthquakes) {

// //       // Define streetmap and darkmap layers
// //       var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
// //         attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
// //         tileSize: 512,
// //         maxZoom: 18,
// //         zoomOffset: -1,
// //         id: "mapbox/streets-v11",
// //         accessToken: API_KEY
// //       });

// //       var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
// //         attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
// //         maxZoom: 18,
// //         id: "dark-v10",
// //         accessToken: API_KEY
// //       });

// //       // Define a baseMaps object to hold our base layers
// //       var baseMaps = {
// //         "Street Map": streetmap,
// //         "Dark Map": darkmap
// //       };

// //       // Create overlay object to hold our overlay layer
// //       var overlayMaps = {
// //         Earthquakes: earthquakes
// //       };

// //       // Create our map, giving it the streetmap and earthquakes layers to display on load
// //       var myMap = L.map("map", {
// //         center: [
// //           37.09, -95.71
// //         ],
// //         zoom: 5,
// //         layers: [streetmap, earthquakes]
// //       });

// //       // Create a layer control
// //       // Pass in our baseMaps and overlayMaps
// //       // Add the layer control to the map
// //       L.control.layers(baseMaps, overlayMaps, {
// //         collapsed: false
// //       }).addTo(myMap);

// //       var legend = L.control({position: 'bottomright'});

// //       legend.onAdd = function (map) {

// //           var div = L.DomUtil.create('div', 'info legend'),
// //               grades = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
// //               colors = ["white", "black", "gray", "lightgreen", "green", "blue", "yellow", "orange", "red"]
// //               labels = [];


// //           // loop through our density intervals and generate a label with a colored square for each interval
// //           for (var i = 0; i < grades.length; i++) {
// //               div.innerHTML +=
// //                   '<i style="background:' + colors[i] + '"></i> ' +
// //                   grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
// //           }

// //           return div;
// //       };

// //       legend.addTo(myMap);



// //   };