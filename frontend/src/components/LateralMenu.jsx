/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { useNavigate } from "react-router-dom";
import dashboard from "../assets/dashboard.svg";
import user from "../assets/user.svg";
import badge from "../assets/badge.svg";
import message from "../assets/message.svg";
import score from "../assets/score.svg";

function LateralMenu() {
  const navigate = useNavigate();
  return (
    <div className="w-[18%] bg-gradient-to-b from-bottomdark to-[#454377]">
      <div className="flex justify-center items-start">
        <div className="bg-logo-home w-[60%] h-[17vh] bg-contain bg-no-repeat" />
      </div>
      <div>
        <div
          onClick={() => navigate("/Dashboard")}
          className="flex justify-start items-center backdrop-blur-sm bg-lightblue/10 pl-8"
        >
          <img src={dashboard} className="w-6 h-6" alt="" />
          <p className="font-main-font p-6 text-2xl text-white">DASHBOARD</p>
        </div>
        <div
          onClick={() => navigate("/User")}
          className="flex justify-start items-center hover:backdrop-blur-sm hover:bg-white/10 pl-8 "
        >
          <img src={user} className="w-6 h-6" alt="" />
          <p className="font-main-font p-6 text-2xl text-white">UTILISATEURS</p>
        </div>
        <div className="flex justify-start items-center hover:backdrop-blur-sm hover:bg-white/10 pl-8">
          <img src={score} className="w-6 h-6" alt="" />
          <p className="font-main-font p-6 text-2xl text-white">SCORES</p>
        </div>
        <div className="flex justify-start items-center hover:backdrop-blur-sm hover:bg-white/10 pl-8">
          <img src={badge} className="w-6 h-6" alt="" />
          <p className="font-main-font p-6 text-2xl text-white">BADGES</p>
        </div>
        <div className="flex justify-start items-center hover:backdrop-blur-sm hover:bg-white/10 pl-8">
          <img src={message} className="w-6 h-6" alt="" />
          <p className="font-main-font p-6 text-2xl text-white">MESSAGES</p>
        </div>
      </div>
    </div>
  );
}

export default LateralMenu;
