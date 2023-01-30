import * as React from "react";

import CardMedia from "@mui/material/CardMedia";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import { purple } from "@mui/material/colors";

import MapIcon from "@mui/icons-material/Map";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import { NavLink } from "react-router-dom";

function WorkCardContainer({
  work,
  handleClickOpen,
  setImage,
  setPosition,
  handleClickOpenMap,
}) {
  return (
    <div className="bg-white w-[40%] shadow-2xl shadow-lightblue flex justify-center items-center m-3 flex-wrap rounded-xl">
      <div className="flex justify-between items-center pr-2 pl-2 pt-1 pb-1 w-full">
        <Avatar
          sx={{ bgcolor: purple[500] }}
          src="https://cdn0.iconfinder.com/data/icons/people-jobs-set-2/128/jobs-10-512.png"
        />
        <span className="text-black">Artiste</span>
      </div>
      <CardMedia
        component="img"
        image={work.picture_url}
        alt="work"
        sx={{ height: 110 }}
        onClick={() => {
          handleClickOpen();

          setImage(work.picture_url);
        }}
      />
      <div className="flex flex-col w-full">
        <span
          variant="body2"
          className="text-center text-lg pt-1 text-black font-main-font"
        >
          {work.work_name}
        </span>
        <div className="flex justify-between items-center w-full pr-4 pl-4">
          <NavLink to={`/galerie/all/oeuvres/${work.id}`}>
            <IconButton aria-label="picture">
              <CameraEnhanceIcon />
            </IconButton>
          </NavLink>

          <IconButton
            aria-label="map"
            onClick={() => {
              handleClickOpenMap();

              setPosition([work.latitude, work.longitude]);
            }}
          >
            <MapIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default WorkCardContainer;
