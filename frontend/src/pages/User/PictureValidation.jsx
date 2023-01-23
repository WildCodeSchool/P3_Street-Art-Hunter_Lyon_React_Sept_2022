import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Header from "../../components/Global/Header";

import { useCurrentPhotoContext } from "../../contexts/photoContext";
import { useCurrentUserContext } from "../../contexts/userContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

function PictureValidation() {
  const { contextPhotoCoord, contextPhoto } = useCurrentPhotoContext();
  const { user, token } = useCurrentUserContext();

  const [allWorks, setAllWorks] = useState([]);
  const [idWork, setIdWork] = useState("");
  const navigate = useNavigate();

  const handleSendPhoto = () => {
    // on vérifie qu'on à toutes les datas
    if (contextPhoto.current !== "" && idWork !== "" && user.id) {
      // on upload la photo
      fetch(`${backURL}/photo`, {
        method: "POST",
        body: JSON.stringify({
          image: contextPhoto.current,
          filename: `userId-${user.id}-workId-${idWork}`,
        }),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }).then((response) => response.json());

      // on met les infos de la photo dans la table picture de la bdd

      fetch(`${backURL}/pictures`, {
        method: "POST",
        body: JSON.stringify({
          url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Banksy-ps.jpg",
          workId: idWork,
          userId: user.id,
        }),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }).then((response) => response.json());
    } else if (contextPhoto.current === "") {
      console.warn("Veuillez prendre une photo d'abord!");
    } else if (idWork === "") {
      console.warn(
        "Veuillez sélectionner une oeuvre, si vous ne la trouvez pas sur la carte, créer la!"
      );
    }
    navigate("/galerie/live");
  };

  useEffect(() => {
    fetch(`${backURL}/works`)
      .then((result) => result.json())
      .then((result) => {
        setAllWorks(result);
      });
  }, []);

  return (
    <div className="bg-main-background bg-cover w-auto h-screen ">
      <Header />

      <div className="flex flex-col justify-around items-center backdrop-blur-sm rounded-[3rem] ml-2 w-[95%] border-[1px] border-white/10 pictureValidation h-[75vh]">
        <h2 className="text-white text-center font-main-font text-4xl my-2">
          Valide ta photo!
        </h2>
        <div className="w-full flex flex-col items-center">
          <h3 className="text-white self-start font-main-font text-3xl my-2 ml-2">
            Trouve l'oeuvre sur la carte :
          </h3>
          <MapContainer
            center={contextPhotoCoord.current}
            zoom={16}
            scrollWheelZoom
            zoomControl={false}
            className="custom-popup"
          >
            {allWorks
              .filter((work) => work.latitude && work.longitude)
              .map((work) => (
                <Marker
                  key={work.id}
                  position={[work.latitude, work.longitude]}
                >
                  <Popup>
                    {work.work_name} <br />
                    <button type="button" onClick={() => setIdWork(work.id)}>
                      Choisir cette oeuvre
                    </button>
                  </Popup>
                </Marker>
              ))}
            <TileLayer
              attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> contributors'
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            />
          </MapContainer>
        </div>
        <div className="flex justify-around flex-wrap w-full">
          <h3 className="text-white self-start font-main-font text-2xl">
            Ton oeuvre n'est pas repertoriée ?
          </h3>
          <NavLink to="/creatework">
            <h3 className="text-lightblue self-start font-main-font text-2xl  underline">
              Créer la!
            </h3>
          </NavLink>
          <h3 className="text-pink  font-main-font text-2xl ml-2 underline">
            Revoir ta photo
          </h3>
        </div>

        <div className="flex justify-around w-full">
          <NavLink to="/camera">
            <button
              type="button"
              className="bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-[32px] py-1 px-6  mt-5 w-[40%] min-w-fit"
            >
              RETOUR
            </button>
          </NavLink>
          <button
            type="button"
            onClick={() => {
              handleSendPhoto();
            }}
            className="bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-[32px] py-1 px-6  mt-5 w-[40%] min-w-fit text-center"
          >
            VALIDER
          </button>
        </div>
      </div>
    </div>
  );
}

export default PictureValidation;
