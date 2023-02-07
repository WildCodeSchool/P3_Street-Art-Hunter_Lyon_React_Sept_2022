import React, { useEffect, useState } from "react";
import CardMedia from "@mui/material/CardMedia";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { purple } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useCurrentUserContext } from "../../../contexts/userContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

function FavoriteCard({ fav, handleClickOpen, setImage }) {
  const { token } = useCurrentUserContext();
  const [userList, setUserList] = useState([]);
  const [work, setWork] = useState([]);

  const date = fav.creation_date.slice(0, 10);

  const hours = fav.creation_date.slice(11, 16);

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");

  const GETrequestOptions = {
    method: "GET",
    headers: myHeaders,
  };
  useEffect(() => {
    fetch(`${backURL}/users/${fav.user_id}`, GETrequestOptions)
      .then((result) => result.json())
      .then((result) => {
        setUserList(result);
      });

    fetch(`${backURL}/works/${fav.work_id}`, GETrequestOptions)
      .then((result) => result.json())
      .then((result) => {
        setWork(result);
      });
  }, []);

  const DELETErequestOptions = {
    method: "DELETE",
    headers: myHeaders,
  };

  const handleFavorite = () => {
    fetch(`${backURL}/favorites/${fav.picture_id}`, DELETErequestOptions).catch(
      console.error
    );
  };

  return (
    <div className="pt-2 bg-white w-[43%] h-[28vh] shadow-2xl shadow-lightblue flex justify-center items-center m-3 flex-wrap rounded-xl">
      <div className="flex justify-bewteen items-center w-full pr-3 pl-3">
        <div className="flex flex-col justify-center items-start w-full">
          <Avatar
            sx={{ bgcolor: purple[500], height: 30, width: 30 }}
            src={userList.avatar}
          />
          <span className="text-black text-s font-main-font">
            {userList.pseudo}
          </span>
        </div>

        <span variant="body2" className="text-lg text-black font-main-font">
          {work.work_name}
        </span>
      </div>
      <CardMedia
        component="img"
        image={fav.picture_url}
        alt="work"
        sx={{ height: 110 }}
        onClick={() => {
          handleClickOpen();

          setImage(fav.picture_url);
        }}
      />
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center w-full pr-2 pl-2">
          <div className="flex flex-col">
            <span className="text-center text-s  text-black font-main-font">
              {hours}
            </span>
            <span className="text-center text-s text-black font-main-font">
              {date}
            </span>
          </div>

          <IconButton aria-label="map" onClick={handleFavorite}>
            <FavoriteIcon color="secondary" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;
