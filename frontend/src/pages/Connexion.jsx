import React from "react";
// eslint-disable-next-line import/no-unresolved
import Allive from "@components/AllLive";
import Filters from "@components/Filters";
import Header from "../components/Header";

function Connexion() {
  return (
    <div className="bg-main-background bg-cover w-full h-screen">
      <Header />
      <Allive />
      <Filters />
    </div>
  );
}

export default Connexion;
