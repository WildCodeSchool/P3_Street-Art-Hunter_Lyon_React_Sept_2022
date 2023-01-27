import React from "react";
import UserTitleCard from "./UserTitleCard";
import ImageCardUser from "./ImageCardUser";
import BottomCardFavorite from "./BottomCardFavorite";

function FavoriteCard({ picture }) {
  return (
    <div className="bg-white w-[45%] h-[26vh] rounded-lg shadow-2xl shadow-[pink] mb-4">
      <UserTitleCard picture={picture} />
      <ImageCardUser picture={picture} />
      <BottomCardFavorite picture={picture} />
    </div>
  );
}

export default FavoriteCard;
