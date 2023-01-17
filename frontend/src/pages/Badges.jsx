import React, { useState } from "react";
import HeaderWithBurger from "../components/User/Global/HeaderWithBurger";
import BadgeContainer from "../components/User/Badges/BadgeContainer";
import BadgesCollectionModal from "../components/User/Badges/BadgesCollectionModal";

export default function Badges() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBadge, setSetlectedBadge] = useState("");

  return (
    <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen flex flex-col items-center">
      <div className="w-screen">
        <HeaderWithBurger />
      </div>
      <BadgeContainer
        setModalOpen={setModalOpen}
        selectedBadge={selectedBadge}
        setSetlectedBadge={setSetlectedBadge}
      />
      {modalOpen ? (
        <BadgesCollectionModal
          setModalOpen={setModalOpen}
          setSelectedBadge={setSetlectedBadge}
        />
      ) : (
        ""
      )}
    </div>
  );
}
