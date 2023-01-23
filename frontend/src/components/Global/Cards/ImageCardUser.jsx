/* eslint-disable import/no-relative-packages */
import React from "react";
import imgPic from "../../../../../backend/public/uploads/userId-3-workId-1.jpeg";

function ImageCardUser() {
  return (
    <div className="flex justify-center">
      <img src={imgPic} className="w-[100%] h-[17vh] object-cover" alt="" />
    </div>
  );
}

export default ImageCardUser;
