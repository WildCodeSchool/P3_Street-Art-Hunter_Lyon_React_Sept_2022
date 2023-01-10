import React, { useEffect, useState } from "react";

export default function BadgeDesc({ selectedBadge }) {
  const [badge, setBadge] = useState("");
  useEffect(() => {
    setBadge(selectedBadge);
  }, [selectedBadge]);
  return (
    <div className="flex flex-wrap justify-center h-56 text-base border-4 border-white/50 rounded-3xl w-full">
      <div className="flex justify-around w-full items-center">
        <div className="bg-slate-400/60 h-[6.2rem] w-[6.2rem] rounded-2xl border-2 border-black/60 text-8xl text-center">
          {badge ? (
            <img
              src={badge.badge_img}
              alt={badge.badge_name}
              className="h-24 w-24 "
            />
          ) : (
            "B"
          )}
        </div>
        <h2 className=" font-main-font text-3xl underline-offset-4 underline">
          {badge ? badge.badge_name : "BadgePedia"}
        </h2>
      </div>
      <p className="text-xl">
        {badge ? badge.badge_desc : "Choisis un badge!"}
      </p>
    </div>
  );
}
