import React from "react";
import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import TakePicture from "../../components/User/Camera/TakePicture";

export default function Camera() {
  return (
    <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
      <HeaderWithBurger />
      <TakePicture />
    </div>
  );
}
