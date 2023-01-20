import React, { useMemo, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import WorkForm from "../../components/User/CreateWork/WorkForm";
import { useCurrentPhotoContext } from "../../contexts/photoContext";

export default function CreateWork() {
  const { contextPhotoCoord } = useCurrentPhotoContext();

  const [markerCoords, setMarkerCoords] = useState(contextPhotoCoord.current);

  const [markerLatitude, setMarkerLatitude] = useState(markerCoords[0]);
  const [markerLongitude, setMarkerLongitude] = useState(markerCoords[1]);

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
    <div className="bg-main-background bg-cover w-auto h-screen ">
      <HeaderWithBurger />

      <div className="flex flex-col justify-center items-center backdrop-blur-sm rounded-[3rem] ml-2 w-[95%] border-[1px] border-white/10 mt-[6rem]">
        <div className="creatework w-full flex flex-wrap justify-center">
          <h2 className="text-white text-center font-main-font text-4xl mb-2 mt-2">
            Nouvelle Oeuvre
          </h2>
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
