import React from "react";
import Daryl from "@assets/Daryl.png";
import clock2 from "@assets/clock2.svg";

function HeaderAdmin() {
  return (
    <div className="h-[13vh] flex items-center justify-between p-10">
      <div className="flex justify-start">
        <h2 className="font-main-font p-6 text-5xl text-black">
          Hello, Admin <span>&#128075;</span>
        </h2>
      </div>
      <div className=" flex justify-end items-center w-[70%]">
        <img
          src={clock2}
          className="pl-5 w-[5%] h-[6.5vh] "
          alt="notification svg"
        />
        <img
          src={Daryl}
          className="bg-black p-1 w-[7%] h-[7.5vh] rounded-full ml-[3rem] "
          alt=""
        />
        <p className="font-main-font p-3 text-3xl text-black">Daryl</p>
      </div>
    </div>
  );
}

export default HeaderAdmin;
