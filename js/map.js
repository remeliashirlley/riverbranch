// mapboxgl.accessToken = 'pk.eyJ1IjoicmVtZWxpYXNoaXJsbGV5IiwiYSI6ImNsMWhodDY3NjBjcmszaXB3OTMzemtkbXYifQ.pJeHvUL0LGZGu3YSeVDPjA';
// const map = new mapboxgl.Map({
// container: 'map', // container ID
// style: 'mapbox://styles/mapbox/streets-v11', // style URL
// center: [-74.5, 40], // starting position [lng, lat]
// zoom: 9 // starting zoom
// });


let marker;
let placeName;
let popup;
mapboxgl.accessToken = 'pk.eyJ1IjoicmVtZWxpYXNoaXJsbGV5IiwiYSI6ImNsMWhodDY3NjBjcmszaXB3OTMzemtkbXYifQ.pJeHvUL0LGZGu3YSeVDPjA';
let client = new MapboxClient('pk.eyJ1IjoicmVtZWxpYXNoaXJsbGV5IiwiYSI6ImNsMWhodDY3NjBjcmszaXB3OTMzemtkbXYifQ.pJeHvUL0LGZGu3YSeVDPjA');
let map = new mapboxgl.Map({
    // The container property links the div that we defined above to our incoming map
    container: 'map',
    // The style property allows us to use our fancy custom style
    style: 'mapbox://styles/mapbox/streets-v11'
});

// The load event listener ensures that we've loaded our map to the page before we even think about markers
map.on('load', () => {
    map.on('click', (e) => {
        addMarker(map.unproject(e.point))
    })
})

function addMarker(coords) {
    // We remove the marker and popup if there is already a marker on our map
    if (marker) {
        marker.remove();
        popup.remove();
    }
    // Here we query the Mapbox Geocoder API for a place name, and add our marker and popup to the map once we receive a response
    client.geocodeReverse({ latitude: coords.lat, longitude: coords.lng }, (err, res) => {
        placeName = res.features[0].place_name;
        marker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map);
        popup = new mapboxgl.Popup({ closeButton: false, anchor: 'top' })
            .setLngLat(coords)
            .setHTML(`<p>${placeName}</p>`)
            .addTo(map);
    });
}
