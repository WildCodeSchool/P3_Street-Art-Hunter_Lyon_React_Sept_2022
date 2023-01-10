import React from "react";
import BadgeDesc from "./BadgeDesc";
import YourCollection from "./YourCollection";

export default function BadgeContainer({
  setModalOpen,
  selectedBadge,
  setSetlectedBadge,
}) {
  return (
    <div className="w-5/6 px-2 h-[70vh] bg-slate-400/60  bg-opacity-60 backdrop-blur-md rounded-3xl flex flex-col justify-around flex-wrap">
      <div className=" font-main-font text-3xl text-center ">
        <h2 className="mb-3">Ta Collection :</h2>
        <YourCollection setSelectedBadge={setSetlectedBadge} />
      </div>
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className="text-right underline pr-2"
      >
        Voir tous les badges
      </button>
      <BadgeDesc selectedBadge={selectedBadge} />
    </div>
  );
}
