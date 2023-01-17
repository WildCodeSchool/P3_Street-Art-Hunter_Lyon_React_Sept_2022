import React from "react";
import shop1 from "../../../assets/Shop1.jpg";

function ImageCardShop() {
  return (
    <div className="flex justify-center">
      <img src={shop1} className="w-[100%] h-[17vh] object-cover" alt="" />
    </div>
  );
}

export default ImageCardShop;
