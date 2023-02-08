import React from "react";
import { NavLink } from "react-router-dom";
import art from "../../../assets/art.svg";

function Works() {
  return (
    <div className="bg-white w-[25%] h-[45vh] shadow-2xl shadow-cyan-500/50 flex justify-center items-center m-3 flex-wrap">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-black font-main-font text-3xl mb-5 text-center">
          Shops
        </h2>

        <img
          src={art}
          className="w-[15%} h-[15vh] mb-14 mt-4"
          alt="drawing of an art svg"
        />

        <div className="w-[60%] h-[4vh]">
          <NavLink to="/Admin-shop">
            <button
              type="button"
              className=" w-full h-full bg-lightblue rounded text-white"
            >
              Voir
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Works;
