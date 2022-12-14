import React from "react";
import Daryl from "@assets/Daryl.png";

export default function ScoreBoard() {
  return (
    <div className="text-white font-main-font">
      <table className="w-screen text-xl backdrop-blur-sm">
        <tr className="h-16 text-2xl backdrop-blur-0">
          <td />
          <td>PSEUDO</td>
          <td>POINTS</td>
          <td>BADGES</td>
        </tr>

        <tr className="bg-lightblue bg-opacity-60 h-[3.5rem] border-b-[1px] border-t-[1px] border-opacity-60 border-white">
          <td className="pl-2 flex h-[3.5rem] items-center justify-around pr-1 text-2xl">
            1
            <img
              src={Daryl}
              alt="Avatar"
              className="h-[3rem] w-[3rem] bg-black border-[1px] border-white rounded-full"
            />
          </td>
          <td className="">DarylChaise</td>
          <td className="">3250</td>
          <td className="">7</td>
        </tr>
        <tr className="bg-lightblue  bg-opacity-60 h-[3.5rem] border-b-[1px] border-t-[1px] border-opacity-60 border-white">
          <td className="pl-2">2</td>
          <td>Younz</td>
          <td>2850</td>
          <td>5</td>
        </tr>
        <tr className="bg-lightblue  bg-opacity-60 h-[3.5rem] border-b-[1px] border-t-[1px] border-opacity-60 border-white">
          <td className="pl-2">3</td>
          <td>Gaellic</td>
          <td>2690</td>
          <td>6</td>
        </tr>
        <tr className="bg-lightblue  bg-opacity-60 h-[3.5rem] border-b-[1px] border-t-[1px] border-opacity-60 border-white">
          <td className="pl-2">4</td>
          <td>Vinzz69</td>
          <td>2600</td>
          <td>3</td>
        </tr>
        <tr className="bg-lightblue  bg-opacity-60 h-[3.5rem] border-b-[1px] border-t-[1px] border-opacity-60 border-white">
          <td className="pl-2">5</td>
          <td>JS</td>
          <td>2000</td>
          <td>2</td>
        </tr>
        <tr className="h-[3.5rem]" />
        <tr className="bg-pink  bg-opacity-60 h-[3.5rem] border-b-[1px] border-t-[1px] border-opacity-60 border-white">
          <td className="pl-2">999</td>
          <td>RoyalSlet</td>
          <td>2</td>
          <td>0</td>
        </tr>
      </table>
    </div>
  );
}
