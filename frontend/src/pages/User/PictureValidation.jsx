import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { toast, Toaster } from "react-hot-toast";

import AddScore from "../../components/User/Scores/AddScore";
import Header from "../../components/Global/Header";

import { useCurrentPhotoContext } from "../../contexts/photoContext";
import { useCurrentUserContext } from "../../contexts/userContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

function PictureValidation() {
  const { contextPhotoCoord, contextPhoto } = useCurrentPhotoContext();
  const { user, token } = useCurrentUserContext();
  const [validated, setValidated] = useState(false);
  const [allWorks, setAllWorks] = useState([]);
  const [idWork, setIdWork] = useState("");
  const [points, setPoints] = useState("0");
  const [pictureToModify, setPictureToModify] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });

  const noPhoto = () => {
    toast("Prends une photo d'abord!", {
      icon: "🚫",
    });
  };

  const noWork = () => {
    toast(
      "Sélectionne une oeuvre, si tu ne la trouves pas sur la carte, crée la!",
      {
        icon: "🚫",
      }
    );
  };

  // fonction qui upload une photo sur cloudinary, vérifie si le user à déja une photo pour cette oeuvre puis la met dans la db et attribue les points
  const handleSendPhoto = () => {
    // on vérifie qu'on à toutes les datas
    if (contextPhoto.current !== "" && idWork !== "" && user.id) {
      // on upload la photo
      fetch(`${backURL}/photo`, {
        method: "POST",
        body: JSON.stringify({
          image: contextPhoto.current,
          filename: `userId-${user.id}-workId-${idWork}`,
          workId: idWork,
          userId: user.id,
        }),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((value) => {
          if (value.id) {
            setPictureToModify(value);
            setShowModal(true);
          } else {
            setPoints(value);
            setValidated(true);
            setTimeout(() => {
              navigate("/galerie/live");
            }, 3000);
          }
        });

      // on met les infos de la photo dans la table picture de la bdd
    } else if (contextPhoto.current === "") {
      noPhoto();
    } else if (idWork === "") {
      noWork();
    }
  };

  useEffect(() => {
    fetch(`${backURL}/workswithpicture`, { headers: myHeaders })
      .then((result) => result.json())
      .then((result) => {
        setAllWorks(result);
      });
  }, []);

  // fonction qui upload une nouvelle photo pour un user/oeuvre et remplace l'url et la date de création dans la table picture
  const handleReplacePicture = () => {
    fetch(`${backURL}/pictures/changepicture/${pictureToModify.id}`, {
      method: "PUT",
      body: JSON.stringify({
        image: contextPhoto.current,
        filename: `userId-${user.id}-workId-${idWork}`,
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(navigate("/galerie/live"));
  };

  return (
    <div className="bg-main-background bg-cover w-auto h-screen ">
      <Toaster position="top-center" reverseOrder />

      {showModal ? (
        <div className="w-screen h-screen absolute z-20 bg-black/50 flex justify-center items-center">
          <div
            className="w-screen h-screen absolute"
            onClick={() => setShowModal(false)}
            onKeyDown={() => setShowModal(false)}
            role="button"
            tabIndex={0}
            aria-label="close"
          />
          <div className="h-[35vh] w-[80vw] absolute flex bg-black/20 border-solid border-2 border-indigo-500/50  backdrop-blur-sm rounded-2xl text-white text-xl font-main-font justify-center items-center flex-wrap">
            <p className="text-center text-2xl mx-2">
              Tu as déja pris cette oeuvre en photo, veux tu remplacer ta photo?
              <br />
            </p>
            <p className="text-center">
              (Tu ne gagneras pas à nouveau de points !)
            </p>
            <div className="flex justify-between w-[75%] mb-2">
              <button
                type="button"
                className="bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-[32px] py-2 px-6  mt-5 min-w-fit text-center text-black"
                onClick={() => setShowModal(false)}
              >
                Non
              </button>
              <button
                type="button"
                onClick={handleReplacePicture}
                className="bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-[32px] py-2 px-6  mt-5 min-w-fit text-center text-black"
              >
                Oui
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <Header />

      <div className="flex flex-col justify-around items-center backdrop-blur-sm rounded-[3rem] ml-2 w-[95%] border-[1px] border-white/10 pictureValidation h-[75vh]">
        <h2 className="text-white text-center font-main-font text-4xl my-2">
          Valide ta photo!
        </h2>
        <div className="w-full flex flex-col items-center">
          <h3 className="text-white text-center self-start font-main-font text-2xl my-2 ml-2">
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
              .filter(
                (work) => work.latitude && work.longitude && work.is_validated
              )
              .map((work) => (
                <Marker
                  key={work.id}
                  position={[work.latitude, work.longitude]}
                >
                  <button type="button" onClick={() => setIdWork(work.id)}>
                    <Popup>
                      <div className="flex flex-wrap justify-center">
                        <img
                          className="h-20 w-20 object-contain"
                          src={work.picture_url}
                          alt={work.work_name}
                        />
                        {work.work_name} <br />
                      </div>
                    </Popup>
                  </button>
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
      {validated ? (
        <AddScore points={points} setShowPoints={setValidated} />
      ) : (
        ""
      )}
    </div>
  );
}

export default PictureValidation;
