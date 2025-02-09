// Let’s create a map of the center of Puerto Principe with pretty OpenStreetMap tiles.

function makeMap() {
// Initialize the map and set its view to our chosen geographical coordinates and a zoom level
let map = L.map('map').setView([18.5333, -72.3333], 13);

// Add a tile layer to add to our map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Lets add some markers
let marker1 = L.marker([18.5, -72.3333]).addTo(map);

let marker2 = L.marker([18.5, -72.3]).addTo(map);

let marker3 = L.marker([18.56, -72.3]).addTo(map);

let circle = L.circle([18.5333, -72.3333], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 800
}).addTo(map);

let polygon = L.polygon([
    [18.51, -72.3333],
    [18.5, -72.34],
    [18.56, -72.3333]
]).addTo(map);

}

// Call the function after the page has loaded
document.addEventListener("DOMContentLoaded", makeMap);

