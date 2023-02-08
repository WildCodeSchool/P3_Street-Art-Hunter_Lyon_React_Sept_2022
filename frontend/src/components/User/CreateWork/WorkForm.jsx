import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

import { useCurrentPhotoContext } from "../../../contexts/photoContext";

import { useCurrentUserContext } from "../../../contexts/userContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

function WorkForm({ markerLatitude, markerLongitude }) {
  const { token, user } = useCurrentUserContext();
  const { contextPhoto } = useCurrentPhotoContext();

  const [name, setName] = useState("Nom Inconnu");
  const [artistList, setArtistList] = useState([]);
  const [artistId, setArtistId] = useState(1);
  const validated = 0;

  const navigate = useNavigate();

  const workCreated = () => {
    toast(
      "L'oeuvre à été créee, tu recevras les points quand elle sera validée",
      {
        icon: "👍",
      }
    );
  };

  useEffect(() => {
    fetch(`${backURL}/artists`)
      .then((result) => result.json())
      .then((result) => {
        setArtistList(result);
      });
  }, []);
  console.warn(artistList);
  // soumettre le formulaire
  const handleForm = (e) => {
    e.preventDefault();
    if (name === "") setName("Nom Inconnu");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("authorization", `Bearer ${token}`);
    const body = JSON.stringify({
      name,
      artistId,
      latitude: markerLatitude,
      longitude: markerLongitude,
      validated,
      value: 100,
      image: contextPhoto.current,
      userId: user.id,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };
    workCreated();
    e.preventDefault();
    fetch(`${backURL}/workandpicture`, requestOptions).catch((err) => {
      console.warn(err);
    });
    setTimeout(() => {
      navigate("/galerie/all");
    }, 2500);
  };

  return (
    <div>
      <div>
        <Toaster position="bottom" reverseOrder />
      </div>
      <form
        onSubmit={handleForm}
        className="flex flex-col justify-center items-center mb-4"
      >
        <label className="flex flex-col justify-center text-white mt-2">
          Nom
          <div className="flex flex-row-reverse border rounded-[3rem] border-white h-[90%] w-64">
            <input
              onChange={(e) => setName(e.target.value)}
              type="name"
              name="name"
              placeholder="Nom Inconnu"
              id="name"
              className="form-control relative block w-full appearance-none bg-transparent rounded-full border border-white px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </label>
        <label
          className={`flex flex-col justify-center text-white 
                 mt-5`}
        >
          Artiste
          <div className="flex flex-row-reverse border rounded-[3rem] border-white h-[90%] w-68 ">
            <select
              onChange={(e) => setArtistId(e.target.value)}
              type="artist"
              name="artist"
              id="artist"
              className="form-control relative block w-64 appearance-none bg-transparent rounded-full border border-white px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              {artistList.map((artistFromList) => (
                <option
                  key={artistFromList.id}
                  className="bg-transparent rounded-full border border-white px-3 py-2 text-black placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm "
                  value={artistFromList.id}
                >
                  {artistFromList.artist_name}
                </option>
              ))}
            </select>
          </div>
        </label>
        <div className="flex justify-between w-full">
          <NavLink to="/validation">
            <button
              type="button"
              className="bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-[32px] py-1 px-6  mt-5 w-[50%] min-w-fit"
            >
              RETOUR
            </button>
          </NavLink>

          <button
            type="submit"
            className="bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-[32px] py-1 px-6 w-[50%]  mt-5"
          >
            CREER
          </button>
        </div>
      </form>
    </div>
  );
}

export default WorkForm;
