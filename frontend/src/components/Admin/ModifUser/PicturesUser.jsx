import React from "react";
import ArtDashContainer from "../Global/ArtDashContainer";

function PicturesUser() {
  return (
    <div className="mt-8 flex flex-col justify-center items-center">
      <h2 className="font-main-font text-5xl mb-8">Pictures</h2>
      <div className="w-full flex justify-around items-center flex-wrap mb-8">
        <ArtDashContainer />
        <ArtDashContainer />
        <ArtDashContainer />
        <ArtDashContainer />
        <ArtDashContainer />
        <ArtDashContainer />
        <ArtDashContainer />
        <ArtDashContainer />
      </div>
    </div>
  );
}

export default PicturesUser;
