import React from "react";
import LateralMenu from "../../components/Admin/Global/LateralMenu";
import HeaderAdmin from "../../components/Admin/Global/HeaderAdmin";
import AdminShopList from "../../components/Admin/Shop/AdminShopList";

function AdminShop() {
  const nav = "/Admin-Shop";
  return (
    <div className="flex h-screen w-full">
      <LateralMenu />
      <div className="flex flex-col w-full">
        <HeaderAdmin nav={nav} />
        <div className="mt-40">
          <AdminShopList />
        </div>
      </div>
    </div>
  );
}

export default AdminShop;
