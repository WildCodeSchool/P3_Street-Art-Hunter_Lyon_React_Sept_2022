/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import isConnected from "@services/isConnected";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";

import Slide from "@mui/material/Slide";

import Allive from "../../components/User/Gallery/AllLive";
import BottomNav from "../../components/User/Global/BottomNav";
import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";

import WorkCardContainer from "../../components/Global/Cards/WorkCardContainer";
import MapByWork from "./MapByWork";
import { useCurrentUserContext } from "../../contexts/userContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function GalleryAll() {
  const { token, setUser } = useCurrentUserContext();

  const [showWork, setShowWork] = useState([]);
  const [image, setImage] = useState("");
  const [position, setPosition] = useState([]);

  const [open, setOpen] = React.useState(false);
  const [openMap, setOpenMap] = React.useState(false);

  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenMap = () => {
    setOpenMap(true);
  };

  const handleCloseMap = () => {
    setOpenMap(false);
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
    fetch(`${backURL}/workswithpicture`, GETrequestOptions)
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
        setShowWork(result);
      });
  }, []);

  return (
    <div>
      <div className="bg-center bg-main-background text-white font-main-font bg-cover w-full h-[200]">
        <HeaderWithBurger />
        <Allive />

        <div className="flex flex-wrap justify-around overflow-auto pb-[100rem]">
          {showWork.map((work) =>
            work.is_validated === 1 ? (
              <WorkCardContainer
                key={work.id}
                work={work}
                handleClickOpen={handleClickOpen}
                handleClickOpenMap={handleClickOpenMap}
                setImage={setImage}
                setPosition={setPosition}
              />
            ) : null
          )}
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
            className="h-[75vh] shadow-2xl shadow-lightblue mt-10 w-full"
            alt=""
          />
        </div>
      </Dialog>

      <Dialog
        fullScreen
        open={openMap}
        onClose={handleCloseMap}
        TransitionComponent={Transition}
      >
        <div className="h-[100vh] bg-main-background bg-cover bg-center">
          <div className="flex justify-end items-center h-[10vh]">
            <div
              aria-hidden="true"
              onClick={() => {
                handleCloseMap();
              }}
              className="bg-menu-cross w-[12%] h-[4vh] bg-contain bg-no-repeat mt-5 mr-3"
            />
          </div>

          <MapByWork position={position} />
        </div>
      </Dialog>
    </div>
  );
}

export default GalleryAll;
