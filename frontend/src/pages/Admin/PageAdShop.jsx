import React from "react";
import LateralMenu from "../../components/LateralMenu";
import HeaderAdmin from "../../components/HeaderAdmin";
import AdminShopList from "../../components/AdminShopList";

function AdminShop() {
  const nav = "/Admin-Shop";
  return (
    <div className="flex h-screen w-full">
      <LateralMenu />
      <div className="flex flex-col w-full">
        <HeaderAdmin nav={nav} />
        <AdminShopList />
      </div>
    </div>
  );
}

export default AdminShop;
