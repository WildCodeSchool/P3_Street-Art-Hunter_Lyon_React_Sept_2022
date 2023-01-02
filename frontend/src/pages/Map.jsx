import React, { useState } from "react";
import L from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import BottomNavMap from "../components/BottomNavMap";
import Header from "../components/Header";
import "leaflet/dist/leaflet.css";
import AddMarkerShop from "../components/AddMarkerShop";
import AddMarkerArt from "../components/AddMarkerArt";

function Map() {
  const [activeShop, setActiveShop] = useState(false);
  const [activeArt, setActiveArt] = useState(false);
  const [layerGroup] = useState(L.layerGroup());

  const handleActiveShop = () => {
    layerGroup.clearLayers();
    setActiveShop(!activeShop);
  };

  const handleActiveArt = () => {
    layerGroup.clearLayers();
    setActiveArt(!activeArt);
  };

  return (
    <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
      <Header />
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
  );
}

export default Map;
