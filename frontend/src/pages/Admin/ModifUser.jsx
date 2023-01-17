import React from "react";

import LateralMenu from "../../components/Admin/Global/LateralMenu";
import HeaderAdmin from "../../components/Admin/Global/HeaderAdmin";
import UserModif from "../../components/Admin/ModifUser/UserModif";

function ModifUser() {
  const nav = "/ Utilisateurs / Modification utilisateur";

  return (
    <div className="flex h-screen w-full">
      <LateralMenu />
      <div className="flex flex-col w-full">
        <HeaderAdmin nav={nav} />
        <UserModif />
      </div>
    </div>
  );
}

export default ModifUser;
