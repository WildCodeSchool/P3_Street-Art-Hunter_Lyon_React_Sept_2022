import React from "react";
import Pierre from "@assets/Pierre.png";

export default function MyScore() {
  return (
    <div>
      <table className="w-screen text-xl backdrop-blur-sm">
        <thead />
        <tbody>
          <tr className="bg-pink  bg-opacity-60 h-[3.5rem] border-b-[1px] border-t-[1px] border-opacity-60 border-white">
            <td className="pl-2 flex h-[3.5rem] items-center justify-start pr-1 text-2xl w-[10w]">
              999
            </td>
            <td className="w-[15vw]">
              <img
                src={Pierre}
                alt="Avatar"
                className="h-[3rem] w-[3rem] bg-black border-[1px] border-white rounded-full"
              />
            </td>
            <td className="w-[35vw]">RoyalSlet</td>
            <td className="w-[20vw]">2</td>
            <td className="w-[20vw]">0</td>{" "}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
