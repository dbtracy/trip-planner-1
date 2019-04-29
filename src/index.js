const mapboxgl = require("mapbox-gl")

mapboxgl.accessToken = "pk.eyJ1IjoiZGFudHJhY3kiLCJhIjoiY2p2MmptbDVxMDNwNjQ0bno2c2xvYTVubyJ9.7qXQ7dYRVXrHA52FL4SSAQ"

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
})
