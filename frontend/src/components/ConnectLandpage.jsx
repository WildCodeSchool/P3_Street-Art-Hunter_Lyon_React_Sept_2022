import React from "react";
import { NavLink } from "react-router-dom";

function ConnectLandpage() {
  return (
    <div className="flex justify-center h-10">
      <div className="relative bottom-[6rem] w-80 h-60 backdrop-blur-sm bg-black/10 rounded-[3rem] flex flex-col justify-center items-center">
        <NavLink to="/stepper">
          <button
            type="button"
            className="bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-[32px] py-1 px-6"
          >
            S'INSCRIRE
          </button>
        </NavLink>
        <p className="text-white font-main-font text-[32px]">ou</p>
        <NavLink to="/connexion">
          <button
            type="button"
            className="text-lightblue border border-lightblue rounded-3xl font-main-font text-[32px] py-1 px-6"
          >
            SE CONNECTER
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default ConnectLandpage;
