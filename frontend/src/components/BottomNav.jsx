import React, { useState } from "react";
import camera from "@assets/cameraIcon.png";

export default function BottomNav() {
  const [isActive, setIsActive] = useState("");
  return (
    <footer className="bottom-0 fixed w-full bg-bottom">
      <div className="flex justify-center">
        <button
          type="button"
          className="relative top-[4.5rem] drop-shadow-photobutton"
        >
          <div className="bg-gradient-to-b from-[#6573ED] to-[#14D2E6] rounded-[100%]  w-20  h-20 p-[0.6rem]">
            <div className="w-full h-full rounded-[100%] bg-gradient-to-b from-bottomdark to-[#454377] flex justify-center items-center">
              <img src={camera} alt="Camera Icon" className="" />
            </div>
          </div>
        </button>
      </div>
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
