import React from "react";
import BadgeContainer from "../../components/User/Badges/BadgeContainer";
import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import BottomNav from "../../components/User/Global/BottomNav";
import { useCurrentUserContext } from "../../contexts/userContext";
import Menu from "./Menu";

export default function Badges() {
  const { open } = useCurrentUserContext();
  return (
    <div>
      {!open ? (
        <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen flex flex-col items-center">
          <div className="w-screen">
            <HeaderWithBurger />
          </div>
          <BadgeContainer />
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
