import React from "react";
import ShopTitleCard from "./ShopTitleCard";
import ImageCardShop from "./ImageCardShop";
import BottomCardUser from "./BottomCardUser";

function ShopCardContainer() {
  return (
    <div className="bg-white w-[45%] h-[26vh] rounded-lg shadow-2xl shadow-[pink] mb-4">
      <ShopTitleCard />
      <ImageCardShop />
      <BottomCardUser />
    </div>
  );
}

export default ShopCardContainer;
