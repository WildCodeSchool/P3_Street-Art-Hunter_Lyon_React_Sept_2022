import { useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import L from "leaflet";
import { useMap } from "react-leaflet";
import artMarker from "../assets/ArtMarker.svg";
import PopupContainerArt from "./PopupContainerArt";

const icon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [10, 41],
  popupAnchor: [8, -40],
  iconUrl: artMarker,
});
const position = [
  [45.724398437135, 4.80370633164926],
  [45.749763505464294, 4.845515411352204],
  [45.77334768319462, 4.876128363893764],
];

function CustomReactPopup() {
  return (
    <div>
      <PopupContainerArt />
    </div>
  );
}

function AddMarkerArt({ handleActiveArt, layerGroup }) {
  const map = useMap();
  useEffect(() => {
    position.forEach((element) => {
      const coordinate = element;
      const [lat, lng] = coordinate;
      L.marker([lat, lng], { icon })
        .bindPopup(ReactDOMServer.renderToString(<CustomReactPopup />))
        .openPopup()
        .addTo(layerGroup);
    });

    map.addLayer(layerGroup);
  }, [handleActiveArt]);

  return null;
}

export default AddMarkerArt;
