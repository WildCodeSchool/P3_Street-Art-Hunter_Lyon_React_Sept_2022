import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BlocConnexion from "../../components/Global/BlocConnexion";

import Header from "../../components/Global/Header";
import { useCurrentUserContext } from "../../contexts/userContext";

function Connexion() {
  const { user } = useCurrentUserContext();
  const nav = useNavigate();
  useEffect(() => {
    if (user.id) {
      nav("/camera");
    }
  });
  return (
    <div className="bg-main-background bg-cover w-full h-screen">
      <Header />
      <BlocConnexion />
    </div>
  );
}

export default Connexion;
