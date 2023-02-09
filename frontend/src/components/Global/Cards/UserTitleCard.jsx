import isConnected from "@services/isConnected";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Younes from "../../../assets/Younes.png";
import { useCurrentUserContext } from "../../../contexts/userContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

function UserTitleCard({ picture }) {
  const { token, setUser } = useCurrentUserContext();
  const [thisUser, setThisUser] = useState([]);
  const [work, setWork] = useState([]);
  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");

  const navigate = useNavigate();

  const GETrequestOptions = {
    method: "GET",
    headers: myHeaders,
  };
  useEffect(() => {
    fetch(`${backURL}/users/${picture.user_id}`, GETrequestOptions)
      .then((result) => {
        if (!isConnected(result)) {
          localStorage.clear();
          setUser("");
          navigate("/");
        }
        return result;
      })
      .then((result) => result.json())
      .then((result) => {
        setThisUser(result);
      });

    fetch(`${backURL}/works/${picture.work_id}`, GETrequestOptions)
      .then((result) => result.json())
      .then((result) => {
        setWork(result);
      });
  }, []);
  return (
    <div className="flex justify-between">
      <div className="flex justify-start items-center">
        <img
          src={Younes}
          alt="Avatar"
          className="h-[2rem] w-[2rem] border-white rounded-full m-1"
        />
        <h2 className="font-main-font m-1 text-black">{thisUser.pseudo}</h2>
      </div>
      <div className="flex justify-end items-center">
        <p className="font-main-font m-1 text-black text-sm">
          {work.work_name}
        </p>
      </div>
    </div>
  );
}

export default UserTitleCard;
