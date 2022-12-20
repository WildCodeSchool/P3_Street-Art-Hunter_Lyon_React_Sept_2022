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
    // <div className="p-0 backdrop-blur-sm flex justify-items-center justify-around">
    //   <button
    //     type="submit"
    //     className=" p-1 w-1/5 font-main-font text-1xl group relative flex justify-center rounded-full border py-2 border-indigo-500/50 font-medium text-white hover:bg-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    //   >
    //     <span className=" absolute inset-y-0 left-0 flex items-center pl-3" />
    //     ARTISTES
    //   </button>
    //   <button
    //     type="submit"
    //     className="p-1 w-1/5 font-main-font text-1xl group relative flex justify-center rounded-full border py-2 border-indigo-500/50 font-medium text-white hover:bg-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    //   >
    //     <span className=" absolute inset-y-0 left-0 flex items-center pl-3" />
    //     OEUVRES
    //   </button>
    //   <button
    //     type="submit"
    //     className="p-1 w-1/5 font-main-font text-1xl group relative flex justify-center rounded-full border py-2 border-indigo-500/50 font-medium text-white hover:bg-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    //   >
    //     <span className=" absolute inset-y-0 left-0 flex items-center pl-3" />
    //     SHOP
    //   </button>
    // </div>
  );
}
