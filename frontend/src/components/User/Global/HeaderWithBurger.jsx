/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { useCurrentUserContext } from "../../../contexts/userContext";

function HeaderWithBurger() {
  const { handleClickOpen } = useCurrentUserContext();

  return (
    <div>
      <div className="flex justify-end">
        <div
          onClick={handleClickOpen}
          className="bg-menu-burger w-[12%] h-[4vh] bg-contain bg-no-repeat mt-7 mr-5 cursor-pointer"
        />
      </div>

      <div className="flex justify-center">
        <div className="bg-logo-home w-[40%] h-[20vh] bg-contain bg-no-repeat absolute top-3" />
      </div>
    </div>
  );
}

export default HeaderWithBurger;
