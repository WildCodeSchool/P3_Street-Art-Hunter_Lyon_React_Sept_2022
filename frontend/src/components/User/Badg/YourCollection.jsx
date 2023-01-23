import React, { useEffect, useState } from "react";
import Badge from "./Badge";
import { useCurrentUserContext } from "../../../contexts/userContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

export default function YourCollection({ setSelectedBadge }) {
  const [userCollection, setUserCollection] = useState([]);
  const { user } = useCurrentUserContext();

  // fectching la collection de bage de l'utilisateur connecté
  useEffect(() => {
    fetch(`${backURL}/user/badges/${user.id}`)
      .then((result) => result.json())
      .then((data) => {
        setUserCollection(data);
      });
  }, []);
  return (
    <div className="flex flex-wrap justify-center h-56 overflow-auto text-base border-4 border-white/50 rounded-3xl">
      {userCollection.map((badge) => (
        <Badge
          key={badge.badge_id}
          setSelectedBadge={setSelectedBadge}
          badgeInfos={badge}
        />
      ))}
    </div>
  );
}
