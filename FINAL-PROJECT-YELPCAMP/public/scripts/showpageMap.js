mapboxgl.accessToken = mapToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: campground.geometry.coordinates,
    zoom : 6
});
map.addControl(new mapboxgl.NavigationControl(true,true,true), 'bottom-right');
new mapboxgl.Marker()
.setLngLat(campground.geometry.coordinates)
.setPopup(
    new mapboxgl.Popup({offset : 25})
    .setHTML(
        `<h4>${campground.title}, <p>${campground.location}</p></h4>`
    )
)
.addTo(map)