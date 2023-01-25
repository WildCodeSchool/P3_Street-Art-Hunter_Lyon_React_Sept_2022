import React from "react";
import Header from "../../components/Global/Header";
import TakePicture from "../../components/User/Camera/TakePicture";

export default function Camera() {
  return (
    <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
      <Header />
      <TakePicture />
    </div>
  );
}
