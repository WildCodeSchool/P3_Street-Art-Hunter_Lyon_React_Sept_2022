/* eslint-disable import/no-unresolved */
import BadgeContainer from "@components/BadgeContainer";
import BadgesCollectionModal from "@components/BadgesCollectionModal";
import Header from "@components/Header";
import React, { useState } from "react";

export default function Badges() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBadge, setSetlectedBadge] = useState("");

  return (
    <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen flex flex-col items-center">
      <div className="w-screen">
        <Header />
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
