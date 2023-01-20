/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import check from "@assets/check.svg";
// eslint-disable-next-line import/no-unresolved
import cross from "@assets/cross.svg";
import SwitchButtonNav from "../Global/SwitchButtonNav";

function BottomNavCamActive({ setPhoto, setValidation }) {
  const handleCross = () => {
    setPhoto(false);
    setValidation(false);
  };
  return (
    <footer className="bottom-0 fixed w-full bg-bottom">
      <div className="flex justify-center">
        <button
          type="button"
          className="relative z-10 top-[4.5rem] drop-shadow-photobutton"
        >
          <div className="bg-gradient-to-b from-[#6573ED] to-[#14D2E6] rounded-[100%]  w-20  h-20 p-[0.4rem]">
            <div className="w-full h-full rounded-[100%] bg-gradient-to-b from-bottomdark to-[#454377] flex justify-center items-center" />
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
            <div
              className="w-full h-full rounded-[100%] bg-gradient-to-b from-bottomdark to-[#454377] flex justify-center items-center"
              onClick={handleCross}
            >
              <img src={cross} alt="Cross Icon" className="w-[40%]" />
            </div>
          </div>
        </button>
        <button type="button" className="  absolute right-8 top-28">
          <NavLink to="/validation">
            <div className="bg-gradient-to-b from-pink to-lightblue rounded-[100%]  w-[3.6rem]  h-[3.6rem] p-[0.2rem]">
              <div className="w-full h-full rounded-[100%] bg-gradient-to-b from-bottomdark to-[#454377] flex justify-center items-center">
                <img src={check} alt="Check Icon" className="w-[40%]" />
              </div>
            </div>
          </NavLink>
        </button>
      </div>
    </footer>
  );
}

export default BottomNavCamActive;
