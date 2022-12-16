/* eslint-disable react/prop-types */
import React from "react";
import Trophy from "@assets/trophy.png";
import Next from "@assets/next.png";

export default function AddScore({ getPoints, setGetPoints }) {
  // nécessite un state en props
  return (
    <div
      className={`bg-white z-10 w-screen h-[40vh] rounded-t-[15%] flex flex-col items-center justify-around overflow-hidden ${
        getPoints
          ? "fixed bottom-0 translate-y-0 ease-in-out duration-100"
          : "fixed bottom-0 translate-y-full ease-in-out duration-100"
      }`}
    >
      <img src={Trophy} alt="Trophy Icon" className="mt-8" />
      <div className="text-4xl font-main-font "> +20 Points</div>
      <button type="button" onClick={() => setGetPoints(false)}>
        <img src={Next} alt="Next icon" />
      </button>
    </div>
  );
}
