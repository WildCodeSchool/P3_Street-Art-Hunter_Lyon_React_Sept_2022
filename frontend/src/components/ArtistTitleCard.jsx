import React from "react";
import Daryl from "../assets/Daryl.png";

function ArtistTitleCard(props) {
  const { artists } = props;

  return (
    <div className="flex justify-between items-center bg-[#F8F8F8] h-[4rem] rounded-t-lg">
      <div className="flex justify-start items-center">
        <img
          src={Daryl}
          alt="Avatar"
          className="h-[2rem] w-[2rem] border-white rounded-full m-1"
        />
        <h2>{artists}</h2>
      </div>
    </div>
  );
}

export default ArtistTitleCard;
