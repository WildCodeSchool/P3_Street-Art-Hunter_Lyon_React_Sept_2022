/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import modif from "../../assets/modif.svg";
import { useCurrentUserContext } from "../../contexts/userContext";
import Menu from "./Menu";

export default function Profil() {
  const { user, open } = useCurrentUserContext();

  return (
    <div>
      {!open ? (
        <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
          <HeaderWithBurger />
          <div className="flex justify-center items-center flex-col mt-[6rem]  ">
            <h2 className="font-main-font text-3xl mb-[1rem]">
              Modifier Profil
            </h2>
            <div className="border-2 border-white w-[20%] bg-graph1 h-[10vh] bg-cover rounded-full " />
            <button
              type="button"
              className=" text-black bg-gradient-to-tl from-pink to-lightblue rounded-xl font-main-font text-[15px] py-1 px-3 mt-4 mb-5"
            >
              Changer la photo
            </button>
          </div>
          <div className="flex justify-center">
            <form>
              <div className="flex flex-col justify-center items-start">
                <label className="mb-2 text-xl">Pseudo :</label>
                <div className="flex">
                  <input
                    className="rounded-lg mb-2 text-black h-[4vh]"
                    type="text"
                    name="pseudo"
                    placeholder={user.pseudo}
                  />
                  <img src={modif} className="w-6 ml-4" alt="crayon icon" />
                </div>

                <label className="mb-2 text-xl">Email :</label>
                <div className="flex">
                  <input
                    className="rounded-lg mb-2 text-black h-[4vh]"
                    type="text"
                    name="email"
                    placeholder={user.email}
                  />
                  <img src={modif} className="w-6 ml-4" alt="crayon icon" />
                </div>

                <label className="mb-2 text-xl">Mot de passe :</label>
                <div className="flex">
                  <input
                    className="rounded-lg mb-2 text-black h-[4vh]"
                    type="text"
                    name="password"
                  />
                  <img src={modif} className="w-6 ml-4" alt="crayon icon" />
                </div>
                <button
                  type="button"
                  className="bg-gradient-to-tl from-pink to-lightblue rounded-xl font-main-font text-[16px] py-1 px-3 mt-4 mb-5 text-black"
                >
                  <div className=" text-xl">
                    <input type="submit" value="Valider" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Menu />
      )}
    </div>
  );
}
