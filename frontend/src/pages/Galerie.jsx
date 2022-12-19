import React from "react";
import Allive from "@components/AllLive";
import BottomNav from "@components/BottomNav";
import Filters from "@components/Filters";
import Header from "@components/Header";

export default function Galerie({ allOrLive }) {
  return (
    <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
      <Header />
      <Allive />
      <Filters allOrLive={allOrLive} />
      <BottomNav />
    </div>
  );
}
