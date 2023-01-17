import React from "react";
import Daryl from "../../../assets/Daryl.png";

function UserTitleCard() {
  return (
    <div className="flex justify-start items-center">
      <img
        src={Daryl}
        alt="Avatar"
        className="h-[2rem] w-[2rem] border-white rounded-full m-1"
      />
      <h2 className="font-main-font m-1 text-black">MyPseudo</h2>
    </div>
  );
}

export default UserTitleCard;
