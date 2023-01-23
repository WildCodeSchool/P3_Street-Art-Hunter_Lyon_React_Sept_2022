// /* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";
import modif from "../../assets/modif.svg";
import { useCurrentUserContext } from "../../contexts/userContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

export default function Profil() {
  const navigate = useNavigate();
  const avatarRef = useRef(null);
  const { user, setUser, token } = useCurrentUserContext();
  const [password, setPassword] = useState(user.password);
  const [pseudo, setPseudo] = useState(user.pseudo);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState(user.avatar);

  const [msg] = useState("Aucun upload effectué");

  const handleUpdate = async (e) => {
    e.preventDefault();
    const body = JSON.stringify({
      pseudo,
      email,
      password,
      avatar,
    });
    const formData = new FormData();
    formData.append("avatar", avatarRef.current.files[0]);

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body,
    };
    const response = await fetch(
      `${backURL}/user/${user.id}`,
      formData,
      requestOptions
    );
    if (response.ok) {
      const data = await response.json();
      console.warn("Success updating profile: ", data);
      // update the user context
      setUser(data);
      setTimeout(() => {
        navigate("/profil");
      }, 3000);
    } else {
      console.warn("Error updating profile: ", response);
    }
  };

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleUpdate}>
        <div className="bg-main-background text-white font-main-font bg-cover w-full h-screen">
          <HeaderWithBurger />
          <div className="flex justify-center items-center flex-col mt-[6rem]  ">
            <h2 className="font-main-font text-3xl mb-[1rem]">
              Modifier Profil
            </h2>

            {/* <div className="border-2 border-white w-[20%] bg-graph1 h-[10vh] bg-cover rounded-full " /> */}
            <img
              src=""
              alt="avatar"
              className="border-2 border-white w-[20%] bg-graph1 h-[10vh] rounded-full"
            />
            <input
              name="avatar"
              className="text-black bg-gradient-to-tl from-pink to-lightblue rounded-xl font-main-font text-[15px] py-1 px-3 mt-4 mb-5"
              type="file"
              ref={avatarRef}
              onChange={(e) => setAvatar(e.target.files[0])}
            />
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center items-start">
              <p className="mb-2 text-xl">Pseudo :</p>
              <div className="flex">
                <input
                  onChange={(e) => setPseudo(e.target.value)}
                  className="rounded-lg mb-2 text-black h-[4vh]"
                  type="text"
                  name="pseudo"
                  placeholder={user.pseudo}
                />
                <img src={modif} className="w-6 ml-4" alt="crayon icon" />
              </div>

              <p className="mb-2 text-xl">Email :</p>
              <div className="flex">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="rounded-lg mb-2 text-black h-[4vh]"
                  name="email"
                  placeholder={user.email}
                />
                <img src={modif} className="w-6 ml-4" alt="crayon icon" />
              </div>
              <p className="mb-2 text-xl">Nouveau Mot de passe :</p>
              <div className="flex">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-lg mb-2 text-black h-[4vh]"
                  type="password"
                  name="password"
                />
                <img src={modif} className="w-6 ml-4" alt="crayon icon" />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-tl from-pink to-lightblue rounded-xl font-main-font text-[16px] py-1 px-3 mt-4 mb-5 text-black"
              >
                <div className=" text-xl">
                  <input type="submit" value="Valider" />
                </div>
              </button>
              <p>{msg}</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
