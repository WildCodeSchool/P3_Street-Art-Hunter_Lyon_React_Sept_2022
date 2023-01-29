import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useCurrentResponsiveContext } from "../../../contexts/responsiveContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

export default function ForgottenPassword() {
  const { isMobile, isTablet, isLittleMobile } = useCurrentResponsiveContext();
  const notifySuccess = () => {
    toast("Un email a été envoyé sur votre boîte mail.", {
      icon: "📩",
    });
  };

  /* set email */
  const [email, setEmail] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    /* It's an object that will be sent in the body of request */
    const body = JSON.stringify({
      email,
    });

    /* When the user enter his email adress, we will begin all the middleware of the route /forgottenpassword */
    fetch(`${backURL}/forgottenpassword`, {
      method: "POST",
      redirect: "follow",
      body,
      headers: myHeaders,
    })
      .then(() => {
        notifySuccess();
      })
      .catch((error) => console.warn(error));
  };

  return (
    <div>
      {(isMobile || isLittleMobile) && (
        <div className="flex justify-center items-center h-[80vh] w-full mt-8">
          <Toaster position="top-center" reverseOrder />
          <div className="p-0 flex min-h-full items-center justify-center ">
            <div className="py-12 px-4 backdrop-blur-3xl  w-[95%] space-y-8 rounded-3xl">
              <div>
                <h2 className="font-main-font mt-6 text-center text-4xl font-bold text-white">
                  REINITIALISER MOT DE PASSE
                </h2>
              </div>
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
                action="#"
                method="POST"
              >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="space-y-px rounded-md shadow-sm">
                  <div>
                    <h2 className="font-secondary-font mt-6 mb-2 text-left text-1xl  tracking-tight text-white">
                      Adresse e-mail
                    </h2>
                    <label htmlFor="email-address" className="sr-only">
                      Adresse E-Mail
                    </label>
                    <input
                      id="email-address"
                      onChange={handleChangeEmail}
                      name="email"
                      className="relative block w-full appearance-none bg-transparent rounded-full border border-gray-300 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="burrito.koala@paradise.fr"
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className=" w-[40%] font-main-font text-3xl group relative flex justify-center rounded-full border py-2 border-indigo-500/50 font-medium text-lightblue hover:bg-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className=" absolute inset-y-0 left-0 flex items-center pl-3" />
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {isTablet && (
        <div className="flex justify-center items-center h-[80vh] w-full mt-8">
          <Toaster position="top-center" reverseOrder />
          <div className="p-0 flex min-h-full items-center justify-center w-full ">
            <div className="py-12 px-4 backdrop-blur-3xl  w-[95%] space-y-8 rounded-3xl h-[60vh]">
              <div>
                <h2 className="font-main-font mt-12 text-center text-6xl font-bold text-white mb-20">
                  REINITIALISER MOT DE PASSE
                </h2>
              </div>
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
                action="#"
                method="POST"
              >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="space-y-px rounded-md shadow-sm">
                  <div>
                    <h2 className="font-secondary-font mt-6 mb-8 text-left text-4xl  tracking-tight text-white">
                      Adresse e-mail
                    </h2>
                    <label htmlFor="email-address" className="sr-only">
                      Adresse E-Mail
                    </label>
                    <input
                      id="email-address"
                      onChange={handleChangeEmail}
                      name="email"
                      className="relative block w-full appearance-none bg-transparent rounded-full border border-gray-300 px-5 py-5 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-4xl"
                      placeholder="burrito.koala@paradise.fr"
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className=" w-[40%] font-main-font text-6xl group relative flex justify-center rounded-full border py-2 border-indigo-500/50 font-medium text-lightblue hover:bg-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-10"
                  >
                    <span className=" absolute inset-y-0 left-0 flex items-center pl-3" />
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
