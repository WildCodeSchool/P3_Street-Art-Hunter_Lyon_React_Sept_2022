import React, { useEffect, useState } from "react";
import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import FavoriteCard from "../../components/Global/Cards/FavoriteCard";
import { useCurrentUserContext } from "../../contexts/userContext";
import Menu from "./Menu";

const backURL = import.meta.env.VITE_BACKEND_URL;

function Favoris() {
  const { open, token, user } = useCurrentUserContext();

  const [showFav, setShowFav] = useState([]);

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");

  const GETrequestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  useEffect(() => {
    fetch(`${backURL}/user/favoris/${user.id}`, GETrequestOptions)
      .then((result) => result.json())
      .then((result) => {
        setShowFav(result);
      });
  }, []);

  return (
    <div>
      {!open ? (
        <div className="bg-main-background bg-cover w-full h-screen">
          <HeaderWithBurger />
          <div className="h-[3.5rem] pt-3 font-main-font w-screen flex justify-center text-white items-center text-3xl mt-20 mb-4">
            TES COUPS DE COEUR
          </div>
          <div className="flex justify-around flex-wrap overflow-auto h-[70vh]">
            {showFav.map((picture) => (
              <FavoriteCard key={picture.id} picture={picture} />
            ))}
          </div>
        </div>
      ) : (
        <Menu />
      )}
    </div>
  );
}

export default Favoris;
