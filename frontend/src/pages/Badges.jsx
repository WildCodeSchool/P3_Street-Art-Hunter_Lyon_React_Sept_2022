import BadgeContainer from "@components/BadgeContainer";
import HeaderWithBurger from "@components/HeaderWithBurger";
import React from "react";
import BottomNav from "@components/BottomNav";
import { useCurrentUserContext } from "../contexts/userContext";
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
