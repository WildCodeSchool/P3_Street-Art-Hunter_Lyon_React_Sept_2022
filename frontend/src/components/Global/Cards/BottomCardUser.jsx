import React from "react";

function BottomCardUser() {
  return (
    <div className="flex justify-between items-center m-1">
      <div className="flex flex-start items-center">
        <h2 className="font-main-font m-1 text-sm text-black">Il y a 5 min</h2>
      </div>
      <div className="flex flex-row justify-end items-center">
        <p className="font-main-font text-sm m-1 text-black">City</p>
        <div className="bg-localisation w-[5vw] h-[2vh] bg-contain" />
      </div>
    </div>
  );
}

export default BottomCardUser;
