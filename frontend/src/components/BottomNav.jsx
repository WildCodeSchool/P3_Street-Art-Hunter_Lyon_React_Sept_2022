import React, { useState } from "react";

export default function BottomNav() {
  const [isActive, setIsActive] = useState("");
  return (
    <footer className="bottom-0 fixed w-full flex flex-wrap bg-bottom">
      <div className="w-full h-[177px] bg-bottomNavGrad bg-cover flex items-end justify-around">
        {isActive === "scores" ? (
          <button
            type="button"
            className=" from-lightblue bg-gradient-to-br to-pink h-[48px] w-[93px] min-w-fit px-2 rounded-3xl text-black text-3xl font-main-font mb-4"
          >
            SCORES
          </button>
        ) : (
          <div className=" from-lightblue bg-gradient-to-br to-pink h-[48px] w-[93px] min-w-fit rounded-3xl mb-4 p-[2px]">
            <button
              type="button"
              className=" bg-bottomdark  h-full w-full min-w-fit px-2 rounded-3xl text-white text-3xl font-main-font mb-4"
              onClick={() => {
                setIsActive("scores");
              }}
            >
              SCORES
            </button>
          </div>
        )}
        {isActive === "gallerie" ? (
          <button
            type="button"
            className=" from-lightblue bg-gradient-to-br to-pink h-[48px] w-[93px] min-w-fit px-2 rounded-3xl text-black text-3xl font-main-font mb-4"
          >
            GALLERIE
          </button>
        ) : (
          <div className=" from-lightblue bg-gradient-to-br to-pink h-[48px] w-[93px] min-w-fit rounded-3xl mb-4 p-[2px]">
            <button
              type="button"
              className=" bg-bottomdark  h-full w-full min-w-fit px-2 rounded-3xl text-white text-3xl font-main-font mb-4"
              onClick={() => {
                setIsActive("gallerie");
              }}
            >
              GALLERIE
            </button>
          </div>
        )}
        {isActive === "map" ? (
          <button
            type="button"
            className=" from-lightblue bg-gradient-to-br to-pink h-[48px] w-[93px] min-w-fit px-2 rounded-3xl text-black text-3xl font-main-font mb-4"
          >
            MAP
          </button>
        ) : (
          <div className=" from-lightblue bg-gradient-to-br to-pink h-[48px] w-[93px] min-w-fit rounded-3xl mb-4 p-[2px]">
            <button
              type="button"
              className=" bg-bottomdark  h-full w-full min-w-fit px-2 rounded-3xl text-white text-3xl font-main-font mb-4"
              onClick={() => {
                setIsActive("map");
              }}
            >
              MAP
            </button>
          </div>
        )}
      </div>
    </footer>
  );
}
/* Base */
