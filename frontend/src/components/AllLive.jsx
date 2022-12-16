import React, { useState } from "react";
// eslint-disable-next-line import/no-unresolved, import/extensions
import SwitchButton from "@components/SwitchButton";

export default function Allive() {
  const [isActive, setIsActive] = useState("");
  return (
    <div className="w-full h-[30px] bg- drop-shadow-bottomtop flex items-end justify-around">
      <SwitchButton
        isActive={isActive}
        setIsActive={setIsActive}
        content="ALL"
        styleModif="mb-4 w-20"
      />
      <SwitchButton
        isActive={isActive}
        setIsActive={setIsActive}
        content="LIVE"
        styleModif="mb-4 w-20"
      />
    </div>
  );
}
