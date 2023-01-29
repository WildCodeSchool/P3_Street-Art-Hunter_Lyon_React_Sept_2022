import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cloud from "@assets/cloud.svg";
import BlocConnexion from "../../components/Global/BlocConnexion";

import { useCurrentUserContext } from "../../contexts/userContext";

function ConnexionAdmin() {
  const { user } = useCurrentUserContext();
  const nav = useNavigate();
  useEffect(() => {
    if (user.id) {
      nav("/camera");
    }
  });
  return (
    <div className="bg-center bg-desk-background bg-cover bg-no-repeat w-[100%] h-[100vh] flex justify-center items-center">
      <img
        src={cloud}
        alt=""
        className="w-[12%] vibrate-1 absolute right-[4rem] top-[4rem]"
      />
      <img
        src={cloud}
        alt=""
        className="w-[12%] vibrate-1 absolute left-[4rem] top-[4rem]"
      />
      <img
        src={cloud}
        alt=""
        className="w-[10%] vibrate-2 absolute left-[20rem] top-[10rem]"
      />
      <img
        src={cloud}
        alt=""
        className="w-[10%] vibrate-2 absolute right-[20rem] top-[10rem]"
      />

      <div className="w-full h-[100vh] flex flex-col justify-center items-center">
        <div className=" bg-center bg-logo-home bg-contain bg-no-repeat w-[80%] h-[100vh] flicker-3 pt-[20rem]" />

        <BlocConnexion />
      </div>
    </div>
  );
}

export default ConnexionAdmin;
