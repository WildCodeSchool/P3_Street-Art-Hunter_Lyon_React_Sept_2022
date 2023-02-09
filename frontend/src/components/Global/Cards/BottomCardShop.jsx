/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import { HeartSwitch } from "@anatoliygatt/heart-switch";
import { useCurrentUserContext } from "../../../contexts/userContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

function BottomCardShop({ picture }) {
  const { token, user } = useCurrentUserContext();
  const hours = picture.creation_date.slice(0, 10);

  const [checked, setChecked] = useState(true);

  const [picture_id, setPictureID] = useState();
  const [user_id, setUserID] = useState();
  const [active, setActive] = useState(false);

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    picture_id,
    user_id,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  const DELETErequestOptions = {
    method: "DELETE",
    headers: myHeaders,
  };

  const handleFavorite = () => {
    setActive(!active);
    setPictureID(picture.id);
    setUserID(user.id);
  };

  useEffect(() => {
    if (!active) {
      setChecked(!checked);
      fetch(
        `${backURL}/favorites/${user_id}/${picture_id}`,
        DELETErequestOptions
      ).catch(console.error);
    } else if (active) {
      fetch(`${backURL}/favorites`, requestOptions).catch(console.error);
    }
  }, [active]);
  return (
    <div className="flex justify-around items-center m-1">
      <p className="font-main-font m-1 text-sm text-black">Lyon</p>

      <div className="bg-localisation w-[10%] h-[2vh] bg-cover m-1" />
      <p className="font-main-font m-1 text-sm text-black">{hours}</p>
      <HeartSwitch
        size="sm"
        inactiveTrackFillColor="#cffafe"
        inactiveTrackStrokeColor="#22d3ee"
        activeTrackFillColor="#06b6d4"
        activeTrackStrokeColor="#0891b2"
        inactiveThumbColor="#ecfeff"
        activeThumbColor="#ecfeff"
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
        }}
        onClick={handleFavorite}
      />
    </div>
  );
}

export default BottomCardShop;
