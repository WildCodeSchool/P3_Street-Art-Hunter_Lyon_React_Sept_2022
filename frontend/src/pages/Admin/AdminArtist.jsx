import React from "react";
import LateralMenu from "../../components/LateralMenu";
import HeaderAdmin from "../../components/HeaderAdmin";
import AdminArtistList from "../../components/AdminArtistList";

function AdminArtist() {
  const nav = "/AdminArtWork";
  return (
    <div className="flex h-screen w-full">
      <LateralMenu />
      <div className="flex flex-col w-full">
        <HeaderAdmin nav={nav} />
        <AdminArtistList />
      </div>
    </div>
  );
}

export default AdminArtist;
