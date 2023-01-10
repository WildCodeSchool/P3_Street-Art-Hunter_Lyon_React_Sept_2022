import React from "react";
import Allive from "@components/AllLive";
import BottomNav from "@components/BottomNav";
import Filters from "@components/Filters";
import HeaderWithBurger from "@components/HeaderWithBurger";
import ArtistCardContainer from "@components/ArtistCardContainer";
import { useCurrentUserContext } from "../contexts/userContext";
import Menu from "./Menu";

export default function Galerie({ allOrLive }) {
  const { open } = useCurrentUserContext();
  return (
    <div>
      {!open ? (
        <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
          <HeaderWithBurger />
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
      ) : (
        <div className="bg-main-background backdrop-blur-md text-white font-main-font bg-cover w-full h-screen">
          <Menu />
        </div>
      )}
    </div>
  );
}
