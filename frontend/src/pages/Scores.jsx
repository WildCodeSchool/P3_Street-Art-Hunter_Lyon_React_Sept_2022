import React from "react";
import Header from "@components/Header";
import LeaderBoard from "@components/LeaderBoard";
import BottomNav from "@components/BottomNav";
import MyScore from "@components/MyScore";
import Daryl from "@assets/Daryl.png";
import Vincent from "@assets/Vincent.png";
import Younes from "@assets/Younes.png";
import Gaelle from "@assets/Gaelle.png";

const users = [
  { pseudo: "DarylChaise", avatar: Daryl, score: "3250", badges: "7" },
  { pseudo: "Younz", avatar: Younes, score: "2850", badges: "5" },
  { pseudo: "Gaellic", avatar: Gaelle, score: "2690", badges: "6" },
  { pseudo: "Vinzz69", avatar: Vincent, score: "2600", badges: "3" },
  { pseudo: "JS", avatar: Daryl, score: "2600", badges: "2" },
  { pseudo: "PHP", avatar: Daryl, score: "200", badges: "1" },
];

function Scores() {
  return (
    <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
      <Header />
      <table className="w-screen text-xl ">
        <thead>
          <tr className="h-12 text-2xl">
            <td className="w-[25vw]" />
            <td className="w-[35vw]">PSEUDO</td>
            <td className="w-[20vw]">POINTS</td>
            <td className="w-[20vw]">BADGES</td>
          </tr>
        </thead>
      </table>
      <LeaderBoard users={users} />
      <div className="h-[3.5rem] pt-3 font-main-font w-screen flex justify-center items-center text-3xl">
        YOUR SCORE :
      </div>
      <MyScore />
      <BottomNav />
    </div>
  );
}

export default Scores;
