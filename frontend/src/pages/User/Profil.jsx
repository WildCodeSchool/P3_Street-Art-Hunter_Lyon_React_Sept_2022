import React, { useState, useRef } from "react";
import { toast, Toaster } from "react-hot-toast";
import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import modif from "../../assets/modif.svg";
import { useCurrentUserContext } from "../../contexts/userContext";
import Menu from "./Menu";

export default function Profil() {
  const backURL = import.meta.env.VITE_BACKEND_URL;
  const [avatar, setAvatar] = useState({});
  const { user, setUser, token, open } = useCurrentUserContext();
  const [msg, setMsg] = useState("");
  const avatarRef = useRef();
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
  const handleForm = (id) => {
    fetch(`${backURL}/modifyprofil/${id}`, PUTrequestOptions);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (avatarRef.current.files[0]) {
      // recupération des articles.
      const myHeader = new Headers();
      myHeader.append("Authorization", `Bearer ${token}`);

      const formData = new FormData();
      formData.append("file", avatar);

      const requestOptions = {
        method: "POST",
        headers: myHeader,
        body: formData,
      };
      // on appelle le back
      fetch(`${backURL}/api/avatars`, requestOptions)
        .then((results) => {
          // maj avatar
          setUser({ ...user, avatar: results.avatar });
          setAvatar(results.avatar);
          console.warn(results);
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
        <Toaster position="top-center" reverseOrder />
      </div>
      {!open ? (
        <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
          <HeaderWithBurger />
          <div className="flex justify-center items-center flex-col mt-[6rem]  ">
            <h2 className="font-main-font text-3xl mb-[1rem]">
              Modifier Profil
            </h2>

            {/* <div className="border-2 border-white w-[20%] bg-graph1 h-[10vh] bg-cover rounded-full " /> */}
            <form encType="file" onSubmit={handleSubmit}>
              <div className="flex justify-center items-center flex-col mt-[6rem]  ">
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="border-2 border-white w-[15%] bg-graph1 h-[40%] rounded-full"
                />
                <input
                  name="avatar"
                  className="text-black bg-gradient-to-tl from-pink to-lightblue rounded-xl font-main-font text-[15px] py-1 px-3 mt-4 mb-5"
                  type="file"
                  ref={avatarRef}
                  id="file"
                  onChange={(e) => setAvatar(e.target.files[0])}
                />
                <button
                  className="bg-gradient-to-tl from-pink to-lightblue rounded-xl font-main-font text-[16px] py-1 px-3 mt-4 mb-5 text-black"
                  type="submit"
                >
                  Envoyer
                </button>
                <p>{msg}</p>
              </div>
            </form>
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
                      onChange={(e) => newUserPseudo(e)}
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
                      // onChange={(e) => setEmail(e.target.value)}
                      onChange={(e) => newUseremail(e)}
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
