import { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import L from "leaflet";
import { useMap } from "react-leaflet";
import artMarker from "../../../assets/ArtMarker.svg";
import PopupContainerArt from "./PopupContainerArt";
import { useCurrentUserContext } from "../../../contexts/userContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

const icon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [10, 41],
  popupAnchor: [8, -40],
  iconUrl: artMarker,
});
const position = [
  [45.74579881690067, 4.827313676020127],
  [45.762515857311286, 4.8276275268335045],
];

function AddMarkerArt({ handleActiveArt, layerGroup }) {
  const { token } = useCurrentUserContext();
  const [showWork, setShowWork] = useState([]);

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");

  const GETrequestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  useEffect(() => {
    fetch(`${backURL}/works`, GETrequestOptions)
      .then((result) => result.json())
      .then((result) => {
        setShowWork(result);
      });
  }, []);
  const map = useMap();
  useEffect(() => {
    position.forEach((element) => {
      const coordinate = element;
      const [lat, lng] = coordinate;
      L.marker([lat, lng], { icon })
        .bindPopup(
          ReactDOMServer.renderToString(
            <CustomReactPopup showWork={showWork} />
          )
        )
        .openPopup()
        .addTo(layerGroup);
    });

    map.addLayer(layerGroup);
  }, [handleActiveArt]);

  return null;
}

function CustomReactPopup({ showWork }) {
  return (
    <div>
      {showWork.map((work) => (
        <PopupContainerArt key={work.id} work={work} />
      ))}
    </div>
  );
}

export default AddMarkerArt;
