import React from "react";

export default function Filters() {
  return (
    <div className="p-0 backdrop-blur-sm flex justify-items-center justify-around">
      <button
        type="submit"
        className=" p-1 w-1/5 font-main-font text-1xl group relative flex justify-center rounded-full border py-2 border-indigo-500/50 font-medium text-white hover:bg-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <span className=" absolute inset-y-0 left-0 flex items-center pl-3" />
        ARTISTES
      </button>
      <button
        type="submit"
        className="p-1 w-1/5 font-main-font text-1xl group relative flex justify-center rounded-full border py-2 border-indigo-500/50 font-medium text-white hover:bg-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <span className=" absolute inset-y-0 left-0 flex items-center pl-3" />
        OEUVRES
      </button>
      <button
        type="submit"
        className="p-1 w-1/5 font-main-font text-1xl group relative flex justify-center rounded-full border py-2 border-indigo-500/50 font-medium text-white hover:bg-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <span className=" absolute inset-y-0 left-0 flex items-center pl-3" />
        SHOP
      </button>
    </div>
  );
}
