import React from "react";
import Header from "../components/Header";
import Allive from "../components/AllLive";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";

function Connexion() {
  return (
    <div className="bg-main-background bg-cover w-full h-screen">
      <Header />
      <Allive />
      <Filters />
      <SearchBar />
    </div>
  );
}

export default Connexion;
