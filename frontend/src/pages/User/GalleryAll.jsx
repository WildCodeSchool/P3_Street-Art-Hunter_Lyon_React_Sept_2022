import React, { useEffect, useState } from "react";
import Allive from "../../components/User/Gallery/AllLive";
import BottomNav from "../../components/User/Global/BottomNav";
import Filters from "../../components/User/Gallery/Filters";
import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import ArtistCardContainer from "../../components/Global/Cards/ArtistCardContainer";
import { useCurrentUserContext } from "../../contexts/userContext";
import Menu from "./Menu";

const backURL = import.meta.env.VITE_BACKEND_URL;

function GalleryAll({ allOrLive }) {
  const { open } = useCurrentUserContext();

  const { token } = useCurrentUserContext();

  const [showWork, setShowWork] = useState([]);

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");

  const GETrequestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  useEffect(() => {
    fetch(`${backURL}/workswithpicture`, GETrequestOptions)
      .then((result) => result.json())
      .then((result) => {
        setShowWork(result);
      });
  }, []);

  return (
    <div>
      {!open ? (
        <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
          <HeaderWithBurger />
          <Allive />
          <Filters allOrLive={allOrLive} />
          <div className="flex flex-wrap justify-around">
            {showWork.map((work) =>
              work.is_validated === 1 ? (
                <ArtistCardContainer key={work.id} work={work} />
              ) : null
            )}
          </div>

          <BottomNav />
        </div>
      ) : (
        <Menu />
      )}
    </div>
  );
}

export default GalleryAll;
