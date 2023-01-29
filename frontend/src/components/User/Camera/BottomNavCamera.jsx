import React from "react";
import { NavLink } from "react-router-dom";
import SwitchButtonNav from "../Global/SwitchButtonNav";
import { useCurrentResponsiveContext } from "../../../contexts/responsiveContext";

function BottomNavCamera({ capture }) {
  const { isMobile, isTablet, isLittleMobile } = useCurrentResponsiveContext();
  return (
    <div>
      {(isMobile || isLittleMobile) && (
        <footer className="bottom-0 fixed w-full bg-bottom z-50">
          <div className="flex justify-center">
            <button
              type="button"
              className="relative z-10 top-[4.5rem] drop-shadow-photobutton"
              onClick={capture}
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
              className="relative z-10 top-[7.5rem] drop-shadow-photobutton"
              onClick={capture}
            >
              <div className="bg-gradient-to-b from-[#6573ED] to-[#14D2E6] rounded-[100%]  w-[100px]  h-[100px] p-[0.4rem]">
                <div className="w-full h-full rounded-[100%] bg-gradient-to-b from-bottomdark to-[#454377] flex justify-center items-center" />
              </div>
            </button>
          </div>
          <div className="w-full h-[240px] bg-bottomNavGrad drop-shadow-bottomtop bg-cover flex items-end justify-around">
            <NavLink to="/scores">
              <SwitchButtonNav
                content="SCORES"
                styleModif="mb-4 w-[100px] text-4xl"
                bgColor="bg-bottomdark"
              />
            </NavLink>
            <NavLink to="/galerie/live">
              <SwitchButtonNav
                content="GALERIE"
                styleModif="mb-4 w-[100px] text-4xl"
                bgColor="bg-bottomdark"
              />
            </NavLink>
            <NavLink to="/map">
              <SwitchButtonNav
                content="MAP"
                styleModif="mb-4 w-[100px] text-4xl"
                bgColor="bg-bottomdark"
              />
            </NavLink>
          </div>
        </footer>
      )}
    </div>
  );
}

export default BottomNavCamera;
