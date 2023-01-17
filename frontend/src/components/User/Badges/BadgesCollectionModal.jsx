import React from "react";
// eslint-disable-next-line import/no-cycle
import BadgesCollection from "./BadgesCollection";

export default function BadgesCollectionModal({
  setModalOpen,
  setSelectedBadge,
}) {
  return (
    <div className="h-[100vh] w-screen bg-black/70 absolute z-40 flex items-center justify-center">
      <div className="w-5/6 px-2 h-[70vh] bg-slate-400/60 backdrop-blur-md rounded-3xl flex flex-col justify-around flex-wrap">
        <button
          type="button"
          onClick={() => setModalOpen(false)}
          className="text-black text-right mr-3 mt-2 text-3xl"
        >
          X
        </button>
        <h2 className="font-main-font text-3xl text-center ">
          Tous les badges :
        </h2>
        <BadgesCollection
          setSelectedBadge={setSelectedBadge}
          setModalOpen={setModalOpen}
        />
      </div>
    </div>
  );
}
