import React from "react";
import Header from "../components/Header";
// import Allive from "../components/AllLive";
// import Filters from "../components/Filters";
// import SearchBar from "../components/SearchBar";
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import BottomNav from "../components/BottomNav";

function Connexion() {
  return (
    <div className="bg-main-background bg-cover w-full h-screen">
      <Header />
      <BottomNav />
    </div>
  );
}

export default Connexion;
