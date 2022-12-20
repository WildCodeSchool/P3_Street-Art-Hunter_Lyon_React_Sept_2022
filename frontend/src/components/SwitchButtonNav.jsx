import React from "react";

export default function SwitchButtonNav({ content, styleModif, bgColor }) {
  return (
    <div>
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
    </div>
  );
}
