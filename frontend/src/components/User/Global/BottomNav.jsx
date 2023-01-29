import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import camera from "../../../assets/cameraIcon.svg";
import SwitchButtonNav from "./SwitchButtonNav";
import { useCurrentResponsiveContext } from "../../../contexts/responsiveContext";

export default function BottomNav() {
  const { isMobile, isTablet, isLittleMobile } = useCurrentResponsiveContext();
  const navigate = useNavigate();
  return (
    <div>
      {(isMobile || isLittleMobile) && (
        <footer className="bottom-0 fixed w-full bg-bottom z-50">
          <div className="flex justify-center">
            <button
              type="button"
              className="relative z-10 top-[4.5rem] drop-shadow-photobutton"
              onClick={() => navigate("/camera")}
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
            <NavLink to="/galerie/live">
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
        </footer>
      )}
      {isTablet && (
        <footer className="bottom-0 fixed w-full bg-bottom z-50">
          <div className="flex justify-center">
            <button
              type="button"
              className="relative z-10 top-[8.5rem] drop-shadow-photobutton"
              onClick={() => navigate("/camera")}
            >
              <div className="bg-gradient-to-b from-[#6573ED] to-[#14D2E6] rounded-[100%]  w-[100px]  h-[100px] p-[0.4rem]">
                <div className="w-full h-full rounded-[100%] bg-gradient-to-b from-bottomdark to-[#454377] flex justify-center items-center">
                  <img src={camera} alt="Camera Icon" className="" />
                </div>
              </div>
            </button>
          </div>
          <div className="w-full h-[240px] bg-bottomNavGrad drop-shadow-bottomtop bg-cover flex items-end justify-around">
            <NavLink to="/scores">
              <SwitchButtonNav
                content="SCORES"
                styleModif="mb-4 w-[100px] text-3xl"
                bgColor="bg-bottomdark"
              />
            </NavLink>
            <NavLink to="/galerie/live">
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
        </footer>
      )}
    </div>
  );
}
/* Base */
