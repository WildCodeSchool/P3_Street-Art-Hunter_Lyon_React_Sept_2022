import React, { useState } from "react";
// eslint-disable-next-line import/no-unresolved
import art from "@assets/artIcon.png";
// eslint-disable-next-line import/no-unresolved
import shop from "@assets/shopIcon.png";
// eslint-disable-next-line import/no-unresolved
import camera from "../assets/cameraIcon.png";

export default function BottomNav() {
  const [isActive, setIsActive] = useState("");
  return (
    <footer className="bottom-0 fixed w-full bg-bottom">
      <div className="flex justify-center">
        <button
          type="button"
          className="relative z-10 top-[4.5rem] drop-shadow-photobutton"
        >
          <div className="bg-gradient-to-b from-[#6573ED] to-[#14D2E6] rounded-[100%]  w-20  h-20 p-[0.4rem]">
            <div className="w-full h-full rounded-[100%] bg-gradient-to-b from-bottomdark to-[#454377] flex justify-center items-center">
              <img src={camera} alt="Camera Icon" className="" />
            </div>
          </div>
        </button>
      </div>
      <div className="w-full h-[177px] bg-bottomNavGrad drop-shadow-bottomtop bg-cover flex items-end justify-around">
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
      {isActive === "map" ? (
        <div>
          <button type="button" className=" absolute left-8 top-28">
            <div className="bg-gradient-to-b from-pink to-lightblue rounded-[100%]  w-[3.6rem]  h-[3.6rem] p-[0.2rem]">
              <div className="w-full h-full rounded-[100%] bg-gradient-to-b from-bottomdark to-[#454377] flex justify-center items-center">
                <img src={art} alt="Art Icon" className="" />
              </div>
            </div>
          </button>
          <button type="button" className="  absolute right-8 top-28">
            <div className="bg-gradient-to-b from-pink to-lightblue rounded-[100%]  w-[3.6rem]  h-[3.6rem] p-[0.2rem]">
              <div className="w-full h-full rounded-[100%] bg-gradient-to-b from-bottomdark to-[#454377] flex justify-center items-center">
                <img src={shop} alt="Shop Icon" className="" />
              </div>
            </div>
          </button>
        </div>
      ) : (
        ""
      )}
    </footer>
  );
}
/* Base */
