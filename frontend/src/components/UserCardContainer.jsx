import React from "react";
import UserTitleCard from "./UserTitleCard";
import ImageCardUser from "./ImageCardUser";
import BottomCardShop from "./BottomCardShop";

function UserCardContainer() {
  return (
    <div className="bg-white w-[45%] h-[26vh] rounded-lg shadow-2xl shadow-[pink] mb-4">
      <UserTitleCard />
      <ImageCardUser />
      <BottomCardShop />
    </div>
  );
}

export default UserCardContainer;
