import React from "react";
import { useNavigate } from "react-router-dom";
import art from "../../../assets/art.svg";

function Users() {
  const navigate = useNavigate();

  return (
    <div className="bg-white w-[25%] h-[45vh] shadow-2xl shadow-cyan-500/50 flex justify-center items-center m-3 flex-wrap">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-black font-main-font text-3xl mb-5 text-center">
          Utilisateurs
        </h2>

        <img
          src={art}
          className="w-[15%} h-[15vh] mb-14 mt-4"
          alt="drawing of an art svg"
        />

        <button
          type="button"
          className="w-[60%] h-[4vh] bg-lightblue rounded text-white"
          onClick={() => {
            navigate("/Admin-User");
          }}
        >
          Voir
        </button>
      </div>
    </div>
  );
}

export default Users;
