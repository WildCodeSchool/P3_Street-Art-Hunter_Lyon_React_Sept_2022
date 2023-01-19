import React from "react";

import LateralMenu from "../../components/Admin/Global/LateralMenu";
import HeaderAdmin from "../../components/Admin/Global/HeaderAdmin";
import UserModif from "../../components/Admin/ModifUser/UserModif";
import PicturesUser from "../../components/Admin/ModifUser/PicturesUser";

function ModifUser() {
  const nav = "/ Utilisateurs / Modification utilisateur";

  return (
    <div className="flex h-screen w-full">
      <LateralMenu />
      <div className="flex flex-col w-full overflow-auto">
        <HeaderAdmin nav={nav} />
        <UserModif />
        <PicturesUser />
      </div>
    </div>
  );
}

export default ModifUser;
