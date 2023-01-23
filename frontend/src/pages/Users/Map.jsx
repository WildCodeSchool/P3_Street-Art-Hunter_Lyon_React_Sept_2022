import React, { useState } from "react";
// eslint-disable-next-line import/no-unresolved
import L from "leaflet";
// eslint-disable-next-line import/no-unresolved
import { MapContainer, TileLayer } from "react-leaflet";
// eslint-disable-next-line import/no-unresolved
import "leaflet/dist/leaflet.css";
import BottomNavMap from "../../components/User/Map/BottomNavMap";
import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import AddMarkerShop from "../../components/User/Map/AddMarkerShop";
import AddMarkerArt from "../../components/User/Map/AddMarkerArt";
import { useCurrentUserContext } from "../../contexts/userContext";
import Menu from "./Menu";

function Map() {
  const [activeShop, setActiveShop] = useState(false);
  const [activeArt, setActiveArt] = useState(false);
  const [layerGroup] = useState(L.layerGroup());
  const { open } = useCurrentUserContext();

  const handleActiveShop = () => {
    layerGroup.clearLayers();
    setActiveShop(!activeShop);
  };

  const handleActiveArt = () => {
    layerGroup.clearLayers();
    setActiveArt(!activeArt);
  };

  return (
    <div>
      {!open ? (
        <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
          <HeaderWithBurger />

          <div className="mt-[6rem]">
            <MapContainer
              center={[45.7578137, 4.8320114]}
              zoom={12}
              scrollWheelZoom
              zoomControl={false}
              className="custom-popup"
            >
              <TileLayer
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
              />
              {activeShop && (
                <AddMarkerShop
                  handleActiveShop={handleActiveShop}
                  layerGroup={layerGroup}
                />
              )}
              {activeArt && (
                <AddMarkerArt
                  handleActiveArt={handleActiveArt}
                  layerGroup={layerGroup}
                />
              )}
            </MapContainer>

            <BottomNavMap
              handleActiveShop={handleActiveShop}
              handleActiveArt={handleActiveArt}
            />
          </div>
        </div>
      ) : (
        <Menu />
      )}
    </div>
  );
}

export default Map;
