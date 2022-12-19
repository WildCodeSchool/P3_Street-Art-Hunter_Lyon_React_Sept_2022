import React, { useState } from "react";

function Form() {
  const [showPassWord, setshowPassWord] = useState(true);
  const [showPassWord2, setshowPassWord2] = useState(true);
  return (
    <div className="flex flex-col justify-center items-center  backdrop-blur-sm rounded-[3rem] mt-2 ml-2 w-[95%]">
      <h1 className="text-white font-main-font text-4xl mb-5 mt-4">
        INSCRIPTION
      </h1>
      <form className="flex flex-col justify-center items-center space-y-5 mb-4">
        <label className="flex flex-col justify-center text-white">
          Pseudo
          <div className="flex flex-row-reverse border rounded-[3rem] border-white h-[90%]">
            <input
              type="text"
              name="Pseudo"
              className="bg-transparent pl-2 pr-2 mt-1 mb-1"
            />
          </div>
        </label>
        <label className="flex flex-col justify-center text-white">
          Prénom
          <div className="flex flex-row-reverse border rounded-[3rem] border-white h-[90%]">
            <input
              type="text"
              name="Prénom"
              className="bg-transparent pl-2 pr-2 mt-1 mb-1"
            />
          </div>
        </label>
        <label className="flex flex-col justify-center text-white">
          Nom
          <div className="flex flex-row-reverse border rounded-[3rem] border-white h-[90%]">
            <input
              type="text"
              name="name"
              className=" bg-transparent pl-2 pr-2 mt-1 mb-1"
            />
          </div>
        </label>
        <label className="flex flex-col justify-center text-white">
          Adresse email
          <div className="flex flex-row-reverse border rounded-[3rem] border-white h-[90%]">
            <input
              type="text"
              name="Adresse-email"
              className="bg-transparent pl-2 pr-2 mt-1 mb-1"
            />
          </div>
        </label>
        <label className="flex flex-col justify-center text-white">
          Mot de passe
          <div className="flex flex-row-reverse border rounded-[3rem] border-white h-[90%]">
            <input
              type={showPassWord ? "password" : "text"}
              name="Mot-de-passe"
              className=" bg-transparent pl-2 pr-2 mt-1 mb-1"
            />

            {showPassWord ? (
              <svg
                onClick={() => setshowPassWord(!showPassWord)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="absolute w-6 h-6 mt-1 mr-2"
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
                className="absolute w-6 h-6 mt-1 mr-2"
              >
                <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            )}
          </div>
        </label>
        <label className="flex flex-col justify-center text-white ">
          Confirmer le mot le passe
          <div className="flex flex-row-reverse border rounded-[3rem] border-white h-[90%] ">
            <input
              type={showPassWord2 ? "password" : "text"}
              name="Confirmé-le-mot-le-passe"
              className="bg-transparent pl-2 pr-2 mt-1 mb-1 "
            />
            {showPassWord2 ? (
              <svg
                onClick={() => setshowPassWord2(!showPassWord2)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="absolute w-6 h-6 mt-1 mr-2"
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
                className="absolute w-6 h-6 mt-1 mr-2"
              >
                <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            )}
          </div>
        </label>
        <input
          type="submit"
          value="S'INSCRIRE"
          className="bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-[32px] py-1 px-6 "
        />
      </form>
    </div>
  );
}

export default Form;
