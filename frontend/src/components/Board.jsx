import React from "react";
import ArtDashContainer from "./ArtDashContainer";
import UserDashContainer from "./UserDashContainer";

function Board() {
  return (
    <div className="bg-[#f6f6f6] h-screen flex justify-around flex-wrap items-center pl-20 pr-20">
      <ArtDashContainer />
      <UserDashContainer />
      <ArtDashContainer />
      <ArtDashContainer />
      <ArtDashContainer />
      <ArtDashContainer />
      <ArtDashContainer />
      <ArtDashContainer />
    </div>
  );
}

export default Board;
