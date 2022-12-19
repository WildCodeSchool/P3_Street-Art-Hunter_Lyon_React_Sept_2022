import React from "react";
// eslint-disable-next-line import/no-unresolved
import Allive from "@components/AllLive";
import Filters from "../components/Filters";
import Header from "../components/Header";
// eslint-disable-next-line import/no-extraneous-dependencies
import "bootstrap/dist/css/bootstrap.min.css";
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
