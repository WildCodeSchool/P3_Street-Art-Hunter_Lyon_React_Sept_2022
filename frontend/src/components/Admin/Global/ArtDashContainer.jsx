import React from "react";
import art from "../../../assets/art.svg";

function ArtDashContainer() {
  return (
    <div className="bg-white w-[20%] h-[40vh] shadow-2xl shadow-cyan-500/50 flex justify-center items-center m-3 flex-wrap">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-black font-main-font text-4xl mb-5">Oeuvres</h2>
        <img
          src={art}
          className="w-[20%} h-[20vh] mb-5"
          alt="drawing of an art svg"
        />
        <button
          type="button"
          className="w-[60%] h-[4vh] bg-lightblue rounded text-white"
        >
          Voir
        </button>
      </div>
    </div>
  );
}

export default ArtDashContainer;
