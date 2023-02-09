import React, { useEffect } from "react";

export default function InscriptionDone({ setinscriptions }) {
  useEffect(() => {
    setTimeout(() => {
      setinscriptions(false);
    }, 3000);
  });
  return (
    <div className="text-6xl text-lightblue font-main-font blink-2 fixed top-[20vh] w-screen text-center">
      <div className="fade-out-bottom">Félicitations tu es inscrit !</div>
    </div>
  );
}
