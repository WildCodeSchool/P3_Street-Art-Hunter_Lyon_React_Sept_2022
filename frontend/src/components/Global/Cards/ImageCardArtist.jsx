import React from "react";

function ImageCardArtist({ work }) {
  return (
    <div className="flex justify-center">
      <img
        src={work.picture_url}
        className="w-[100%] h-[17vh] object-cover"
        alt=""
      />
    </div>
  );
}

export default ImageCardArtist;
