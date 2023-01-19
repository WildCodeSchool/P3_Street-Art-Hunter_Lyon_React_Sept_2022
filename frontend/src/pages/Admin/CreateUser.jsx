import React from "react";
import LateralMenu from "../../components/Admin/Global/LateralMenu";
import HeaderAdmin from "../../components/Admin/Global/HeaderAdmin";
import AddUser from "../../components/Admin/User/AddUser";

function CreateUser() {
  const nav = "/ Utilisateurs / Création de l'utilisateur";
  return (
    <div className="flex h-screen w-full">
      <LateralMenu />
      <div className="flex flex-col w-full">
        <HeaderAdmin nav={nav} />
        <AddUser />
      </div>
    </div>
  );
}

export default CreateUser;
