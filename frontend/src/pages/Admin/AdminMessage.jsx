/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import LateralMenu from "../../components/Admin/Global/LateralMenu";
import HeaderAdmin from "../../components/Admin/Global/HeaderAdmin";
import MessageList from "../../components/Admin/Message/AdminMessageList";

function AdminMessage() {
  const nav = "/Admin-Artwork";
  return (
    <div className="flex h-screen w-full">
      <LateralMenu />
      <div className="flex flex-col w-full">
        <HeaderAdmin nav={nav} />
        <MessageList />
      </div>
    </div>
  );
}

export default AdminMessage;
