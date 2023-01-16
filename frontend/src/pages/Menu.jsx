/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/userContext";

export default function Menu() {
  const { handleClose } = useCurrentUserContext();
  const navigate = useNavigate();
  return (
    <div className="  bg-main-background  text-white font-main-font bg-cover w-full h-screen">
      <div className="backdrop-blur-sm">
        <div className="flex justify-end">
          <div
            onClick={handleClose}
            className="bg-menu-cross w-[12%] h-[4vh] bg-contain bg-no-repeat mt-7 mr-5"
          />
        </div>
        <div className="flex justify-center items-center ">
          <div className="w-full h-[92.7vh]   flex flex-col justify-around items-center  border-white/10 py-20">
            <button
              type="button"
              onClick={() => {
                handleClose();
                navigate("/profil");
              }}
              className="font-main-font text-[2rem] p-[0.5px] text-lightblue w-5/6 rounded-[10px] border-[2px] border-lightblue/40 h-12 flex items-center justify-center hover:bg-gradient-to-tl from-pink to-lightblue hover:text-black"
            >
              MODIFIER PROFIL
            </button>
            <button
              type="button"
              onClick={() => {
                handleClose();
                navigate("/favoris");
              }}
              className="font-main-font text-[2rem] p-[0.5px] text-lightblue w-5/6 rounded-[10px] border-[2px] border-lightblue/40 h-12 flex items-center justify-center hover:bg-gradient-to-tl from-pink to-lightblue hover:text-black"
            >
              FAVORIS
            </button>
            <button
              type="button"
              onClick={() => {
                handleClose();
                navigate("/galerie");
              }}
              className="font-main-font text-[2rem] p-[0.5px] text-lightblue w-5/6 rounded-[10px] border-[2px] border-lightblue/40 h-12 flex items-center justify-center hover:bg-gradient-to-tl from-pink to-lightblue hover:text-black"
            >
              MA GALERIE
            </button>
            <button
              type="button"
              onClick={() => {
                handleClose();
                navigate("/badges");
              }}
              className="font-main-font text-[2rem] p-[0.5px] text-lightblue w-5/6 rounded-[10px] border-[2px] border-lightblue/40 h-12 flex items-center justify-center hover:bg-gradient-to-tl from-pink to-lightblue hover:text-black"
            >
              MES BADGES
            </button>
            <button
              type="button"
              onClick={() => {
                handleClose();
                navigate("/contact");
              }}
              className="font-main-font text-[2rem] p-[0.5px] text-lightblue w-5/6 rounded-[10px] border-[2px] border-lightblue/40 h-12 flex items-center justify-center hover:bg-gradient-to-tl from-pink to-lightblue hover:text-black"
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
