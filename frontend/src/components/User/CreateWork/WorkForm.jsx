/* eslint-disable no-const-assign */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import InscriptionDone from "@components/User/InscriptionDone";

const backURL = import.meta.env.VITE_BACKEND_URL;

function WorkForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("Unknown");
  const [artist, setArtist] = useState("Unknown");

  const [doneinscr, setDoneInscr] = useState(false);

  // soumettre le formulaire
  const handleForm = (e) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      name,
      artist,
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
        setDoneInscr(true);

        setTimeout(() => {
          navigate("/connexion");
        }, 3000);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center  backdrop-blur-sm rounded-[3rem] mt-2 ml-2 w-[95%]">
      {doneinscr ? (
        ""
      ) : (
        <>
          <h1 className="text-white font-main-font text-4xl mb-2 mt-2">
            Nouvelle Oeuvre
          </h1>
          <form
            onSubmit={handleForm}
            className="flex flex-col justify-center items-center mb-4"
          >
            <label className="flex flex-col justify-center text-white">
              Nom
              <div className="flex flex-row-reverse border rounded-[3rem] border-white h-[90%]">
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
              <div className="flex flex-row-reverse border rounded-[3rem] border-white h-[90%]">
                <input
                  onChange={(e) => setArtist(e.target.value)}
                  type="artist"
                  name="artist"
                  id="artist"
                  placeholder="Artiste Inconnu"
                  className="form-control relative block w-full appearance-none bg-transparent rounded-full border border-white px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </label>

            <button
              type="submit"
              className="bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-[32px] py-1 px-6  mt-5"
            >
              SOUMETTRE
            </button>
          </form>
        </>
      )}
      {doneinscr ? <InscriptionDone /> : ""}
    </div>
  );
}

export default WorkForm;
