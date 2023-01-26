import React from "react";
import { toast, Toaster } from "react-hot-toast";
import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import modif from "../../assets/modif.svg";
import { useCurrentUserContext } from "../../contexts/userContext";
import Menu from "./Menu";

const backURL = import.meta.env.VITE_BACKEND_URL;

export default function Profil() {
  const notifySuccess = () => {
    toast("Profil modifié avec success.", {
      icon: "👍",
    });
  };
  const { user, setUser, open } = useCurrentUserContext();

  const handleForm = (e) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      avatar: user.avatar,
      pseudo: user.pseudo,
      email: user.email,
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body,
    };
    e.preventDefault();
    // on créé un nouvel utilisateur et on reutilise
    fetch(`${backURL}/modifyProfil`, requestOptions)
      .then(() => {
        notifySuccess();
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div>
      <div>
        <Toaster position="top-center" reverseOrder />
      </div>
      {!open ? (
        <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
          <HeaderWithBurger />
          <div className="flex justify-center items-center flex-col mt-[6rem]  ">
            <h2 className="font-main-font text-3xl mb-[1rem]">
              Modifier Profil
            </h2>
            <div className="border-2 border-white w-[20%] bg-graph1 h-[10vh] bg-cover rounded-full " />
            <div className="flex">
              <input
                className="rounded-lg mb-2 text-black h-[4vh]"
                type="text"
                name="pseudo"
                placeholder={user.pseudo}
                onChange={(e) => setUser({ ...user, pseudo: e.target.value })}
              />
              <img src={modif} className="w-6 ml-4" alt="crayon icon" />
            </div>
            <button
              type="button"
              className=" text-black bg-gradient-to-tl from-pink to-lightblue rounded-xl font-main-font text-[15px] py-1 px-3 mt-4 mb-5"
            >
              Changer la photo
            </button>
          </div>
          <div className="flex justify-center">
            <form onSubmit={handleForm}>
              <div className="flex flex-col justify-center items-start">
                <label className="mb-2 text-xl">
                  Pseudo :
                  <div className="flex">
                    <input
                      className="rounded-lg mb-2 text-black h-[4vh]"
                      type="text"
                      name="pseudo"
                      placeholder={user.pseudo}
                      onChange={(e) =>
                        setUser({ ...user, pseudo: e.target.value })
                      }
                    />
                    <img src={modif} className="w-6 ml-4" alt="crayon icon" />
                  </div>
                </label>

                <label className="mb-2 text-xl">
                  Email :
                  <div className="flex">
                    <input
                      className="rounded-lg mb-2 text-black h-[4vh]"
                      type="text"
                      name="email"
                      placeholder={user.email}
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                    />
                    <img src={modif} className="w-6 ml-4" alt="crayon icon" />
                  </div>
                </label>
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
