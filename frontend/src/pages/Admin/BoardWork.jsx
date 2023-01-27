import React from "react";
import LateralMenu from "../../components/Admin/Global/LateralMenu";
import HeaderAdmin from "../../components/Admin/Global/HeaderAdmin";
import BoardValidation from "../../components/Admin/Dashboard/BoardValidation";

function BoardWork() {
  const nav = "/ Dashboard / Oeuvres";
  return (
    <div className="flex h-screen w-full">
      <LateralMenu />
      <div className="flex flex-col w-full">
        <HeaderAdmin nav={nav} />
        <BoardValidation />
      </div>
    </div>
  );
}

export default BoardWork;
