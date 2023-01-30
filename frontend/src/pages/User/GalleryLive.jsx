/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Allive from "../../components/User/Gallery/AllLive";
import BottomNav from "../../components/User/Global/BottomNav";

import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import PictureCardContainer from "../../components/Global/Cards/PictureCardContainer";

import { useCurrentUserContext } from "../../contexts/userContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function GalleryLive() {
  const { token } = useCurrentUserContext();

  const [showPicture, setShowPicture] = useState([]);
  const [image, setImage] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");

  const GETrequestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  useEffect(() => {
    fetch(`${backURL}/pictures`, GETrequestOptions)
      .then((result) => result.json())
      .then((result) => {
        setShowPicture(result);
      });
  }, []);

  return (
    <div>
      <div className="bg-center bg-desk-background text-white font-main-font bg-cover h-[200vh]">
        <HeaderWithBurger />

        <Allive />

        <div className=" flex justify-around flex-wrap overflow-auto">
          {showPicture.map((picture) => (
            <PictureCardContainer
              key={picture.id}
              picture={picture}
              handleClickOpen={handleClickOpen}
              setImage={setImage}
            />
          ))}
        </div>

        <BottomNav />
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div className="h-[100vh] bg-main-background object-cover bg-center">
          <div className="flex justify-end items-center h-[10vh]">
            <div
              aria-hidden="true"
              onClick={() => {
                handleClose();
              }}
              className="bg-menu-cross w-[12%] h-[4vh] bg-contain bg-no-repeat mt-5 mr-3"
            />
          </div>

          <img
            src={image}
            className="h-[75vh] shadow-2xl shadow-lightblue mt-10"
            alt=""
          />
        </div>
      </Dialog>
    </div>
  );
}
