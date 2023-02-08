/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import isConnected from "../../services/isConnected";
import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import FavoriteCard from "../../components/Global/Cards/FavoriteCard";

import { useCurrentUserContext } from "../../contexts/userContext";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const backURL = import.meta.env.VITE_BACKEND_URL;

function Favoris() {
  const { token, user, setUser } = useCurrentUserContext();

  const navigate = useNavigate();

  const [showFav, setShowFav] = useState([]);

  const [image, setImage] = useState("");

  const [open, setOpen] = React.useState(false);

  const [deletedFavorite, setDeletedFavorite] = useState(false);

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
    setShowFav(showFav.filter((fav) => fav.id !== deletedFavorite.id));
  }, [deletedFavorite]);

  useEffect(() => {
    fetch(`${backURL}/user/favoris/${user.id}`, GETrequestOptions)
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
        setShowFav(result);
      });
  }, []);

  return (
    <div>
      <div className="bg-main-background bg-cover w-full h-screen">
        <HeaderWithBurger />
        <div className="mt-[6rem] flex justify-around flex-wrap overflow-auto h-[70vh]">
          {showFav.map((fav) => (
            <FavoriteCard
              key={fav.id}
              fav={fav}
              handleClickOpen={handleClickOpen}
              setImage={setImage}
              deletedFavorite={deletedFavorite}
              setDeletedFavorite={setDeletedFavorite}
            />
          ))}
        </div>
        <div className="w-full flex justify-center">
          <NavLink to="/camera">
            <button
              type="button"
              className="bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-[32px] py-1 px-6  mt-5 w-[40%] min-w-fit"
            >
              RETOUR
            </button>
          </NavLink>
        </div>
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

export default Favoris;
