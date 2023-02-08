import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import isConnected from "../../../services/isConnected";

import MessageSend from "./PopUpMessageSend";

import { useCurrentUserContext } from "../../../contexts/userContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

function ContactForm() {
  const navigate = useNavigate();
  const [objet, setobjet] = useState("");
  const [userMessage, setuserMessage] = useState("");
  const [doneMessage, setDoneMessage] = useState(false);

  const { user, setUser, token } = useCurrentUserContext();

  const [redForm, setRedForm] = useState([]);

  const sendForm = (e) => {
    if (objet !== "" && userMessage !== "") {
      const myHeaders = new Headers({
        Authorization: `Bearer ${token}`,
      });
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        objet,
        userMessage,
        user_id: user.id,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };
      e.preventDefault();
      // on envoi le message dans le back
      fetch(`${backURL}/userMessage`, requestOptions)
        .then((result) => {
          if (!isConnected(result)) {
            localStorage.clear();
            setUser("");
            navigate("/");
          }
          return result;
        })
        .then(() => {
          setDoneMessage(true);

          setTimeout(() => {
            navigate("/menu");
          }, 3000);
        })
        .catch((err) => {
          console.warn(err);
        });
    } else {
      e.preventDefault();
      const emptyFields = [];
      if (objet === "") emptyFields.push("object");
      if (userMessage === "") emptyFields.push("userMessage");

      setRedForm(emptyFields);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center  backdrop-blur-sm rounded-[3rem]  ml-2 w-[95%]">
      {doneMessage ? (
        ""
      ) : (
        <>
          <h1 className="text-white font-main-font text-4xl mb-5 mt-4">
            NOUS CONTACTER
          </h1>
          <form
            onSubmit={sendForm}
            className="flex flex-col justify-center items-center space-y-5 mb-4"
          >
            <label className="flex flex-col justify-center text-white text-2xl">
              Bonjour {user.pseudo},
            </label>

            <label className="flex flex-col justify-center text-white">
              Objet :
              <div
                className={`flex flex-row-reverse border rounded-[3rem] border-${
                  redForm.includes("object") ? "red-700" : "white"
                } h-[90%]`}
              >
                <input
                  onChange={(e) => setobjet(e.target.value)}
                  type="text"
                  name="objet"
                  id="objet"
                  className="form-control relative block w-full appearance-none bg-transparent rounded-full border border-gray-300 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </label>
            <label className="flex flex-col justify-center text-white h-[10rem]">
              Ton message :
              <div
                className={`flex flex-row-reverse align-baseline border rounded-[1.75rem] border-${
                  redForm.includes("userMessage") ? "red-700" : "white"
                } h-[90%]`}
              >
                <textarea
                  onChange={(e) => setuserMessage(e.target.value)}
                  type="text"
                  name="userMessage"
                  id="userMessage"
                  className="form-control block w-[17rem] appearance-none bg-transparent rounded-[1.75rem] px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </label>

            <button
              type="submit"
              className="bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-[32px] py-1 px-6 "
            >
              ENVOYER
            </button>
          </form>
        </>
      )}
      {doneMessage ? <MessageSend /> : ""}
    </div>
  );
}
export default ContactForm;
