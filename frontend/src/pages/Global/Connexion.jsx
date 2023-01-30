import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BlocConnexion from "../../components/Global/BlocConnexion";

import Header from "../../components/Global/Header";
import { useCurrentUserContext } from "../../contexts/userContext";
import { useCurrentResponsiveContext } from "../../contexts/responsiveContext";

function Connexion() {
  const { user } = useCurrentUserContext();
  const nav = useNavigate();

  const { isMobile, isTablet, isLittleMobile } = useCurrentResponsiveContext();
  useEffect(() => {
    if ((isMobile || isTablet || isLittleMobile) && user.id) {
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
