console.log('hello from inside index.js');

const mapboxgl = require("mapbox-gl");
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
const buildMarker = require("./marker");


mapboxgl.accessToken = 'pk.eyJ1IjoiY2FyYWplYW4iLCJhIjoiY2pvZ2Yxdmk2MGVmZzNxcWh5ajczMWdsbCJ9.DFxMKtFe3sMlATWCzDjKpA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("hotels", [-87.6354, 41.8885]); // or [-87.6354, 41.8885]
marker.addTo(map);

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([35.2828, 120.7401]).addTo(map);
