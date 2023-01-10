import React from "react";
import Allive from "@components/AllLive";
import BottomNav from "@components/BottomNav";
import Filters from "@components/Filters";
import Header from "@components/Header";
import ArtistCardContainer from "@components/ArtistCardContainer";

function Galerie({ allOrLive }) {
  return (
    <div>
      <Header />
      <Allive />
      <Filters allOrLive={allOrLive} />
      <ArtistCardContainer />
      <BottomNav />
    </div>
  );
}

export default Galerie;
