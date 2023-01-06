import BottomNavCamera from "@components/BottomNavCamera";
import React from "react";
import Header from "../components/Header";
import TakePicture from "../components/TakePicture";

export default function Camera() {
  return (
    <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
      <Header />
      <TakePicture />
      <BottomNavCamera />
    </div>
  );
}
