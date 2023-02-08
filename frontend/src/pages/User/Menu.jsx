import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentResponsiveContext } from "../../contexts/responsiveContext";

export default function Menu() {
  const { isMobile, isTablet, isLittleMobile } = useCurrentResponsiveContext();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(!close);
  };
  return (
    <div>
      {(isMobile || isLittleMobile) && (
        <div className="  bg-main-background  text-white font-main-font bg-cover w-full h-screen ">
          <div className="backdrop-blur-sm ">
            <div className="flex justify-end">
              <div
                aria-hidden="true"
                onClick={() => {
                  setTimeout(() => {
                    goBack();
                  }, "400");

                  handleClose();
                }}
                className="bg-menu-cross w-[12%] h-[4vh] bg-contain bg-no-repeat mt-7 mr-5"
              />
            </div>
            <div
              className={`flex justify-center items-center ${
                !close ? "slide-in-right" : "slide-in-left"
              }`}
            >
              <div className="w-full h-[92.7vh]   flex flex-col justify-around items-center  border-white/10 py-20">
                <button
                  type="button"
                  onClick={() => {
                    handleClose();
                    navigate("/admin");
                  }}
                  className="font-main-font text-[2rem] p-[0.5px] text-lightblue w-5/6 rounded-[10px] border-[2px] border-lightblue/40 h-12 flex items-center justify-center hover:bg-gradient-to-tl from-pink to-lightblue hover:text-black"
                >
                  ADMIN DASHBOARD
                </button>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/profil");
                  }}
                  className="font-main-font text-[2rem] p-[0.5px] text-lightblue w-5/6 rounded-[10px] border-[2px] border-lightblue/40 h-12 flex items-center justify-center hover:bg-gradient-to-tl from-pink to-lightblue hover:text-black"
                >
                  MODIFIER PROFIL
                </button>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/favoris");
                  }}
                  className="font-main-font text-[2rem] p-[0.5px] text-lightblue w-5/6 rounded-[10px] border-[2px] border-lightblue/40 h-12 flex items-center justify-center hover:bg-gradient-to-tl from-pink to-lightblue hover:text-black"
                >
                  FAVORIS
                </button>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/magalerie");
                  }}
                  className="font-main-font text-[2rem] p-[0.5px] text-lightblue w-5/6 rounded-[10px] border-[2px] border-lightblue/40 h-12 flex items-center justify-center hover:bg-gradient-to-tl from-pink to-lightblue hover:text-black"
                >
                  MA GALERIE
                </button>

                <button
                  type="button"
                  onClick={() => {
                    navigate("/badges");
                  }}
                  className="font-main-font text-[2rem] p-[0.5px] text-lightblue w-5/6 rounded-[10px] border-[2px] border-lightblue/40 h-12 flex items-center justify-center hover:bg-gradient-to-tl from-pink to-lightblue hover:text-black"
                >
                  MES BADGES
                </button>
                <button
                  type="button"
                  onClick={() => {
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
      )}

      {isTablet && (
        <div className="  bg-main-background  text-white font-main-font bg-cover w-full h-screen">
          <div className="backdrop-blur-sm">
            <div className="flex justify-end">
              <div
                aria-hidden="true"
                onClick={() => {
                  setTimeout(() => {
                    goBack();
                  }, "400");

                  handleClose();
                }}
                className="bg-menu-cross w-[12%] h-[4vh] bg-contain bg-no-repeat mt-7 mr-5"
              />
            </div>
            <div
              className={`flex justify-center items-center ${
                !close ? "slide-in-right" : "slide-in-left"
              }`}
            >
              <div className="w-full h-[92.7vh]   flex flex-col justify-around items-center  border-white/10 py-20">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/profil");
                  }}
                  className="font-main-font text-6xl p-[0.5px] text-lightblue w-[70%] rounded-[10px] border-[2px] border-lightblue/40 h-[8vh] flex items-center justify-center hover:bg-gradient-to-tl from-pink to-lightblue hover:text-black"
                >
                  MODIFIER PROFIL
                </button>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/favoris");
                  }}
                  className="font-main-font text-6xl p-[0.5px] text-lightblue w-[70%] rounded-[10px] border-[2px] border-lightblue/40 h-[8vh] flex items-center justify-center hover:bg-gradient-to-tl from-pink to-lightblue hover:text-black"
                >
                  FAVORIS
                </button>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/magalerie");
                  }}
                  className="font-main-font text-6xl p-[0.5px] text-lightblue w-[70%] rounded-[10px] border-[2px] border-lightblue/40 h-[8vh] flex items-center justify-center hover:bg-gradient-to-tl from-pink to-lightblue hover:text-black"
                >
                  MA GALERIE
                </button>

                <button
                  type="button"
                  onClick={() => {
                    navigate("/badges");
                  }}
                  className="font-main-font text-6xl p-[0.5px] text-lightblue w-[70%] rounded-[10px] border-[2px] border-lightblue/40 h-[8vh] flex items-center justify-center hover:bg-gradient-to-tl from-pink to-lightblue hover:text-black"
                >
                  MES BADGES
                </button>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/contact");
                  }}
                  className="font-main-font text-6xl p-[0.5px] text-lightblue w-[70%] rounded-[10px] border-[2px] border-lightblue/40 h-[8vh] flex items-center justify-center hover:bg-gradient-to-tl from-pink to-lightblue hover:text-black"
                >
                  CONTACT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
