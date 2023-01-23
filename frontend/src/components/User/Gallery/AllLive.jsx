import React from "react";
import { NavLink } from "react-router-dom";
import SwitchButtonNav from "../Global/SwitchButtonNav";

export default function Allive() {
  return (
    <div className="w-9/10 h-[30px] bg- drop-shadow-bottomtop flex items-end justify-around mt-[8rem]">
      <NavLink to="/galerie/all">
        <SwitchButtonNav
          content="ALL"
          styleModif="mb-4 w-20 text-2xl"
          bgColor="bg-[#28436E]"
        />
      </NavLink>
      <NavLink to="/galerie/live">
        <SwitchButtonNav
          content="LIVE"
          styleModif="mb-4 w-20 text-2xl"
          bgColor="bg-[#28436E]"
        />
      </NavLink>
    </div>
  );
}
