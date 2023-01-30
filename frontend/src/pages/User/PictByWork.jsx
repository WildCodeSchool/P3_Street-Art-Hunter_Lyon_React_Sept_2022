/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import PictureCardContainer from "../../components/Global/Cards/PictureCardContainer";
import Allive from "../../components/User/Gallery/AllLive";
import BottomNav from "../../components/User/Global/BottomNav";
import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import WorkPicContainer from "../../components/Global/Cards/WorkPicContainer";

import { useCurrentUserContext } from "../../contexts/userContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function PictByWork() {
  const { token } = useCurrentUserContext();
  const [work, setWork] = useState([]);
  const [showPictureWork, setShowPictureWork] = useState([]);
  const { workId } = useParams();

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
    fetch(`${backURL}/${workId}/pictures`, GETrequestOptions)
      .then((result) => result.json())
      .then((result) => {
        setShowPictureWork(result);
      });
  }, []);

  useEffect(() => {
    fetch(`${backURL}/workswithpicture/${workId}`, GETrequestOptions)
      .then((result) => result.json())
      .then((result) => {
        setWork(result);
      });
  }, []);

  return (
    <div className="bg-main-background text-white font-main-font bg-cover w-full h-[200vh]">
      <HeaderWithBurger />
      <Allive />

      <div className="flex justify-center">
        <WorkPicContainer
          work={work}
          handleClickOpen={handleClickOpen}
          setImage={setImage}
        />
      </div>

      <div className="flex flex-wrap justify-around overflow-auto h-[100vh]">
        {showPictureWork.map((picture) => (
          <PictureCardContainer
            key={picture.id}
            picture={picture}
            handleClickOpen={handleClickOpen}
            setImage={setImage}
          />
        ))}
      </div>
      <div>
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

export default PictByWork;
