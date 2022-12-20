import React from "react";
import Allive from "@components/AllLive";
import BottomNav from "@components/BottomNav";
import Filters from "@components/Filters";
import Header from "@components/Header";
import ArtistCardContainer from "@components/ArtistCardContainer";

export default function Galerie({ allOrLive }) {
  return (
    <div className="bg-main-background bg-fixed text-white font-main-font bg-cover w-full h-screen">
      <Header />
      <Allive />
      <Filters allOrLive={allOrLive} />
      <div className="flex flex-wrap justify-around">
        <ArtistCardContainer />
        <ArtistCardContainer />
        <ArtistCardContainer />
        <ArtistCardContainer />
        <ArtistCardContainer />
        <ArtistCardContainer />
        <ArtistCardContainer />
        <ArtistCardContainer />
      </div>

      <BottomNav />
    </div>
  );
}
