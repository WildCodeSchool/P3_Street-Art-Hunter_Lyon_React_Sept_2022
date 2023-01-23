import React from "react";
import shop from "../../../assets/shopIcon.svg";

function ShopTitleCard() {
  return (
    <div className="flex justify-start items-center">
      <img
        src={shop}
        alt="Avatar"
        className="h-[1.5rem] w-[1.5rem] border-white  m-1"
      />
      <h2 className="font-main-font m-1 text-black">Street Shop</h2>
    </div>
  );
}

export default ShopTitleCard;
