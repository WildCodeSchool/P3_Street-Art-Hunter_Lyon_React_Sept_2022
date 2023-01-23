import React from "react";
import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import UserCardContainer from "../../components/Global/Cards/UserCardContainer";
import { useCurrentUserContext } from "../../contexts/userContext";
import Menu from "./Menu";

function Favoris() {
  const { open } = useCurrentUserContext();
  return (
    <div>
      {!open ? (
        <div className="bg-main-background bg-cover w-full h-screen">
          <HeaderWithBurger />
          <div className="h-[3.5rem] pt-3 font-main-font w-screen flex justify-center text-white items-center text-3xl mt-20 mb-4">
            TES COUPS DE COEUR
          </div>
          <div className="flex justify-around flex-wrap overflow-auto h-[70vh]">
            <UserCardContainer />
            <UserCardContainer />
            <UserCardContainer />
            <UserCardContainer />
            <UserCardContainer />
            <UserCardContainer />
            <UserCardContainer />
            <UserCardContainer />
          </div>
        </div>
      ) : (
        <Menu />
      )}
    </div>
  );
}

export default Favoris;
