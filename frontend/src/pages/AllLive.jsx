import React from "react";
import Header from "@components/Header";
import ArtistCardContainer from "@components/ArtistCardContainer";
import UserCardContainer from "@components/UserCardContainer";
import ShopCardContainer from "@components/ShopCardContainer";

function AllLive() {
  return (
    <div className="bg-main-background bg-cover w-full h-screen">
      <Header />
      <div className="flex justify-around flex-wrap overflow-auto h-[60vh]">
        <ArtistCardContainer />
        <UserCardContainer />
        <ShopCardContainer />
        <ArtistCardContainer />
        <ArtistCardContainer />
        <UserCardContainer />
        <ShopCardContainer />
        <ArtistCardContainer />
      </div>
    </div>
  );
}

export default AllLive;
