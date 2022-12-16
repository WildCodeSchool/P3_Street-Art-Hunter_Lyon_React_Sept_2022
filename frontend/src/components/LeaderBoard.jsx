import React from "react";
import Daryl from "@assets/Daryl.png";

export default function LeaderBoard() {
  return (
    <div className="text-white font-main-font h-[18rem] overflow-auto border-y-[1px] border-white">
      <table className="w-screen text-xl backdrop-blur-sm">
        <tr className="bg-lightblue bg-opacity-60 h-[3.5rem]  border-opacity-60 border-white">
          <td className="pl-2 flex h-[3.5rem] items-center justify-start pr-1 text-2xl w-[10w]">
            1
          </td>
          <td className="w-[15vw]">
            <img
              src={Daryl}
              alt="Avatar"
              className="h-[3rem] w-[3rem] bg-black border-[1px] border-white rounded-full"
            />
          </td>
          <td className="w-[35vw]">DarylChaise</td>
          <td className="w-[20vw]">3250</td>
          <td className="w-[20vw]">7</td>
        </tr>
        <tr className="bg-lightblue  bg-opacity-60 h-[3.5rem]  border-t-[1px] border-opacity-60 border-white">
          <td className="pl-2 flex h-[3.5rem] items-center justify-start pr-1 text-2xl w-[10w]">
            2
          </td>
          <td className="w-[15vw]">
            <img
              src={Daryl}
              alt="Avatar"
              className="h-[3rem] w-[3rem] bg-black border-[1px] border-white rounded-full"
            />
          </td>
          <td className="w-[35vw]">Younz</td>
          <td className="w-[20vw]">2850</td>
          <td className="w-[20vw]">5</td>
        </tr>
        <tr className="bg-lightblue  bg-opacity-60 h-[3.5rem]  border-t-[1px] border-opacity-60 border-white">
          <td className="pl-2 flex h-[3.5rem] items-center justify-start pr-1 text-2xl w-[10w]">
            3
          </td>
          <td className="w-[15vw]">
            <img
              src={Daryl}
              alt="Avatar"
              className="h-[3rem] w-[3rem] bg-black border-[1px] border-white rounded-full"
            />
          </td>
          <td className="w-[35vw]">Gaellic</td>
          <td className="w-[20vw]">2690</td>
          <td className="w-[20vw]">6</td>
        </tr>
        <tr className="bg-lightblue  bg-opacity-60 h-[3.5rem]  border-t-[1px] border-opacity-60 border-white">
          <td className="pl-2 flex h-[3.5rem] items-center justify-start pr-1 text-2xl w-[10w]">
            4
          </td>
          <td className="w-[15vw]">
            <img
              src={Daryl}
              alt="Avatar"
              className="h-[3rem] w-[3rem] bg-black border-[1px] border-white rounded-full"
            />
          </td>
          <td className="w-[35vw]">Vinzz69</td>
          <td className="w-[20vw]">2600</td>
          <td className="w-[20vw]">3</td>
        </tr>
        <tr className="bg-lightblue  bg-opacity-60 h-[3.5rem]  border-t-[1px] border-opacity-60 border-white">
          <td className="pl-2 flex h-[3.5rem] items-center justify-start pr-1 text-2xl w-[10w]">
            5
          </td>
          <td className="w-[15vw]">
            <img
              src={Daryl}
              alt="Avatar"
              className="h-[3rem] w-[3rem] bg-black border-[1px] border-white rounded-full"
            />
          </td>
          <td className="w-[35vw]">JS</td>
          <td className="w-[20vw]">2000</td>
          <td className="w-[20vw]">2</td>
        </tr>
        <tr className="bg-lightblue  bg-opacity-60 h-[3.5rem]  border-t-[1px] border-opacity-60 border-white">
          <td className="pl-2 flex h-[3.5rem] items-center justify-start pr-1 text-2xl w-[10w]">
            6
          </td>
          <td className="w-[15vw]">
            <img
              src={Daryl}
              alt="Avatar"
              className="h-[3rem] w-[3rem] bg-black border-[1px] border-white rounded-full"
            />
          </td>
          <td className="w-[35vw]">PHP</td>
          <td className="w-[20vw]">200</td>
          <td className="w-[20vw]">1</td>
        </tr>
      </table>
    </div>
  );
}
