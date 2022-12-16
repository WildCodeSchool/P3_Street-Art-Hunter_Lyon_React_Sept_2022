import React from "react";
import Trophy from "@assets/trophy.png";
import Next from "@assets/next.png";

export default function AddScore() {
  return (
    <div className="absolute bottom-0 bg-white w-screen h-2/6 rounded-t-[15%] flex flex-col items-center justify-around ">
      <img src={Trophy} alt="Trophy Icon" className="" />
      <div className="text-4xl font-main-font "> +20 Points</div>
      <img src={Next} alt="Next icon" />
    </div>
  );
}
