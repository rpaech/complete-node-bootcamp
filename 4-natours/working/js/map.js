// import "leaflet/dist/leaflet.css";
import L from "leaflet";

function display(locations) {
  const map = L.map("map");

  L.tileLayer(
    "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const greenIcon = L.icon({
    iconUrl: "/img/pin.png",
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -35],
  });

  const markers = locations.map((loc) =>
    L.marker([loc.coordinates[1], loc.coordinates[0]], {
      icon: greenIcon,
    })
      .bindPopup(
        L.popup({
          autoClose: false,
          closeOnClick: false,
          className: "mapboxgl-popup-content",
        }),
      )
      .setPopupContent(`Day ${loc.day}: ${loc.description}`),
  );

  const features = L.featureGroup(markers);

  map
    .fitBounds(features.getBounds(), { padding: [150, 150] })
    .scrollWheelZoom.disable();

  features.addTo(map);

  for (let i = markers.length - 1; i >= 0; i--) markers[i].openPopup();
}

export default display;
