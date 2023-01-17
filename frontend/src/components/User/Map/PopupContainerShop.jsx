import React from "react";
import ShopTitleCard from "../../Global/Cards/ShopTitleCard";
import ImageCardShopPopup from "../../Global/Cards/ImageCardShopPopup";
import BottomCardPopup from "../../Global/Cards/BottomCardPopup";

function PopupContainerShop() {
  return (
    <div className="bg-white w-[25vw] h-[20vh] rounded-lg shadow-2xl shadow-[pink] mb-4">
      <ShopTitleCard />
      <ImageCardShopPopup />
      <BottomCardPopup />
    </div>
  );
}

export default PopupContainerShop;
