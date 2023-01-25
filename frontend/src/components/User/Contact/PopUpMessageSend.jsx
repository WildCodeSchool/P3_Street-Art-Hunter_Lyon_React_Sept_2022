import React, { useEffect } from "react";

export default function MessageSend({ setDoneMessage }) {
  useEffect(() => {
    setTimeout(() => {
      setDoneMessage(false);
    }, 3000);
  });
  return (
    <div className="text-6xl text-lightblue font-main-font blink-2 fixed top-[20vh] w-screen text-center">
      <div className="fade-out-bottom">Ton message à bien été envoyé !</div>
    </div>
  );
}
