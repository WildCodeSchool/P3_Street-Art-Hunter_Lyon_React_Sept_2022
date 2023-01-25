import React, { useEffect } from "react";

export default function AddScore({ points, setShowPoints }) {
  useEffect(() => {
    setTimeout(() => {
      setShowPoints(false);
    }, 3000);
  });
  return (
    <div className="text-6xl text-yellow-300 font-main-font blink-2 fixed top-[40vh] w-screen text-center">
      <div className="fade-out-bottom">+{points} Points</div>
    </div>
  );
}
