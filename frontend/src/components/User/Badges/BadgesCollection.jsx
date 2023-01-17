import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/no-cycle
import Badge from "./BadgesCollectionModal";

export default function BadgesCollection({ setSelectedBadge, setModalOpen }) {
  const [badgesCollection, setBadgesCollection] = useState([]);

  // fectching la collection de bage de l'utilisateur connecté
  useEffect(() => {
    fetch(`http://localhost:5000/badges`)
      .then((result) => result.json())
      .then((data) => {
        setBadgesCollection(data);
      });
  }, []);
  return (
    <div className="flex flex-wrap justify-center h-5/6 overflow-auto text-base border-4 border-white/50 rounded-3xl">
      {badgesCollection.map((badge) => (
        <button
          key={badge.badge_id}
          type="button"
          onClick={() => setModalOpen(false)}
        >
          <Badge setSelectedBadge={setSelectedBadge} badgeInfos={badge} />
        </button>
      ))}
    </div>
  );
}
