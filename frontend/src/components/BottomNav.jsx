import React from "react";

export default function BottomNav() {
  return (
    <footer className="bottom-0 fixed w-full flex flex-wrap bg-bottom">
      <div className="w-full h-[177px] bg-bottomNavGrad bg-cover">
        <button
          type="button"
          className=" from-lightblue bg-gradient-to-r to-pink h-[48px] w-[93px] rounded-3xl text-black text-xl"
        >
          SCORES
        </button>
      </div>
    </footer>
  );
}
/* Base */
