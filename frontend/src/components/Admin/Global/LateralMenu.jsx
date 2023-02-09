import React from "react";
import { useNavigate } from "react-router-dom";
import dashboard from "../../../assets/dashboard.svg";
import user from "../../../assets/user.svg";

import message from "../../../assets/message.svg";
import { useCurrentUserContext } from "../../../contexts/userContext";

import shop from "../../../assets/dashshop.svg";

function LateralMenu() {
  const navigate = useNavigate();
  const { setUser } = useCurrentUserContext();

  return (
    <div className="w-[18%] h-screen bg-gradient-to-b from-bottomdark to-[#454377] top-0 fixed">
      <div className="flex justify-center items-start">
        <div className="bg-logo-home w-[60%] h-[17vh] bg-contain bg-no-repeat" />
      </div>
      <div>
        <div
          aria-hidden="true"
          onClick={() => navigate("/admin")}
          className="flex justify-start items-center hover:backdrop-blur-sm hover:bg-white/10 pl-8 "
        >
          <img src={dashboard} className="w-6 h-6" alt="" />
          <p className="font-main-font p-6 text-2xl text-white">DASHBOARD</p>
        </div>
        <div
          aria-hidden="true"
          onClick={() => navigate("/Admin-User")}
          className="flex justify-start items-center hover:backdrop-blur-sm hover:bg-white/10 pl-8"
        >
          <img src={user} className="w-6 h-6" alt="" />
          <p className="font-main-font p-6 text-2xl text-white">UTILISATEURS</p>
        </div>

        <div
          aria-hidden="true"
          onClick={() => navigate("/Admin-Messages")}
          className="flex justify-start items-center hover:backdrop-blur-sm hover:bg-white/10 pl-8"
        >
          <img src={message} className="w-6 h-6" alt="" />
          <p className="font-main-font p-6 text-2xl text-white">MESSAGES</p>
        </div>

        <div
          aria-hidden="true"
          onClick={() => navigate("/Admin-Shop")}
          className="flex justify-start items-center hover:backdrop-blur-sm hover:bg-white/10 pl-8"
        >
          <img src={shop} className="w-6 h-6" alt="" />
          <p className="font-main-font p-6 text-2xl text-white">SHOP</p>
        </div>
        <div
          aria-hidden="true"
          onClick={() => {
            localStorage.clear();
            setUser("");
            navigate("/");
          }}
          className="bg-logout w-[12%] h-[4.5vh] bg-contain bg-no-repeat mt-[25rem] ml-[6rem] cursor-pointer"
        />
      </div>
    </div>
  );
}

export default LateralMenu;
