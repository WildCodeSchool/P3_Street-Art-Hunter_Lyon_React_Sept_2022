import MenuButton from "@components/MenuButton";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className="h-screen bg-main-background bg-contain flex justify-center items-center">
      <div className="w-5/6 h-[70vh]  backdrop-blur-md rounded-3xl flex flex-col justify-around items-center border-[1px] border-white/10 py-10">
        <MenuButton content="MODIFIER PROFIL" />
        <NavLink to="/favoris">
          <MenuButton content="FAVORIS" />
        </NavLink>
        <NavLink to="/magalerie">
          <MenuButton content="MA GALERIE" />
        </NavLink>
        <MenuButton content="MES BADGES" />
        <MenuButton content="HELP" />
      </div>
    </div>
  );
}
