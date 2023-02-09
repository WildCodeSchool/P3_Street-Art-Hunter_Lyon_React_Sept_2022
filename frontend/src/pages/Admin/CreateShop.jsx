import React from "react";
import LateralMenu from "../../components/Admin/Global/LateralMenu";
import HeaderAdmin from "../../components/Admin/Global/HeaderAdmin";
import AddShop from "../../components/Admin/Shop/AddShop";

function CreateShop() {
  const nav = "/ Utilisateurs / Création de l'utilisateur";
  return (
    <div className="flex h-screen w-full">
      <LateralMenu />
      <div className="flex flex-col w-full">
        <HeaderAdmin nav={nav} />
        <AddShop />
      </div>
    </div>
  );
}

export default CreateShop;
