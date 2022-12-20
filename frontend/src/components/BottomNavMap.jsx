import React from "react";
import { NavLink } from "react-router-dom";
import camera from "@assets/cameraIcon.png";
import art from "@assets/artIcon.png";
import shop from "@assets/shopIcon.png";
import SwitchButtonNav from "./SwitchButtonNav";

export default function BottomNavMap() {
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
        <NavLink to="/scores">
          <SwitchButtonNav
            content="SCORES"
            styleModif="mb-4 w-[100px] text-3xl"
            bgColor="bg-bottomdark"
          />
        </NavLink>
        <NavLink to="/galerie">
          <SwitchButtonNav
            content="GALERIE"
            styleModif="mb-4 w-[100px] text-3xl"
            bgColor="bg-bottomdark"
          />
        </NavLink>
        <NavLink to="/map">
          <SwitchButtonNav
            content="MAP"
            styleModif="mb-4 w-[100px] text-3xl"
            bgColor="bg-bottomdark"
          />
        </NavLink>
      </div>
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
    </footer>
  );
}
/* Base */
