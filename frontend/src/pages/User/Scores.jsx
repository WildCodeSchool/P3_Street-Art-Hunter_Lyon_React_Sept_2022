import React from "react";

import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import MyScore from "../../components/User/Scores/MyScore";
import BottomNav from "../../components/User/Global/BottomNav";
import LeaderBoard from "../../components/User/Scores/LeaderBoard";
import { useCurrentResponsiveContext } from "../../contexts/responsiveContext";

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
              </tr>
            </thead>
          </table>
          <LeaderBoard />
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
          <LeaderBoard />
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
          <LeaderBoard />
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
