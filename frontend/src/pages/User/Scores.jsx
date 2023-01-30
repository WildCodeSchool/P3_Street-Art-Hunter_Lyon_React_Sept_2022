import React from "react";
import Daryl from "../../assets/Daryl.png";
import Vincent from "../../assets/Vincent.png";
import Younes from "../../assets/Younes.png";
import Gaelle from "../../assets/Gaelle.png";
import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import MyScore from "../../components/User/Scores/MyScore";
import BottomNav from "../../components/User/Global/BottomNav";
import LeaderBoard from "../../components/User/Scores/LeaderBoard";
import { useCurrentResponsiveContext } from "../../contexts/responsiveContext";

const users = [
  { pseudo: "DarylChaise", avatar: Daryl, score: "3250", badges: "7" },
  { pseudo: "Younz", avatar: Younes, score: "2850", badges: "5" },
  { pseudo: "Gaellic", avatar: Gaelle, score: "2690", badges: "6" },
  { pseudo: "Vinzz69", avatar: Vincent, score: "2600", badges: "3" },
  { pseudo: "JS", avatar: Daryl, score: "2600", badges: "2" },
  { pseudo: "PHP", avatar: Daryl, score: "200", badges: "1" },
];

function Scores() {
  const { isMobile, isTablet, isLittleMobile } = useCurrentResponsiveContext();
  return (
    <div>
      {isMobile && (
        <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
          <HeaderWithBurger />
          <table className="w-screen text-xl mt-[6.5rem]">
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
      )}

      {isTablet && (
        <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
          <HeaderWithBurger />
          <table className="w-screen mt-[10rem]">
            <thead>
              <tr className="h-12 text-4xl">
                <td className="w-[25vw]" />
                <td className="w-[35vw] text-center">PSEUDO</td>
                <td className="w-[20vw]">POINTS</td>
                <td className="w-[20vw]">BADGES</td>
              </tr>
            </thead>
          </table>
          <LeaderBoard users={users} />
          <div className="h-[3.5rem] pt-3 font-main-font w-screen flex justify-center items-center text-4xl">
            YOUR SCORE :
          </div>
          <MyScore />

          <BottomNav />
        </div>
      )}

      {isLittleMobile && (
        <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
          <HeaderWithBurger />
          <table className="w-screen text-xl mt-[4rem]">
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
      )}
    </div>
  );
}

export default Scores;
