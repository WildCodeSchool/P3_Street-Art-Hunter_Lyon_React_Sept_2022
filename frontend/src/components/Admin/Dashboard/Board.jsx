import React from "react";
import Validation from "./Validation";
import Works from "./Works";
import Users from "./Users";
import ReportedPictures from "./ReportedPictures";

function Board() {
  return (
    <div className="w-full h-screen flex justify-around items-center mt-20">
      <Validation />
      <ReportedPictures />
      <Works />
      <Users />
    </div>
  );
}

export default Board;
