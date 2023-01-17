import React from "react";
import LateralMenu from "../../components/LateralMenu";
import HeaderAdmin from "../../components/HeaderAdmin";
import Board from "../../components/Board";

function AdminArtWork() {
  const nav = "/AdminArtWork";
  return (
    <div className="flex h-screen w-full">
      <LateralMenu />
      <div className="flex flex-col w-full">
        <HeaderAdmin nav={nav} />
        <Board />
      </div>
    </div>
  );
}

export default AdminArtWork;
