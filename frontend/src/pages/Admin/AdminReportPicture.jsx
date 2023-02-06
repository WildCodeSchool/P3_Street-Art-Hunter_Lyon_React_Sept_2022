import React from "react";

import PictureModif from "@components/Admin/Dashboard/PictureModif";

import LateralMenu from "../../components/Admin/Global/LateralMenu";
import HeaderAdmin from "../../components/Admin/Global/HeaderAdmin";

function AdminReportPicture() {
  const nav = "/ Oeuvres / Validation";
  return (
    <div className="flex h-screen w-full">
      <LateralMenu />
      <div className="flex flex-col w-full overflow-auto">
        <HeaderAdmin nav={nav} />
        <div className="pl-[25rem] w-[96%]">
          <PictureModif />
        </div>
      </div>
    </div>
  );
}

export default AdminReportPicture;
