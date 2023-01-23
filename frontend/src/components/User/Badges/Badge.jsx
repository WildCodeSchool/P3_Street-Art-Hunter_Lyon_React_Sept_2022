import React from "react";

export default function Badge({ setSelectedBadge, badgeInfos }) {
  const handleClick = () => {
    setSelectedBadge(badgeInfos);
  };

  return (
    <div
      aria-hidden="true"
      onClick={handleClick}
      className="flex flex-wrap justify-center mx-4 my-4 font-main-font h-16 w-16"
    >
      <img
        className="w-10 h-10"
        src={badgeInfos.badge_img}
        alt={badgeInfos.bage_name}
      />
      {badgeInfos.badge_name}
    </div>
  );
}
