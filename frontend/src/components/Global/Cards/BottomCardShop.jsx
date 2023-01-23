import React from "react";

function BottomCardShop({ picture }) {
  const hours = picture.creation_date.slice(0, 10);

  return (
    <div className="flex justify-around items-center m-1">
      <p className="font-main-font m-1 text-sm text-black">Lyon</p>

      <div className="bg-localisation w-[10%] h-[2vh] bg-cover m-1" />
      <p className="font-main-font m-1 text-sm text-black">{hours}</p>
    </div>
  );
}

export default BottomCardShop;
