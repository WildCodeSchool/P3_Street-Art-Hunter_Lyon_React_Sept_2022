import React from "react";
import { NavLink } from "react-router-dom";
import SwitchButtonNav from "./SwitchButtonNav";

export default function Filters({ allOrLive }) {
  return (
    <div className="p-2 w-full h-[80px] bg- drop-shadow-bottomtop flex items-end justify-around">
      <NavLink to={`/galerie/${allOrLive}/artistes`}>
        <SwitchButtonNav
          content="Artistes"
          styleModif="mb-4 w-24 text-1xl"
          bgColor="bg-[#28436E]"
        />
      </NavLink>
      <NavLink to={`/galerie/${allOrLive}/oeuvres`}>
        <SwitchButtonNav
          content="Oeuvres"
          styleModif="mb-4 w-24 text-1xl"
          bgColor="bg-[#28436E]"
        />
      </NavLink>

      <NavLink to={`/galerie/${allOrLive}/shop`}>
        <SwitchButtonNav
          content="Shop"
          styleModif="mb-4 w-24 text-1xl"
          bgColor="bg-[#28436E]"
        />
      </NavLink>
    </div>
  );
}
