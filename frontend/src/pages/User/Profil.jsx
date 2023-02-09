import React, { useState, useRef } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import isConnected from "../../services/isConnected";

import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import modif from "../../assets/modif.svg";

import { useCurrentUserContext } from "../../contexts/userContext";
import { useCurrentResponsiveContext } from "../../contexts/responsiveContext";

export default function Profil() {
  const backURL = import.meta.env.VITE_BACKEND_URL;
  const { user, setUser, token } = useCurrentUserContext();
  const { isMobile, isTablet, isLittleMobile } = useCurrentResponsiveContext();
  const [msg, setMsg] = useState();
  const navigate = useNavigate();
  const avatarRef = useRef(null);
  const notifySuccess = () => {
    toast("Profil modifié avec succes.", {
      icon: "👍",
    });
  };
  const SuccessAvatar = () => {
    toast("Avatar modifié avec succes.", {
      icon: "👍",
    });
  };
  const ErrorAvatar = () => {
    toast("Upload Echoué", {
      icon: "👍",
    });
  };
  const [newUserInfos, setNewUserInfos] = useState({
    avatar: user.avatar,
    pseudo: user.pseudo,
    email: user.email,
    id: user.id,
  });

  const body = JSON.stringify(newUserInfos);
  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");

  const PUTrequestOptions = {
    method: "PUT",
    headers: myHeaders,
    body,
  };
  const handleForm = (e) => {
    e.preventDefault();
    fetch(`${backURL}/modifyprofil/${user.id}`, PUTrequestOptions).then(
      (result) => {
        if (!isConnected(result)) {
          localStorage.clear();
          setUser("");
          navigate("/");
        }
        return result;
      }
    );
    setUser({
      ...user,
      pseudo: newUserInfos.pseudo,
      email: newUserInfos.email,
      id: newUserInfos.id,
    });
    notifySuccess();
  };
  const newUserPseudo = (e) => {
    setNewUserInfos({
      ...newUserInfos,
      pseudo: e.target.value,
    });
  };
  const newUseremail = (e) => {
    setNewUserInfos({
      ...newUserInfos,
      email: e.target.value,
    });
  };
  // sending the new avatar to the backend

  const handleSubmit = (e) => {
    e.preventDefault();
    if (avatarRef.current.files[0]) {
      // recupération des articles.
      const myHeader = new Headers();
      myHeader.append("Authorization", `Bearer ${token}`);

      const formData = new FormData();
      formData.append("avatar", avatarRef.current.files[0]);
      const requestOptions = {
        method: "PUT",
        headers: myHeader,
        body: formData,
      };
      // on appelle le back
      fetch(`${backURL}/api/avatars/`, requestOptions)
        .then((response) => response.json())
        .then((results) => {
          // maj avatar
          setUser({ ...user, avatar: results.avatar });
          console.warn(results.avatar);
          setMsg("Upload réussi !");
          SuccessAvatar();
        })
        .catch((error) => {
          console.error(error);
          setMsg("Upload échoué !");
          ErrorAvatar();
        });
    } else {
      setMsg("Aucun fichier");
    }
  };

  return (
    <div>
      <div>
        <Toaster position="bottom-center" reverseOrder />
      </div>
      {isMobile && (
        <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
          <HeaderWithBurger />
          <div className="flex justify-center items-center flex-col mt-[6rem]">
            <h2 className="font-main-font text-3xl mb-[2rem]">
              Modifier Profil
            </h2>

            {/* <div className="border-2 border-white w-[20%] bg-graph1 h-[10vh] bg-cover rounded-full " /> */}
            <div className="backdrop-blur-md w-[95%] rounded-3xl pb-8">
              <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <div className="flex justify-center">
                  <img
                    src={`${backURL}/api/avatars/${user.avatar}`}
                    alt="avatar"
                    className="border-2 border-white w-[26%] h-[10vh] rounded-full mt-4"
                  />
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-col items-center w-[10%]">
                    <input
                      name="avatar"
                      className="text-black bg-gradient-to-tl from-pink to-lightblue rounded-xl font-main-font text-[15px] py-1 px-3 mt-4"
                      type="file"
                      ref={avatarRef}
                      id="file"
                      // upload de l'image
                    />
                    <button
                      className="bg-gradient-to-tl from-pink to-lightblue rounded-xl font-main-font text-[16px] py-1 px-3 mt-4 mb-2 text-black"
                      type="submit"
                    >
                      Envoyer
                    </button>
                  </div>
                </div>
                <p>{msg}</p>
              </form>

              <div className="flex justify-center items-center">
                <form onSubmit={handleForm} className=" flex justify-center">
                  <div className="flex flex-col justify-center items-center">
                    <label className="mb-2 text-xl">
                      Pseudo :
                      <div className="flex">
                        <input
                          className="rounded-lg mb-2 text-black h-[4vh]"
                          type="text"
                          name="pseudo"
                          placeholder={user.pseudo}
                          onChange={(e) => newUserPseudo(e)}
                        />
                        <img
                          src={modif}
                          className="w-6 ml-4"
                          alt="crayon icon"
                        />
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
                          // onChange={(e) => setEmail(e.target.value)}
                          onChange={(e) => newUseremail(e)}
                        />
                        <img
                          src={modif}
                          className="w-6 ml-4"
                          alt="crayon icon"
                        />
                      </div>
                    </label>
                    <div className="flex justify-center w-full ">
                      <button
                        type="button"
                        className="bg-gradient-to-tl from-pink to-lightblue rounded-xl font-main-font text-[16px] py-1 px-3 mt-4 mb-5 text-black"
                      >
                        <input
                          type="submit"
                          value="Valider"
                          className=" text-xl"
                        />
                      </button>
                    </div>
                    <div className="flex flex-col justify-center items-center text-xl text-center p-4">
                      <p className="mb-2">
                        Vous souhaitez réinitialiser votre mot de passe ?
                      </p>
                      <p>
                        Cliquez{" "}
                        <span
                          aria-hidden="true"
                          className="text-pink text-xl"
                          onClick={() => {
                            navigate("/forgottenpassword");
                          }}
                        >
                          ICI
                        </span>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {isLittleMobile && (
        <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
          <HeaderWithBurger />
          <div className="flex justify-center items-center flex-col mt-[5rem]">
            <h2 className="font-main-font text-3xl mb-[1rem]">
              Modifier Profil
            </h2>

            {/* <div className="border-2 border-white w-[20%] bg-graph1 h-[10vh] bg-cover rounded-full " /> */}
            <div className="backdrop-blur-md w-[95%] rounded-3xl ">
              <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <div className="flex justify-center">
                  <img
                    src={user.avatar}
                    alt="avatar"
                    className="border-2 border-white w-[22%] h-[10vh] rounded-full mt-4"
                  />
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-col items-center w-[10%]">
                    <input
                      className="text-black bg-gradient-to-tl from-pink to-lightblue rounded-xl font-main-font text-[13px] py-1 px-2 mt-2"
                      type="file"
                      ref={avatarRef}
                    />
                    <button
                      className="bg-gradient-to-tl from-pink to-lightblue rounded-xl font-main-font text-[16px]  px-3 mt-2 mb-1 text-black"
                      type="submit"
                    >
                      Envoyer
                    </button>
                  </div>
                </div>
                <p>{msg}</p>
              </form>

              <div className="flex justify-center items-center">
                <form onSubmit={handleForm} className=" flex justify-center">
                  <div className="flex flex-col justify-center items-center">
                    <label className="mb-1 text-lg">
                      Pseudo :
                      <div className="flex">
                        <input
                          className="rounded-lg mb-2 text-black h-[4vh]"
                          type="text"
                          name="pseudo"
                          placeholder={user.pseudo}
                          onChange={(e) => newUserPseudo(e)}
                        />
                        <img
                          src={modif}
                          className="w-5 ml-4"
                          alt="crayon icon"
                        />
                      </div>
                    </label>

                    <label className="mb-1 text-lg">
                      Email :
                      <div className="flex">
                        <input
                          className="rounded-lg mb-2 text-black h-[4vh]"
                          type="text"
                          name="email"
                          placeholder={user.email}
                          // onChange={(e) => setEmail(e.target.value)}
                          onChange={(e) => newUseremail(e)}
                        />
                        <img
                          src={modif}
                          className="w-5 ml-4"
                          alt="crayon icon"
                        />
                      </div>
                    </label>
                    <div className="flex justify-center w-full ">
                      <button
                        type="button"
                        className="bg-gradient-to-tl from-pink to-lightblue rounded-xl font-main-font text-[14px] px-3 mt-2 mb-4 text-black"
                      >
                        <input
                          type="submit"
                          value="Valider"
                          className=" text-lg"
                        />
                      </button>
                    </div>
                    <div className="flex flex-col justify-center items-center text-xl text-center p-4">
                      <p className="mb-2">
                        Vous souhaitez réinitialiser votre mot de passe ?
                      </p>
                      <p>
                        Cliquez{" "}
                        <span
                          aria-hidden="true"
                          className="text-pink text-xl"
                          onClick={() => {
                            navigate("/forgottenpassword");
                          }}
                        >
                          ICI
                        </span>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {isTablet && (
        <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
          <HeaderWithBurger />
          <div className="flex justify-center items-center flex-col mt-[9rem]">
            <h2 className="font-main-font text-5xl mb-[2rem]">
              Modifier Profil
            </h2>

            {/* <div className="border-2 border-white w-[20%] bg-graph1 h-[10vh] bg-cover rounded-full " /> */}
            <div className="backdrop-blur-md w-[95%] rounded-3xl">
              <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <div className="flex justify-center">
                  <img
                    src={user.avatar}
                    alt="avatar"
                    className="border-2 border-white w-[20%] h-[13vh] rounded-full mt-4 mb-2"
                  />
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-col justify-center items-center w-[10%]">
                    <input
                      name="avatar"
                      className="text-black bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-xl py-2 px-5 mt-4"
                      type="file"
                      ref={avatarRef}
                      id="file"
                    />
                    <button
                      className="bg-gradient-to-tl from-pink to-lightblue rounded-xl font-main-font text-3xl py-1 px-3 mt-4 mb-5 text-black"
                      type="submit"
                    >
                      Envoyer
                    </button>
                  </div>
                </div>
                <p>{msg}</p>
              </form>

              <div className="flex justify-center items-center w-full">
                <form
                  onSubmit={handleForm}
                  className=" flex justify-center w-full"
                >
                  <div className="flex flex-col justify-center items-center w-full">
                    <label className="mb-2 text-4xl w-[50%]">
                      Pseudo :
                      <div className="flex">
                        <input
                          className="rounded-lg mb-2 text-black h-[5vh] w-full text-3xl"
                          type="text"
                          name="pseudo"
                          placeholder={user.pseudo}
                          onChange={(e) => newUserPseudo(e)}
                        />
                        <img
                          src={modif}
                          className="ml-4 w-10 h-10 pt-2"
                          alt="crayon icon"
                        />
                      </div>
                    </label>

                    <label className="mb-2 text-4xl w-[50%]">
                      Email :
                      <div className="flex">
                        <input
                          className="rounded-lg mb-2 text-black h-[5vh] w-full text-3xl"
                          type="text"
                          name="email"
                          placeholder={user.email}
                          onChange={(e) => newUseremail(e)}
                        />
                        <img
                          src={modif}
                          className="ml-4 w-10 h-10 pt-2"
                          alt="crayon icon"
                        />
                      </div>
                    </label>
                    <div className="flex justify-center w-full ">
                      <button
                        type="button"
                        className="bg-gradient-to-tl from-pink to-lightblue rounded-xl font-main-font py-1 px-3 mt-6 mb-5 text-black"
                      >
                        <input
                          type="submit"
                          value="Valider"
                          className=" text-4xl"
                        />
                      </button>
                    </div>
                    <div className="flex flex-col justify-center items-center text-3xl text-center p-4">
                      <p className="mb-2">
                        Vous souhaitez réinitialiser votre mot de passe ?
                      </p>
                      <p>
                        Cliquez{" "}
                        <span
                          aria-hidden="true"
                          className="text-pink text-4xl"
                          onClick={() => {
                            navigate("/forgottenpassword");
                          }}
                        >
                          ICI
                        </span>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
