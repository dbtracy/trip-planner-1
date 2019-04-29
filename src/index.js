const mapboxgl = require("mapbox-gl")
const buildMarker = require("./marker")

mapboxgl.accessToken = "pk.eyJ1IjoiZGFudHJhY3kiLCJhIjoiY2p2MmptbDVxMDNwNjQ0bno2c2xvYTVubyJ9.7qXQ7dYRVXrHA52FL4SSAQ"

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
})

const marker1 = buildMarker('activities', [-74.009151, 40.705086])
const marker2 = buildMarker('restaurants', [-73, 40.705086])
const marker3 = buildMarker('hotels', [-72, 40.705086])

marker1.addTo(map)
marker2.addTo(map)
marker3.addTo(map)
