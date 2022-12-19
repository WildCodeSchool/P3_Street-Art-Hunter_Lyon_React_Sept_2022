import Allive from "@components/AllLive";
import BottomNav from "@components/BottomNav";
import Filters from "@components/Filters";
import Header from "@components/Header";
import React from "react";

export default function Galerie() {
  return (
    <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
      <Header />
      <Allive />
      <Filters />
      <BottomNav />
    </div>
  );
}
