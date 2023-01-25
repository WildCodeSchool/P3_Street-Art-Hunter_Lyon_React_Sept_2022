import React, { useEffect, useState } from "react";
import BottomNav from "../../components/User/Global/BottomNav";

import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import UserCardContainer from "../../components/Global/Cards/UserCardContainer";
import { useCurrentUserContext } from "../../contexts/userContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

function MyGallery() {
  const { user, token } = useCurrentUserContext();

  const [showPictureGal, setShowPictureGal] = useState([]);

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");

  const GETrequestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  useEffect(() => {
    fetch(`${backURL}/users/${user.id}/pictures`, GETrequestOptions)
      .then((result) => result.json())
      .then((result) => {
        setShowPictureGal(result);
      });
  }, []);

  return (
    <div className="fixed bg-main-background bg-cover w-full h-screen">
      <HeaderWithBurger />
      <div className="flex flex-wrap justify-around mt-[6rem]">
        {showPictureGal.map((picture) => (
          <UserCardContainer key={picture.id} picture={picture} />
        ))}
      </div>
      <div className="flex justify-around flex-wrap overflow-auto h-[60vh]">
        <BottomNav />
      </div>
    </div>
  );
}

export default MyGallery;
