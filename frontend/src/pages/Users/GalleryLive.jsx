import React from "react";
import Allive from "../../components/User/Gallery/AllLive";
import BottomNav from "../../components/User/Global/BottomNav";

import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import UserCardContainer from "../../components/Global/Cards/UserCardContainer";
import ShopCardContainer from "../../components/Global/Cards/ShopCardContainer";
import { useCurrentUserContext } from "../../contexts/userContext";
import Menu from "./Menu";

export default function GalleryLive() {
  const { open } = useCurrentUserContext();
  return (
    <div>
      {!open ? (
        <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
          <HeaderWithBurger />
          <div className="mb-4">
            <Allive />
          </div>

          <div className="flex flex-wrap justify-around">
            <UserCardContainer />
            <ShopCardContainer />
            <ShopCardContainer />
            <UserCardContainer />
            <UserCardContainer />
            <UserCardContainer />
            <UserCardContainer />
            <UserCardContainer />
            <UserCardContainer />
            <UserCardContainer />
          </div>

          <BottomNav />
        </div>
      ) : (
        <Menu />
      )}
    </div>
  );
}
