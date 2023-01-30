import React from "react";
import { useCurrentResponsiveContext } from "../../../contexts/responsiveContext";

export default function SwitchButtonNav({ content, styleModif, bgColor }) {
  const { isMobile, isTablet, isLittleMobile } = useCurrentResponsiveContext();
  return (
    <div className="flex justify-center">
      {(isMobile || isLittleMobile) && (
        <div
          className={` from-lightblue bg-gradient-to-br to-pink h-[48px] min-w-fit p-[2px] rounded-3xl text-black font-main-font ${styleModif}`}
        >
          <button
            type="button"
            className={`${bgColor}  h-full w-full min-w-fit px-2 rounded-3xl text-white font-main-font ${styleModif}`}
          >
            {content}
          </button>{" "}
        </div>
      )}

      {isTablet && (
        <div
          className={` from-lightblue bg-gradient-to-br to-pink h-[60px] min-w-fit p-[2px] rounded-3xl text-black font-main-font ${styleModif}`}
        >
          <button
            type="button"
            className={`${bgColor}  h-full w-[140px] px-4 rounded-3xl text-white font-main-font ${styleModif}`}
          >
            {content}
          </button>{" "}
        </div>
      )}
    </div>
  );
}
