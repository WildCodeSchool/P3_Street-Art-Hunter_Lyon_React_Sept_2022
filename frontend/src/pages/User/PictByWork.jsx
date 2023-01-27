import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserCardContainer from "../../components/Global/Cards/UserCardContainer";
import Allive from "../../components/User/Gallery/AllLive";
import Filters from "../../components/User/Gallery/Filters";
import BottomNav from "../../components/User/Global/BottomNav";
import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";

import { useCurrentUserContext } from "../../contexts/userContext";
import Menu from "./Menu";

const backURL = import.meta.env.VITE_BACKEND_URL;

function PictByWork(allOrLive) {
  const { open } = useCurrentUserContext();
  const { token } = useCurrentUserContext();
  const [ShowPictureWork, setShowPictureWork] = useState([]);
  const { workId } = useParams();

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");

  const GETrequestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  useEffect(() => {
    fetch(`${backURL}/${workId}/pictures`, GETrequestOptions)
      .then((result) => result.json())
      .then((result) => {
        setShowPictureWork(result);
      });
  }, []);

  return (
    <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
      {!open ? (
        <>
          <HeaderWithBurger />
          <Allive />
          <Filters allOrLive={allOrLive} />
          <div className="flex flex-wrap justify-around mt-[6rem]">
            {ShowPictureWork.map((picture) => (
              <UserCardContainer key={picture.id} picture={picture} />
            ))}
          </div>
          <div>
            <BottomNav />
          </div>
        </>
      ) : (
        <Menu />
      )}
    </div>
  );
}

export default PictByWork;
