import React, { useState } from "react";
// eslint-disable-next-line import/no-unresolved
import art from "@assets/artIcon.png";
// eslint-disable-next-line import/no-unresolved
import shop from "@assets/shopIcon.png";
// eslint-disable-next-line import/no-unresolved
import camera from "../assets/cameraIcon.png";
import SwitchButton from "./SwitchButton";

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
        <SwitchButton
          isActive={isActive}
          setIsActive={setIsActive}
          content="SCORES"
          styleModif="mb-4 w-[100px] text-3xl"
          bgColor="bg-bottomdark"
        />
        <SwitchButton
          isActive={isActive}
          setIsActive={setIsActive}
          content="GALERIE"
          styleModif="mb-4 w-[100px] text-3xl"
          bgColor="bg-bottomdark"
        />
        <SwitchButton
          isActive={isActive}
          setIsActive={setIsActive}
          content="MAP"
          styleModif="mb-4 w-[100px] text-3xl"
          bgColor="bg-bottomdark"
        />
      </div>
      {isActive === "MAP" ? (
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
