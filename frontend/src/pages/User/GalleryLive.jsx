import React, { useEffect, useState } from "react";
import Allive from "../../components/User/Gallery/AllLive";
import BottomNav from "../../components/User/Global/BottomNav";

import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import UserCardContainer from "../../components/Global/Cards/UserCardContainer";

import { useCurrentUserContext } from "../../contexts/userContext";
import Menu from "./Menu";

const backURL = import.meta.env.VITE_BACKEND_URL;

export default function GalleryLive() {
  const { open, token } = useCurrentUserContext();

  const [showPicture, setShowPicture] = useState([]);

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");

  const GETrequestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  useEffect(() => {
    fetch(`${backURL}/pictures`, GETrequestOptions)
      .then((result) => result.json())
      .then((result) => {
        setShowPicture(result);
      });
  }, []);

  return (
    <div>
      {!open ? (
        <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
          <HeaderWithBurger />
          <div className="mb-4">
            <Allive />
          </div>

          <div className="flex flex-wrap justify-around">
            {showPicture.map((picture) => (
              <UserCardContainer key={picture.id} picture={picture} />
            ))}
          </div>

          <BottomNav />
        </div>
      ) : (
        <Menu />
      )}
    </div>
  );
}
