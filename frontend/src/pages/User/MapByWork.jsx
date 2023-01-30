import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { useCurrentResponsiveContext } from "../../contexts/responsiveContext";

function MapByWork({ position }) {
  const { isMobile, isTablet, isLittleMobile } = useCurrentResponsiveContext();

  return (
    <div>
      {(isMobile || isLittleMobile) && (
        <div className="mt-[1rem] map-by-work">
          <MapContainer
            center={position}
            zoom={16}
            scrollWheelZoom
            zoomControl={false}
            className="custom-popup "
          >
            <TileLayer
              attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> contributors'
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      )}

      {isTablet && (
        <div className="mt-[1rem] map-by-work">
          <MapContainer
            center={position}
            zoom={16}
            scrollWheelZoom
            zoomControl={false}
            className="custom-popup "
          >
            <TileLayer
              attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> contributors'
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </div>
  );
}

export default MapByWork;
