import React, { useState } from "react";
import SwitchButton from "./SwitchButton";

export default function Filters() {
  const [isActive, setIsActive] = useState("");
  return (
    <div className="p-2 w-full h-[80px] bg- drop-shadow-bottomtop flex items-end justify-around">
      <SwitchButton
        isActive={isActive}
        setIsActive={setIsActive}
        content="Artistes"
        styleModif="mb-4 w-24 text-1xl"
        bgColor="bg-[#28436E]"
      />
      <SwitchButton
        isActive={isActive}
        setIsActive={setIsActive}
        content="oeuvres"
        styleModif="mb-4 w-24 text-1xl"
        bgColor="bg-[#28436E]"
      />
      <SwitchButton
        isActive={isActive}
        setIsActive={setIsActive}
        content="Shop"
        styleModif="mb-4 w-24 text-1xl"
        bgColor="bg-[#28436E]"
      />
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
