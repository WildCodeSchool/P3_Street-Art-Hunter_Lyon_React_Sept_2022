import React from "react";
import LateralMenu from "../../components/Admin/Global/LateralMenu";
import HeaderAdmin from "../../components/Admin/Global/HeaderAdmin";
import UserBoard from "../../components/Admin/User/UserBoard";

function AdminUser() {
  const nav = "/ Utilisateurs";
  return (
    <div className="flex h-screen w-full">
      <LateralMenu />
      <div className="flex flex-col w-full">
        <HeaderAdmin nav={nav} />
        <UserBoard />
      </div>
    </div>
  );
}

export default AdminUser;
