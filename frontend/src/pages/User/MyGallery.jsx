import React, { useEffect, useState } from "react";
import isConnected from "@services/isConnected";
import { useNavigate } from "react-router-dom";

import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import UserCardContainer from "../../components/Global/Cards/PictureCardContainer";
import { useCurrentUserContext } from "../../contexts/userContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

function MyGallery() {
  const { user, token, setUser } = useCurrentUserContext();

  const [showPictureGal, setShowPictureGal] = useState([]);

  const navigate = useNavigate();

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
      .then((result) => {
        if (!isConnected(result)) {
          localStorage.clear();
          setUser("");
          navigate("/");
        }
        return result;
      })
      .then((result) => result.json())
      .then((result) => {
        setShowPictureGal(result);
      });
  }, []);

  return (
    <div className="fixed bg-main-background bg-cover w-full h-screen">
      <HeaderWithBurger />
      <div className="flex flex-wrap justify-around mt-[6rem]">
        {showPictureGal.length === 0 && (
          <div className="text-white font-main-font text-4xl mb-5 mt-[14rem] mx-8 text-center">
            Capture des Photos pour les voir apparaitres ici !{" "}
          </div>
        )}
        {showPictureGal.map((picture) => (
          <UserCardContainer key={picture.id} picture={picture} />
        ))}
      </div>
    </div>
  );
}

export default MyGallery;
