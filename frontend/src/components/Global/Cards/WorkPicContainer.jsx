import React from "react";
import CardMedia from "@mui/material/CardMedia";

import Avatar from "@mui/material/Avatar";

import { purple } from "@mui/material/colors";

function WorkPicContainer({ work, handleClickOpen, setImage }) {
  return (
    <div className="bg-white w-[30%] h-[20vh] shadow-2xl shadow-lightblue flex justify-center items-center m-3 flex-wrap rounded-xl">
      <div className="flex justify-between items-center pr-2 pl-2 pt-1 pb-1 w-full">
        <Avatar
          sx={{ bgcolor: purple[500], width: 30, height: 30 }}
          src="https://cdn0.iconfinder.com/data/icons/people-jobs-set-2/128/jobs-10-512.png"
        />
        <span className="text-black text-sm">Artiste</span>
      </div>
      <CardMedia
        component="img"
        image={work.picture_url}
        alt="work"
        sx={{ height: 80 }}
        onClick={() => {
          handleClickOpen();

          setImage(work.picture_url);
        }}
      />
      <div className="flex flex-col w-full">
        <span
          variant="body2"
          className="text-center text-sm text-black font-main-font"
        >
          {work.work_name}
        </span>
      </div>
    </div>
  );
}

export default WorkPicContainer;
