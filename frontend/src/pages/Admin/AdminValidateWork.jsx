import React from "react";

import LateralMenu from "../../components/Admin/Global/LateralMenu";
import HeaderAdmin from "../../components/Admin/Global/HeaderAdmin";
import WorkModif from "../../components/Admin/Dashboard/WorkModif";

function AdminValidateWork() {
  const nav = "/ Oeuvres / Validation";
  return (
    <div className="flex h-screen w-full">
      <LateralMenu />
      <div className="flex flex-col w-full overflow-auto">
        <HeaderAdmin nav={nav} />
        <div className="pl-[25rem] w-[96%]">
          <WorkModif />
        </div>
      </div>
    </div>
  );
}

export default AdminValidateWork;
