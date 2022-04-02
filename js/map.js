mapboxgl.accessToken = 'pk.eyJ1IjoicmVtZWxpYXNoaXJsbGV5IiwiYSI6ImNsMWhodDY3NjBjcmszaXB3OTMzemtkbXYifQ.pJeHvUL0LGZGu3YSeVDPjA';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/remeliashirlley/cl1hi0m82001k15rjscjy23l1', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});