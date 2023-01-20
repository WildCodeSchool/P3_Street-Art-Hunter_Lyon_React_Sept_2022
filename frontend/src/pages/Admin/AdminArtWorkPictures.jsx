import React from "react";
import LateralMenu from "../../components/Admin/Global/LateralMenu";
import HeaderAdmin from "../../components/Admin/Global/HeaderAdmin";
import ArtworkPict from "../../components/Admin/ArtWork/ArtWorkPict";

function ArtWorkPictures() {
  const nav = "/Admin-Artwork";
  return (
    <div className="flex h-screen w-full">
      <LateralMenu />
      <div className="flex flex-col w-full">
        <HeaderAdmin nav={nav} />
        <ArtworkPict />
      </div>
    </div>
  );
}

export default ArtWorkPictures;
