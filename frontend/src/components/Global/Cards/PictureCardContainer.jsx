/* eslint-disable camelcase */
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import CardMedia from "@mui/material/CardMedia";
import isConnected from "@services/isConnected";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import { purple } from "@mui/material/colors";

import FavoriteIcon from "@mui/icons-material/Favorite";

import { useCurrentUserContext } from "../../../contexts/userContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

function PictureCardContainer({ picture, handleClickOpen, setImage }) {
  const { token, user, setUser } = useCurrentUserContext();
  const [userList, setUserList] = useState([]);
  const [work, setWork] = useState([]);
  const [picture_id, setPictureID] = useState();
  const [userId, setUserID] = useState();
  const [active, setActive] = useState(picture.picture_id !== null);
  const [color, setColor] = useState("");

  const date = picture.creation_date.slice(0, 10);

  const navigate = useNavigate();

  const hours = picture.creation_date.slice(11, 16);

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");

  const GETrequestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const body = JSON.stringify({
    picture_id,
    userId,
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

  useEffect(() => {
    if (active) setColor("secondary");
    else {
      setColor("");
    }

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
        setUserList(result);
      });

    fetch(`${backURL}/works/${picture.work_id}`, GETrequestOptions)
      .then((result) => result.json())
      .then((result) => {
        setWork(result);
      });
  }, []);

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else if (active) {
      setColor("secondary");
      fetch(`${backURL}/favorites`, requestOptions).catch(console.error);
    } else {
      setColor("");
      fetch(`${backURL}/favorites/${picture.id}`, DELETErequestOptions).catch(
        console.error
      );
    }
  }, [active]);

  const handleFavorite = () => {
    setActive(!active);
    setPictureID(picture.id);
    setUserID(user.id);
  };

  return (
    <div className="pt-2 bg-white w-[43%] h-[28vh] min-h-[15rem] shadow-2xl shadow-lightblue flex justify-center items-center m-3 flex-wrap rounded-xl">
      <div className="flex justify-bewteen items-center w-full pr-3 pl-3">
        <div className="flex flex-col justify-center items-start w-full">
          <Avatar
            sx={{ bgcolor: purple[500], height: 30, width: 30 }}
            src={userList.avatar}
          />
          <span className="text-black text-s">{userList.pseudo}</span>
        </div>

        <span variant="body2" className="text-lg text-black font-main-font ">
          {work.work_name}
        </span>
      </div>
      <CardMedia
        component="img"
        image={picture.picture_url}
        alt="work"
        sx={{ height: 110 }}
        onClick={() => {
          handleClickOpen();

          setImage(picture);
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
          {picture.picture_id === null && (
            <IconButton aria-label="map" onClick={handleFavorite}>
              <FavoriteIcon color={color} />
            </IconButton>
          )}
          {picture.picture_id !== null && (
            <IconButton aria-label="map" onClick={handleFavorite}>
              <FavoriteIcon color={color} />
            </IconButton>
          )}
        </div>
      </div>
    </div>
  );
}

export default PictureCardContainer;
