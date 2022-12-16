import React from "react";
import Header from "@components/Header";
import LeaderBoard from "@components/LeaderBoard";
import BottomNav from "@components/BottomNav";
import MyScore from "@components/MyScore";

function Scores() {
  return (
    <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
      <Header />
      <table className="w-screen text-xl ">
        <tr className="h-12 text-2xl">
          <td className="w-[25vw]" />
          <td className="w-[35vw]">PSEUDO</td>
          <td className="w-[20vw]">POINTS</td>
          <td className="w-[20vw]">BADGES</td>
        </tr>
      </table>
      <LeaderBoard />
      <div className="h-[3.5rem] pt-3 font-main-font w-screen flex justify-center items-center text-3xl">
        YOUR SCORE :
      </div>
      <MyScore />
      <BottomNav />
    </div>
  );
}

export default Scores;
