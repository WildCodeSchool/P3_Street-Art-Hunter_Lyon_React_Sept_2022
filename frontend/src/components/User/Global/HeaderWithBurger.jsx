import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../../../contexts/userContext";

function HeaderWithBurger() {
  const { handleClickOpen, setUser } = useCurrentUserContext();
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between ">
        <div
          aria-hidden="true"
          onClick={() => {
            localStorage.clear();
            setUser("");
            navigate("/");
          }}
          className="bg-logout w-[12%] h-[4.5vh] bg-contain bg-no-repeat mt-7 ml-5 cursor-pointer"
        />
        <div
          aria-hidden="true"
          onClick={handleClickOpen}
          className="bg-menu-burger bg-center w-[12%] h-[4.5vh] bg-contain bg-no-repeat mt-7 mr-5 cursor-pointer"
        />
      </div>

      <NavLink to="/">
        <div className="flex justify-center">
          <div className=" bg-center bg-logo-home w-[40%] h-[20vh] bg-contain bg-no-repeat absolute top-3" />
        </div>
      </NavLink>
    </div>
  );
}

export default HeaderWithBurger;
