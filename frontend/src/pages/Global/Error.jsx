import React from "react";
import { NavLink } from "react-router-dom";
import { useCurrentResponsiveContext } from "../../contexts/responsiveContext";

export default function Error() {
  const { isDesktop, isMobile, isTablet, isLittleMobile } =
    useCurrentResponsiveContext();
  return (
    <div>
      {isMobile && (
        <div className="bg-center bg-home-image bg-cover w-full h-screen flex flex-wrap items-end justify-center">
          <div className="text-8xl pt-64 font-main-font text-center flicker-3 bg-clip-text text-transparent bg-gradient-to-r from-lightblue to-pink">
            {" "}
            ERROR <br /> 404{" "}
          </div>
          <div className="typewriter mb-12 w-80 h-60 backdrop-blur-sm bg-black/10 rounded-[3rem] flex flex-col justify-center items-center font-main-font text-2xl text-white animate-type">
            <div className=""> Il n'y a rien ici.</div>
            <NavLink to="/" className="bg-logo-home h-36 w-36 bg-cover" />
          </div>
        </div>
      )}
      {isTablet && (
        <div className="bg-center bg-desk-background bg-cover w-full h-screen flex flex-col items-center justify-center">
          <div className="text-[8rem] font-main-font text-center flicker-3 bg-clip-text text-transparent bg-gradient-to-r from-lightblue to-pink">
            {" "}
            ERROR <br /> 404{" "}
          </div>
          <div className="typewriter w-[80%] h-[50vh] backdrop-blur-sm bg-black/10 rounded-[3rem] flex flex-col justify-center items-center font-main-font text-2xl text-white animate-type">
            <div className="text-5xl"> Il n'y a rien ici.</div>
            <NavLink
              to="/"
              className="flicker-3 bg-center bg-logo-home h-[30vh] w-[40%] bg-contain bg-no-repeat"
            />
          </div>
        </div>
      )}
      {isLittleMobile && (
        <div className="bg-center bg-home-image bg-cover w-full h-screen flex flex-wrap items-end justify-center">
          <div className=" text-8xl pt-44 font-main-font text-center flicker-3 bg-clip-text text-transparent bg-gradient-to-r from-lightblue to-pink">
            {" "}
            ERROR <br /> 404{" "}
          </div>
          <div className="typewriter mb-12 w-80 h-60 backdrop-blur-sm bg-black/10 rounded-[3rem] flex flex-col justify-center items-center font-main-font text-2xl text-white animate-type">
            <div className=""> Il n'y a rien ici.</div>
            <NavLink
              to="/"
              className="bg-center bg-no-repeat bg-logo-home h-36 w-36 bg-cover"
            />
          </div>
        </div>
      )}

      {isDesktop && (
        <div className="bg-center bg-desk-background bg-cover w-full h-screen flex flex-col items-center justify-center">
          <div className="text-[8rem] font-main-font text-center flicker-3 bg-clip-text text-transparent bg-gradient-to-r from-lightblue to-pink">
            {" "}
            ERROR <br /> 404{" "}
          </div>
          <div className="typewriter w-[40%] h-[50vh] backdrop-blur-sm bg-black/10 rounded-[3rem] flex flex-col justify-center items-center font-main-font text-2xl text-white animate-type">
            <div className="text-5xl"> Il n'y a rien ici.</div>
            <NavLink
              to="/"
              className="flicker-3 bg-center bg-logo-home h-[20vh] w-[100%] bg-contain bg-no-repeat"
            />
          </div>
        </div>
      )}
    </div>
  );
}
