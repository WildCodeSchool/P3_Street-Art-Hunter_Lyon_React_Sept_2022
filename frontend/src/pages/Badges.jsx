import BadgeContainer from "@components/BadgeContainer";
import Header from "@components/Header";
import React from "react";

export default function Badges() {
  return (
    <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen flex flex-col items-center">
      <div className="w-screen">
        <Header />
      </div>
      <BadgeContainer />
    </div>
  );
}
