/* eslint-disable import/no-relative-packages */
import React from "react";

function ImageCardUser({ picture }) {
  return (
    <div className="flex justify-center">
      <img
        src={picture.picture_url}
        className="w-[100%] h-[17vh] object-cover"
        alt=""
      />
    </div>
  );
}

export default ImageCardUser;
