import React from "react";
import Daryl from "../../../assets/Daryl.png";
import home from "../../../assets/home.svg";
import { useCurrentUserContext } from "../../../contexts/userContext";

function HeaderAdmin({ nav }) {
  const { user } = useCurrentUserContext();
  return (
    <div className="h-[15vh] z-50 flex items-center justify-between p-10 top-0 left-[21rem] fixed w-[83%] bg-white shadow-lg">
      <div className="flex flex-col items-start">
        <div className="flex flex-row w-full">
          <img src={home} alt="" className="w-[7%] pt-[1.7rem] mr-2" />
          <span className="pt-8 font-main-font text-xl">{nav}</span>
        </div>
        <h2 className="font-main-font p-6 text-5xl text-black">
          Hello, {user.pseudo} <span>&#128075;</span>
        </h2>
      </div>

      <div className=" flex justify-end items-center w-[70%]">
        <img
          src={Daryl}
          className="bg-black p-1 w-[7%] h-[7.5vh] rounded-full ml-[3rem] "
          alt=""
        />
      </div>
    </div>
  );
}

export default HeaderAdmin;
