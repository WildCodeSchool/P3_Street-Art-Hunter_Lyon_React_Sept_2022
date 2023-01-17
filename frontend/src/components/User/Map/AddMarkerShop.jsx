import { useEffect } from "react";
import ReactDOMServer from "react-dom/server";
// eslint-disable-next-line import/no-unresolved
import L from "leaflet";
// eslint-disable-next-line import/no-unresolved
import { useMap } from "react-leaflet";
import shopMarker from "../../../assets/ShopMarker.svg";
import PopupContainerShop from "./PopupContainerShop";

const icon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [10, 41],
  popupAnchor: [8, -40],
  iconUrl: shopMarker,
});

const position = [
  [45.7573623, 4.8330089],
  [45.77727381547787, 4.83227839554234],
  [45.73797350562908, 4.8615752845121785],
];

function CustomReactPopup() {
  return (
    <div>
      <PopupContainerShop />
    </div>
  );
}

function AddMarkerShop({ handleActiveShop, layerGroup }) {
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
  }, [handleActiveShop]);

  return null;
}

export default AddMarkerShop;
