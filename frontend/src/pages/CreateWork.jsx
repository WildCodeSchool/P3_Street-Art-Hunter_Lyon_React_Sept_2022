import Header from "@components/Header";
import React, { useMemo, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import WorkForm from "../components/User/CreateWork/WorkForm";

export default function CreateWork() {
  const [markerCoords, setMarkerCoords] = useState([45.7578137, 4.8320114]);
  const [markerLatitude, setMarkerLatitude] = useState(markerCoords.lat);
  const [markerLongitude, setMarkerLongitude] = useState(markerCoords.lng);

  const dragHandler = useMemo(
    () => ({
      dragend(e) {
        setMarkerCoords(e.target.getLatLng());
        setMarkerLatitude(e.target.getLatLng().lat);
        setMarkerLongitude(e.target.getLatLng().lng);
      },
    }),
    [markerCoords]
  );

  return (
    <div className="bg-main-background bg-cover w-auto h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center backdrop-blur-sm rounded-[3rem] mt-2 ml-2 w-[95%] border-[1px] border-white/10 py-3">
        <div className="creatework w-full flex flex-wrap justify-center">
          <h1 className="text-white text-center font-main-font text-4xl mb-2 mt-2">
            Nouvelle Oeuvre
          </h1>
          <div className="w-[90%] border rounded-xl border-white">
            <MapContainer
              center={markerCoords}
              zoom={16}
              scrollWheelZoom
              zoomControl={false}
              className="custom-popup"
            >
              <Marker
                position={markerCoords}
                draggable
                eventHandlers={dragHandler}
              />
              <TileLayer
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
              />
            </MapContainer>
          </div>
        </div>

        <WorkForm
          markerLatitude={markerLatitude}
          markerLongitude={markerLongitude}
        />
      </div>
    </div>
  );
}
