import React from "react";
import Header from "@components/Header";
import ScoreBoard from "@components/ScoreBoard";
import BottomNav from "@components/BottomNav";

function Scores() {
  return (
    <div className="bg-main-background bg-cover w-full h-screen">
      <Header />
      <ScoreBoard />
      <BottomNav />
    </div>
  );
}

export default Scores;
