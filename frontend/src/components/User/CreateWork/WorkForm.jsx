/* eslint-disable no-const-assign */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const backURL = import.meta.env.VITE_BACKEND_URL;

function WorkForm({ markerLatitude, markerLongitude }) {
  const navigate = useNavigate();
  const [name, setName] = useState("Nom Inconnu");
  const [artistList, setArtistList] = useState([]);
  const [artist, setArtist] = useState(1);
  const validated = 0;

  useEffect(() => {
    fetch(`${backURL}/artists`)
      .then((result) => result.json())
      .then((result) => {
        setArtistList(result);
      });
  }, []);

  // soumettre le formulaire
  const handleForm = (e) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      name,
      artist,
      markerLatitude,
      markerLongitude,
      validated,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };
    e.preventDefault();
    // on créé un nouvel utilisateur et on reutilise
    fetch(`${backURL}/inscription`, requestOptions)
      .then(() => {
        setTimeout(() => {
          navigate("/connexion");
        }, 3000);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleForm}
        className="flex flex-col justify-center items-center mb-4"
      >
        <label className="flex flex-col justify-center text-white">
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
              onChange={(e) => setArtist(e.target.value)}
              type="artist"
              name="artist"
              id="artist"
              className="form-control relative block w-64 appearance-none bg-transparent rounded-full border border-white px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              {artistList.map((artistFromList) => (
                <option
                  className="  bg-transparent rounded-full border border-white px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm "
                  value={artistFromList.id}
                >
                  {artistFromList.artist_name}
                </option>
              ))}
            </select>
          </div>
        </label>

        <button
          type="submit"
          className="bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-[32px] py-1 px-6  mt-5"
        >
          SOUMETTRE
        </button>
      </form>
    </div>
  );
}

export default WorkForm;
