import React from "react";
import LateralMenu from "../../components/LateralMenu";
import HeaderAdmin from "../../components/HeaderAdmin";
import Board from "../../components/Board";

function Dashboard() {
  const nav = "/ Dashboard";
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

export default Dashboard;
