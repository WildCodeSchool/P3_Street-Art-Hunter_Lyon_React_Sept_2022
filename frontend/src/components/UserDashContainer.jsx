import React from "react";
import user from "@assets/user.svg";

function UserDashContainer() {
  return (
    <div className="bg-white w-[20%] h-[40vh] shadow-2xl shadow-cyan-500/50 flex justify-center items-center m-3 flex-wrap">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-black font-main-font text-4xl mb-5">User</h2>
        <svg />
        <img
          src={user}
          className="w-[20%} h-[20vh] mb-5 stroke-blue-500"
          alt=""
        />
        <button
          type="button"
          className="w-[60%] h-[4vh] bg-lightblue rounded text-white"
        >
          Voir
        </button>
      </div>
    </div>
  );
}

export default UserDashContainer;
