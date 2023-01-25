import React from "react";
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <div className="bg-home-image bg-cover w-full h-screen flex flex-wrap items-end justify-center">
      <div className="text-8xl pt-64 font-main-font text-center flicker-3 bg-clip-text text-transparent bg-gradient-to-r from-lightblue to-pink">
        {" "}
        ERROR <br /> 404{" "}
      </div>
      <div className="typewriter mb-12 w-80 h-60 backdrop-blur-sm bg-black/10 rounded-[3rem] flex flex-col justify-center items-center font-main-font text-2xl text-white animate-type">
        <div className=""> Il n'y a rien ici.</div>
        <NavLink to="/" className="bg-logo-home h-36 w-36 bg-cover" />
      </div>
    </div>
  );
}
