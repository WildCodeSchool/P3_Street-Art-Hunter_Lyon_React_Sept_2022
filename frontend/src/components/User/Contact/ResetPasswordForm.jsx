import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

import { useNavigate, useParams } from "react-router-dom";
import { useCurrentResponsiveContext } from "../../../contexts/responsiveContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

function ResetPasswordForm() {
  const { isMobile, isTablet, isLittleMobile } = useCurrentResponsiveContext();
  /* Toast */
  const problemReleved = () => {
    toast("Les deux mots de passe doivent être identiques !", {
      icon: "🚫",
    });
  };
  const success = () => {
    toast("mot de passe modifié avec success", {
      icon: "👍",
    });
  };

  /* I recup passwordToken from the URL */
  const { passwordtoken } = useParams();

  /* Import useNavigate to move after the login  */
  const navigate = useNavigate();

  /* set password */
  const [password, setPassword] = useState("");
  const [passwordVerification, setPasswordVerification] = useState("");

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const verifyPassword = (e) => {
    setPasswordVerification(e.target.value);
  };

  /* When I submit, I verify first if the two password are the same. If no, I don't accept to change the password, if yes, the fetch can be launched. */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordVerification !== password) problemReleved();
    else {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      /* It's an object that will be sent in the body of request */
      const body = JSON.stringify({
        password,
        passwordtoken,
      });

      /* function push user and token in the localstorage */
      fetch(`${backURL}/resetpassword`, {
        method: "POST",
        redirect: "follow",
        body,
        headers: myHeaders,
      })
        .then(() => {
          success();
        })
        .then(() => {
          navigate("/connexion");
        })
        .catch((error) => console.warn(error));
    }
  };

  return (
    <div>
      {(isMobile || isLittleMobile) && (
        <div className="flex justify-center items-center h-[90vh]">
          <div>
            <Toaster position="top-center" reverseOrder />
          </div>{" "}
          <div className="p-0 flex min-h-full items-center justify-center ">
            <div className="py-12 px-4 backdrop-blur-3xl border-solid  w-full max-w-md space-y-8 rounded-3xl">
              <div>
                <h1 className="font-main-font mt-6 text-center text-4xl font-bold text-white">
                  Modifier votre mot de passe
                </h1>
              </div>
              <form
                onSubmit={handleSubmit}
                className=" flex flex-col items-center justify-center  "
              >
                {" "}
                <div className=" flex-col w-2/3 justify-center mb-8 ">
                  {/* label and input */}
                  <div className="flex">
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={handleChangePassword}
                      id="password"
                      name="password"
                      placeholder="Entrez votre nouveau mot de passe"
                      className="relative block bg-transparent w-full appearance-none rounded-full border border-gray-300 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-[13px]"
                    />
                  </div>
                </div>
                <div className="flex-col  mt-8 justify-center w-2/3">
                  <div className="flex">
                    <input
                      type="password"
                      required
                      value={passwordVerification}
                      onChange={verifyPassword}
                      id="password"
                      name="password"
                      placeholder="Confirmer votre nouveau mot de passe"
                      className="relative block bg-transparent w-full appearance-none rounded-full border border-gray-300 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-[13px]"
                    />
                  </div>{" "}
                </div>
                <button
                  type="submit"
                  className=" w-2/3 font-main-font text-3xl group relative flex justify-center rounded-full border py-2 border-indigo-500/50 font-medium text-lightblue hover:bg-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-8"
                >
                  Sauvegarder
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {isTablet && (
        <div className="flex justify-center items-center h-[90vh] w-full">
          <div>
            <Toaster position="top-center" reverseOrder />
          </div>{" "}
          <div className="p-0 flex min-h-full items-center justify-center w-full ">
            <div className="py-12 px-4 backdrop-blur-3xl border-solid  w-[85%] h-[70vh] space-y-8 rounded-3xl flex flex-col justify-center items-center">
              <div>
                <h1 className="font-main-font mt-6 text-center text-6xl font-bold text-white mb-4">
                  Modifier votre mot de passe
                </h1>
              </div>
              <form
                onSubmit={handleSubmit}
                className=" flex flex-col items-center justify-center w-full "
              >
                {" "}
                <div className=" flex-col w-2/3 justify-center mb-8 ">
                  {/* label and input */}
                  <div className="flex">
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={handleChangePassword}
                      id="password"
                      name="password"
                      placeholder="Entrez votre nouveau mot de passe"
                      className="relative block bg-transparent w-full appearance-none rounded-full border border-gray-300 px-5 py-5 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-[28px]"
                    />
                  </div>
                </div>
                <div className="flex-col  mt-8 justify-center w-2/3">
                  <div className="flex">
                    <input
                      type="password"
                      required
                      value={passwordVerification}
                      onChange={verifyPassword}
                      id="password"
                      name="password"
                      placeholder="Confirmer votre nouveau mot de passe"
                      className="relative block bg-transparent w-full appearance-none rounded-full border border-gray-300 px-5 py-5 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-[28px] mb-12"
                    />
                  </div>{" "}
                </div>
                <button
                  type="submit"
                  className=" w-[50%] font-main-font text-5xl group relative flex justify-center rounded-full border py-5 border-indigo-500/50 font-medium text-lightblue hover:bg-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-8"
                >
                  Sauvegarder
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResetPasswordForm;
