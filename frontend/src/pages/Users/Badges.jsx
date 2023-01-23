/* eslint-disable import/no-unresolved */
import BadgeContainer from "@components/User/Badg/BadgeContainer";
import Header from "@components/Global/Header";
import React, { useState } from "react";

import BadgesCollectionModal from "@components/User/Badg/BadgesCollectionModal";

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
