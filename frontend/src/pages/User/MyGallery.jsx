import React from "react";
import Header from "../../components/Global/Header";
import BottomNav from "../../components/User/Global/BottomNav";

function MyGallery() {
  return (
    <div className="bg-main-background bg-cover w-full h-screen">
      <Header />
      <div className="h-[3.5rem] pt-3 font-main-font w-screen flex justify-center text-white items-center text-3xl">
        TES PRISES
      </div>
      <div className="flex justify-around flex-wrap overflow-auto h-[60vh]">
        <BottomNav />
      </div>
    </div>
  );
}

export default MyGallery;
