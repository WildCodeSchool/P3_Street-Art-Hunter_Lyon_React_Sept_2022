import React from "react";
import ArtistTitleCard from "../../Global/Cards/ArtistTitleCard";
import ImageCardArtistPopup from "./ImageCardArtistPopup";
import BottomCardPopup from "../../Global/Cards/BottomCardPopup";

function PopupContainerArt() {
  return (
    <div className="bg-white w-[25vw] h-[20vh] rounded-lg shadow-2xl shadow-[pink] mb-4">
      <ArtistTitleCard />
      <ImageCardArtistPopup />
      <BottomCardPopup />
    </div>
  );
}

export default PopupContainerArt;
