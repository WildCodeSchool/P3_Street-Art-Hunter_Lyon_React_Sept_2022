import React from "react";
import LateralMenu from "../../components/LateralMenu";
import HeaderAdmin from "../../components/HeaderAdmin";
import AdminMessages from "../../components/AdminMessages";

function AdminMessage() {
  const nav = "/Admin-Artwork";
  return (
    <div className="flex h-screen w-full">
      <LateralMenu />
      <div className="flex flex-col w-full">
        <HeaderAdmin nav={nav} />
        <AdminMessages />
      </div>
    </div>
  );
}

export default AdminMessage;
