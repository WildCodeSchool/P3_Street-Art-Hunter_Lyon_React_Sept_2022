import React from "react";

function HeaderWithBurger() {
  return (
    <div>
      <div className="flex justify-end">
        <div className="bg-menu-burger w-[12%] h-[4vh] bg-contain bg-no-repeat mt-7 mr-5" />
      </div>
      <div className="flex justify-center">
        <div className="bg-logo-home w-[40%] h-[20vh] bg-contain bg-no-repeat relative bottom-16" />
      </div>
    </div>
  );
}

export default HeaderWithBurger;
