import isConnected from "@services/isConnected";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../../../contexts/userContext";
import art from "../../../assets/art.svg";

const backURL = import.meta.env.VITE_BACKEND_URL;

function Validation() {
  const navigate = useNavigate();
  const [allWorks, setAllWorks] = useState([]);
  const { setUser, token } = useCurrentUserContext();

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });

  useEffect(() => {
    fetch(`${backURL}/works`, { headers: myHeaders })
      .then((result) => {
        if (!isConnected(result)) {
          localStorage.clear();
          navigate("/");
          setUser("");
          navigate("/");
        }
        return result;
      })
      .then((result) => result.json())
      .then((result) => {
        setAllWorks(result);
      });
  }, []);
  return (
    <div className="bg-white w-[25%] h-[45vh] shadow-2xl shadow-cyan-500/50 flex justify-center items-center m-3 flex-wrap">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-black font-main-font text-3xl mb-5 text-center">
          Oeuvres en attente de validation
        </h2>

        <img
          src={art}
          className="w-[15%} h-[15vh] mb-5"
          alt="drawing of an art svg"
        />
        <p className="text-black font-main-font text-3xl mb-5 text-center">
          {allWorks.filter((work) => work.is_validated === 0).length}
        </p>
        <button
          type="button"
          className="w-[60%] h-[4vh] bg-lightblue rounded text-white"
          onClick={() => {
            navigate("/Admin-Works");
          }}
        >
          Voir
        </button>
      </div>
    </div>
  );
}

export default Validation;
