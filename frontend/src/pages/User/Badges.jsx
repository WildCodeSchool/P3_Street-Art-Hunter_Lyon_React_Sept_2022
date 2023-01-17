import React, { useState } from "react";
import BadgeContainer from "../../components/User/Badges/BadgeContainer";
import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import { useCurrentUserContext } from "../../contexts/userContext";
import Menu from "./Menu";
import BadgesCollectionModal from "../../components/User/Badges/BadgesCollectionModal";

export default function Badges() {
  const { open } = useCurrentUserContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBadge, setSetlectedBadge] = useState("");
  return (
    <div>
      {!open ? (
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
      ) : (
        <div className="bg-main-background backdrop-blur-md text-white font-main-font bg-cover w-full h-screen">
          <Menu />
        </div>
      )}
    </div>
  );
}
