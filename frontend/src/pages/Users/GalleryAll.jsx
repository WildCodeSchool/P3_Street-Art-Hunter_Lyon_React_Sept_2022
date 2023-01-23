import React from "react";
import Allive from "../../components/User/Gallery/AllLive";
import BottomNav from "../../components/User/Global/BottomNav";
import Filters from "../../components/User/Gallery/Filters";
import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import ArtistCardContainer from "../../components/Global/Cards/ArtistCardContainer";
import { useCurrentUserContext } from "../../contexts/userContext";
import Menu from "./Menu";

function GalleryAll({ allOrLive }) {
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
          </div>

          <BottomNav />
        </div>
      ) : (
        <Menu />
      )}
    </div>
  );
}

export default GalleryAll;
