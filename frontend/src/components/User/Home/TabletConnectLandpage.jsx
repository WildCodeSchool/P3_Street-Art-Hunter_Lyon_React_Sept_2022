import React from "react";
import { NavLink } from "react-router-dom";

function TabletConnectLandpage() {
  return (
    <div className="flex justify-center items-end h-screen w-full">
      <div className="mb-10 w-[70%] h-[40vh] backdrop-blur bg-black/10 rounded-[3rem] flex flex-col justify-center items-center">
        <NavLink to="/stepper">
          <button
            type="button"
            className="bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-[2.8rem] py-2 px-16"
          >
            S'INSCRIRE
          </button>
        </NavLink>
        <p className="text-white font-main-font text-[2.8rem]">ou</p>
        <NavLink to="/connexion">
          <button
            type="button"
            className="text-lightblue border border-lightblue rounded-3xl font-main-font text-[2.8rem] py-2 px-16"
          >
            SE CONNECTER
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default TabletConnectLandpage;
