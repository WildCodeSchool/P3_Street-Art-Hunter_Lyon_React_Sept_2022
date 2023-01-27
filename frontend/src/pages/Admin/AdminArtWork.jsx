import React from "react";
import LateralMenu from "../../components/Admin/Global/LateralMenu";
import HeaderAdmin from "../../components/Admin/Global/HeaderAdmin";
import Board from "../../components/Admin/Dashboard/Board";

function AdminArtWork() {
  const nav = "/AdminArtWork";
  return (
    <div className="flex h-screen w-full">
      <LateralMenu />
      <div className="flex flex-col w-full">
        <HeaderAdmin nav={nav} />
        <div>
          <Board />
        </div>
      </div>
    </div>
  );
}

export default AdminArtWork;
