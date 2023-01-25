import React from "react";

function ArtistTitleCard({ work }) {
  return (
    <div className="flex justify-center items-center ">
      <h2 className="font-main-font mb-2 pt-1 text-black">{work.work_name}</h2>
    </div>
  );
}

export default ArtistTitleCard;
