import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InscriptionDone from "./Popupvalidationinscription";

const backURL = import.meta.env.VITE_BACKEND_URL;

function Form() {
  const navigate = useNavigate();

  const [doneinscr, setDoneInscr] = useState(false);

  const [redForm, setRedForm] = useState([]);

  const [userInfo, setUserInfo] = useState({
    pseudo: "",
    firstname: "",
    lastname: "",
    scorepoint: "0",
    isAdmin: false,
    email: "",
    password: "",
    verifPassword: "",
  });

  // soumettre le formulaire
  const handleForm = (e) => {
    if (
      userInfo.pseudo !== "" &&
      userInfo.firstname !== "" &&
      userInfo.lastname !== "" &&
      userInfo.email !== "" &&
      userInfo.password !== "" &&
      userInfo.password === userInfo.verifPassword
    ) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        is_admin: userInfo.isAdmin,
        firstname: userInfo.firstname,
        lastname: userInfo.lastname,
        scorepoint: userInfo.scorepoint,
        pseudo: userInfo.pseudo,
        email: userInfo.email,
        password: userInfo.password,
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
    } else {
      e.preventDefault();
      const emptyFields = [];
      if (userInfo.pseudo === "") emptyFields.push("pseudo");
      if (userInfo.firstname === "") emptyFields.push("firstname");
      if (userInfo.lastname === "") emptyFields.push("lastname");
      if (userInfo.email === "") emptyFields.push("email");
      if (userInfo.password === "") emptyFields.push("password");
      if (userInfo.verifPassword === "") emptyFields.push("verifPassword");
      setRedForm(emptyFields);
    }
  };

  const [showPassWord, setshowPassWord] = useState(true);
  const [showPassWord2, setshowPassWord2] = useState(true);

  return (
    <div className="flex flex-col  justify-center items-center  backdrop-blur-sm rounded-[3rem] mt-2 ml-2 w-[95%]">
      {doneinscr ? (
        ""
      ) : (
        <>
          <h1 className="text-white font-main-font text-4xl mb-2 mt-2">
            INSCRIPTION
          </h1>
          <form
            onSubmit={handleForm}
            className="flex flex-col justify-center items-center mb-4"
          >
            <label className="flex flex-col justify-center text-white">
              Pseudo
              <div
                className={`flex flex-row-reverse border rounded-[3rem] border-${
                  redForm.includes("pseudo") ? "red-700" : "white"
                } h-[90%]`}
              >
                <input
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, pseudo: e.target.value })
                  }
                  type="Pseudo"
                  name="Pseudo"
                  id="Pseudo"
                  className={`form-control relative block w-full appearance-none bg-transparent rounded-full border border-${
                    redForm.includes("pseudo") ? "red-700" : "white"
                  } px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                />
              </div>
              {redForm.includes("pseudo") ? (
                <p className="text-sm text-red-700">
                  Veuillez remplir ce champ
                </p>
              ) : (
                ""
              )}
            </label>
            <label
              className={`flex flex-col justify-center text-white ${
                redForm.includes("pseudo") ? "mt-[0rem]" : "mt-5"
              }`}
            >
              Prénom
              <div
                className={`flex flex-row-reverse border rounded-[3rem] border-${
                  redForm.includes("firstname") ? "red-700" : "white"
                } h-[90%]`}
              >
                <input
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, firstname: e.target.value })
                  }
                  type="firstname"
                  name="firstname"
                  id="firstName"
                  className={`form-control relative block w-full appearance-none bg-transparent rounded-full border border-${
                    redForm.includes("firstname") ? "red-700" : "white"
                  } px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                />
              </div>
              {redForm.includes("firstname") ? (
                <p className="text-sm text-red-700">
                  Veuillez remplir ce champ
                </p>
              ) : (
                ""
              )}
            </label>
            <label
              className={`flex flex-col justify-center text-white ${
                redForm.includes("firstname") ? "mt-[0rem]" : "mt-5"
              }`}
            >
              Nom
              <div
                className={`flex flex-row-reverse border rounded-[3rem] border-${
                  redForm.includes("lastname") ? "red-700" : "white"
                } h-[90%]`}
              >
                <input
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, lastname: e.target.value })
                  }
                  type="lastname"
                  name="lastname"
                  id="lastName"
                  className={`form-control relative block w-full appearance-none bg-transparent rounded-full border border-${
                    redForm.includes("lastname") ? "red-700" : "white"
                  } px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                />
              </div>
              {redForm.includes("lastname") ? (
                <p className="text-sm text-red-700">
                  Veuillez remplir ce champ
                </p>
              ) : (
                ""
              )}
            </label>
            <label
              className={`flex flex-col justify-center text-white ${
                redForm.includes("lastname") ? "mt-[0rem]" : "mt-5"
              }`}
            >
              Adresse email
              <div
                className={`flex flex-row-reverse border rounded-[3rem] border-${
                  redForm.includes("email") ? "red-700" : "white"
                } h-[90%]`}
              >
                <input
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                  type="email"
                  name="Adresse-email"
                  id="email"
                  className={`form-control relative block w-full appearance-none bg-transparent rounded-full border border-${
                    redForm.includes("email") ? "red-700" : "white"
                  } px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                />
              </div>
              {redForm.includes("email") ? (
                <p className="text-sm text-red-700">
                  Veuillez remplir ce champ
                </p>
              ) : (
                ""
              )}
            </label>
            <label
              className={`flex flex-col justify-center text-white ${
                redForm.includes("email") ? "mt-[0rem]" : "mt-5"
              }`}
            >
              Mot de passe
              <div
                className={`flex flex-row-reverse border rounded-[3rem] border-${
                  redForm.includes("password") ? "red-700" : "white"
                } h-[90%]`}
              >
                <input
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, password: e.target.value })
                  }
                  type={showPassWord ? "password" : "text"}
                  name="password"
                  id="password"
                  className={`form-control relative block w-full appearance-none bg-transparent rounded-full border border-${
                    redForm.includes("password") ? "red-700" : "white"
                  } px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                />

                {showPassWord ? (
                  <svg
                    onClick={() => setshowPassWord(!showPassWord)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="absolute w-6 h-6 mt-2 mr-2"
                  >
                    <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg
                    onClick={() => setshowPassWord(!showPassWord)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="absolute w-6 h-6 mt-2 mr-2"
                  >
                    <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </div>
              {redForm.includes("password") ? (
                <p className="text-sm text-red-700">
                  Veuillez remplir ce champ
                </p>
              ) : (
                ""
              )}
            </label>
            <label
              className={`flex flex-col justify-center text-white ${
                redForm.includes("password") ? "mt-[0rem]" : "mt-5"
              }`}
            >
              Confirmer le mot le passe
              <div
                className={`flex flex-row-reverse border rounded-[3rem] border-${
                  redForm.includes("verifPassword") ? "red-700" : "white"
                } h-[90%]`}
              >
                <input
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, verifPassword: e.target.value })
                  }
                  type={showPassWord ? "password" : "text"}
                  name="password"
                  id="password"
                  className={`form-control relative block w-full appearance-none bg-transparent rounded-full border border-${
                    redForm.includes("verifPassword") ? "red-700" : "white"
                  } px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                />

                {showPassWord2 ? (
                  <svg
                    onClick={() => setshowPassWord2(!showPassWord2)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="absolute w-6 h-6 mt-2 mr-2"
                  >
                    <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg
                    onClick={() => setshowPassWord2(!showPassWord2)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="absolute w-6 h-6 mt-2 mr-2"
                  >
                    <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </div>
              {redForm.includes("pseudo") ? (
                <p className="text-sm text-red-700">
                  Veuillez remplir ce champ
                </p>
              ) : (
                ""
              )}
            </label>

            <button
              type="submit"
              className={`bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-[32px] py-1 px-6 ${
                redForm.includes("firstname") ? "mt-[0.2rem]" : "mt-6"
              }`}
            >
              S'INSCRIRE
            </button>
          </form>
        </>
      )}
      {doneinscr ? <InscriptionDone /> : ""}
    </div>
  );
}

export default Form;
