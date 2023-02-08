import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { useCurrentUserContext } from "../../contexts/userContext";
import { useCurrentResponsiveContext } from "../../contexts/responsiveContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

function validatePassword(password) {
  const passwordPattern =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordPattern.test(password);
}
const GoodPassword = () => {
  toast("Le mot de passe est correct", {
    icon: "👍",
  });
};
const WrongPassword = () => {
  toast(
    "Le mot de passe doit contenir 8 caractère une majuscule un chiffre et un caratere spécial",
    {
      icon: "👎",
    }
  );
};

export default function BlocConnexion() {
  const navigate = useNavigate();
  const { setUser, setToken } = useCurrentUserContext();
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isDesktop, isMobile, isTablet, isLittleMobile } =
    useCurrentResponsiveContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      pseudo,
      password,
    });

    const requestOptions = {
      method: "POST",
      redirect: "follow",
      headers: myHeaders,
      body,
    };

    if ((email || pseudo) && password) {
      // on appelle le back
      fetch(`${backURL}/connexion`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setUser(result.users);
          setToken(result.token);
          navigate("/camera");
        })
        .catch(console.error);
      const isValid = validatePassword(password);
      if (isValid) {
        GoodPassword();
      } else {
        WrongPassword();
      }
    } else {
      console.warn("Please specify email or pseudo and password");
    }
  };

  const handleSubmitAdmin = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      pseudo,
      password,
    });

    const requestOptions = {
      method: "POST",
      redirect: "follow",
      headers: myHeaders,
      body,
    };

    if ((email || pseudo) && password) {
      // on appelle le back
      fetch(`${backURL}/connexion`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setUser(result.users);
          setToken(result.token);
          navigate("/Admin");
        })
        .catch(console.error);
    } else {
      console.warn("Please specify email or pseudo and password");
    }
  };
  const [showPassWord, setshowPassWord] = useState(true);

  return (
    <div>
      <div>
        <Toaster position="bottom-center" reverseOrder />
      </div>
      {isMobile && (
        <div className="p-5">
          <div className="p-0 flex min-h-full items-center justify-center ">
            <div className="py-12 px-4 backdrop-blur  w-full max-w-md space-y-8 rounded-md">
              <div>
                <h2 className="font-main-font mt-6 text-center text-[48px] font-bold text-white">
                  CONNEXION
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
                  <div className="mb-8">
                    <h2 className="font-secondary-font mt-6 text-left text-1xl  tracking-tight text-white">
                      Adresse e-mail ou Pseudo
                    </h2>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      onChange={(e) =>
                        setEmail(e.target.value) || setPseudo(e.target.value)
                      }
                      id="email-address"
                      name="email"
                      className="mt-1 relative block w-full appearance-none bg-transparent rounded-full border border-gray-300 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="burrito.koala@paradise.fr"
                    />
                  </div>

                  <label
                    htmlFor="password"
                    className="flex flex-col justify-center text-white "
                  >
                    Mot de passe
                    <div className=" mt-1 flex flex-row-reverse border rounded-[3rem] border-white h-[90%]">
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        name="password"
                        type={showPassWord ? "password" : "text"}
                        autoComplete="current-password"
                        required
                        className="relative block bg-transparent w-full appearance-none rounded-full border border-gray-300 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                      {showPassWord ? (
                        <svg
                          onClick={() => setshowPassWord(!showPassWord)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                          className="absolute w-6 h-6 mt-2 mr-4"
                        >
                          <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                      ) : (
                        <svg
                          onClick={() => setshowPassWord(!showPassWord)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                          className="absolute  w-6 h-6 mt-2 mr-4"
                        >
                          <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex justify-center w-full text-sm">
                    <div
                      aria-hidden="true"
                      onClick={() => navigate("/forgottenpassword")}
                      className="font-medium text-center text-white"
                    >
                      <span className="font-medium text-center text-white hover:text-indigo-500 ">
                        Mot de passe oublié ? clique{" "}
                        <span className="text-pink">ICI</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className=" w-2/3 font-main-font text-2xl group relative flex justify-center rounded-full border py-2 border-indigo-500/50 font-medium text-lightblue hover:bg-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className=" absolute inset-y-0 left-0 flex items-center pl-3" />
                    SE CONNECTER
                  </button>
                </div>
                <div>
                  <h2 className="font-secondary-font text-center mt-6 text-1xl  tracking-tight text-white">
                    Pas encore inscrit ?
                  </h2>
                </div>
                <div
                  aria-hidden="true"
                  className="text-sm text-center"
                  onClick={() => navigate("/inscription")}
                >
                  <span className="font-medium text-center text-white hover:text-indigo-500">
                    Inscris toi <span className="text-pink">ICI</span>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {isTablet && (
        <div className="p-5 text-3xl">
          <div className="p-0 flex min-h-full items-center justify-center ">
            <div className="py-12 px-4 backdrop-blur  w-full max-w-md space-y-8 rounded-md">
              <div>
                <h2 className="font-main-font mt-6 text-center text-7xl font-bold text-white">
                  CONNEXION
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
                  <div className="mb-8">
                    <h2 className="font-secondary-font mt-6 text-left text-1xl  tracking-tight text-white mb-4">
                      Adresse e-mail ou Pseudo
                    </h2>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      onChange={(e) =>
                        setEmail(e.target.value) || setPseudo(e.target.value)
                      }
                      id="email-address"
                      name="email"
                      className="mt-1 relative block w-full appearance-none bg-transparent rounded-full border border-gray-300 px-3 py-5 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-2xl"
                      placeholder="burrito.koala@paradise.fr"
                    />
                  </div>

                  <label
                    htmlFor="password"
                    className="flex flex-col justify-center text-white  "
                  >
                    <h2 className="mb-4">Mot de passe</h2>
                    <div className=" mt-1 flex flex-row-reverse items-center border rounded-[3rem] border-white h-[90%]">
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        name="password"
                        type={showPassWord ? "password" : "text"}
                        autoComplete="current-password"
                        required
                        className="relative block bg-transparent w-full appearance-none rounded-full border border-gray-300 px-3 py-5 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-2xl"
                      />
                      {showPassWord ? (
                        <svg
                          onClick={() => setshowPassWord(!showPassWord)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                          className="absolute w-6 h-6 mt-2 mr-8"
                        >
                          <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                      ) : (
                        <svg
                          onClick={() => setshowPassWord(!showPassWord)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                          className="absolute  w-6 h-6 mt-2 mr-8"
                        >
                          <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex justify-center w-full">
                    <div
                      aria-hidden="true"
                      onClick={() => navigate("/forgottenpassword")}
                      className="font-medium text-center text-white"
                    >
                      <span className="font-medium text-center text-white hover:text-indigo-500 text-2xl">
                        Mot de passe oublié ? clique{" "}
                        <span className="text-pink">ICI</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className=" w-[80%] font-main-font text-5xl group relative flex justify-center rounded-full border py-4 border-indigo-500/50 font-medium text-lightblue hover:bg-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className=" absolute inset-y-0 left-0 flex items-center pl-3" />
                    SE CONNECTER
                  </button>
                </div>
                <div>
                  <h2 className="font-secondary-font text-center mt-6 text-1xl  tracking-tight text-white">
                    Pas encore inscrit ?
                  </h2>
                </div>
                <div
                  aria-hidden="true"
                  className="text-sm text-center"
                  onClick={() => navigate("/inscription")}
                >
                  <span className=" text-2xl font-medium text-center text-white hover:text-indigo-500">
                    Inscris toi <span className="text-pink">ICI</span>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {isLittleMobile && (
        <div>
          <div className="p-0 flex min-h-full items-center justify-center ">
            <div className="px-4 backdrop-blur max-w-md space-y-8 rounded-3xl pb-4 w-[95%]">
              <div>
                <h2 className="font-main-font mt-6 text-center text-[48px] font-bold text-white">
                  CONNEXION
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
                  <div className="mb-8">
                    <h2 className="font-secondary-font mt-6 text-left text-1xl  tracking-tight text-white">
                      Adresse e-mail ou Pseudo
                    </h2>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      onChange={(e) =>
                        setEmail(e.target.value) || setPseudo(e.target.value)
                      }
                      id="email-address"
                      name="email"
                      className="mt-1 relative block w-full appearance-none bg-transparent rounded-full border border-gray-300 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="burrito.koala@paradise.fr"
                    />
                  </div>

                  <label
                    htmlFor="password"
                    className="flex flex-col justify-center text-white "
                  >
                    Mot de passe
                    <div className=" mt-1 flex flex-row-reverse border rounded-[3rem] border-white h-[90%]">
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        name="password"
                        type={showPassWord ? "password" : "text"}
                        autoComplete="current-password"
                        required
                        className="relative block bg-transparent w-full appearance-none rounded-full border border-gray-300 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                      {showPassWord ? (
                        <svg
                          onClick={() => setshowPassWord(!showPassWord)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                          className="absolute w-6 h-6 mt-2 mr-4"
                        >
                          <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                      ) : (
                        <svg
                          onClick={() => setshowPassWord(!showPassWord)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                          className="absolute  w-6 h-6 mt-2 mr-4"
                        >
                          <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex justify-center w-full">
                    <div
                      aria-hidden="true"
                      onClick={() => navigate("/forgottenpassword")}
                      className="font-medium text-center text-white"
                    >
                      <span className="font-medium text-center text-white hover:text-indigo-500">
                        Mot de passe oublié ? clique{" "}
                        <span className="text-pink">ICI</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className=" w-2/3 font-main-font text-2xl group relative flex justify-center rounded-full border py-2 border-indigo-500/50 font-medium text-lightblue hover:bg-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className=" absolute inset-y-0 left-0 flex items-center pl-3" />
                    SE CONNECTER
                  </button>
                </div>
                <div>
                  <h2 className="font-secondary-font text-center mt-6 text-1xl  tracking-tight text-white">
                    Pas encore inscrit ?
                  </h2>
                </div>
                <div
                  aria-hidden="true"
                  className="text-sm text-center"
                  onClick={() => navigate("/inscription")}
                >
                  <span className="font-medium text-center text-white hover:text-indigo-500">
                    Inscris toi <span className="text-pink">ICI</span>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {isDesktop && (
        <div className="p-5">
          <div className="p-0 flex w-full items-center justify-center ">
            <div className="py-8 px-[8rem] backdrop-blur-lg w-full rounded-3xl h-[60vh]">
              <div>
                <h2 className="font-main-font mt-6 text-center text-[58px] font-bold text-white">
                  CONNEXION
                </h2>
              </div>
              <form
                onSubmit={handleSubmitAdmin}
                className="mt-8 space-y-6"
                action="#"
                method="POST"
              >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="space-y-px rounded-md shadow-sm">
                  <div className="mb-8">
                    <h2 className="font-secondary-font mt-6 text-left text-1xl  tracking-tight text-white">
                      Adresse e-mail ou Pseudo
                    </h2>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      onChange={(e) =>
                        setEmail(e.target.value) || setPseudo(e.target.value)
                      }
                      id="email-address"
                      name="email"
                      className="mt-1 relative block w-full appearance-none bg-transparent rounded-full border border-gray-300 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="burrito.koala@paradise.fr"
                    />
                  </div>

                  <label
                    htmlFor="password"
                    className="flex flex-col justify-center text-white "
                  >
                    Mot de passe
                    <div className=" mt-1 mb-10 flex flex-row-reverse border rounded-[3rem] border-white h-[90%]">
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        name="password"
                        type={showPassWord ? "password" : "text"}
                        autoComplete="current-password"
                        required
                        className="relative block bg-transparent w-full appearance-none rounded-full border border-gray-300 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                      {showPassWord ? (
                        <svg
                          onClick={() => setshowPassWord(!showPassWord)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                          className="absolute w-6 h-6 mt-2 mr-2"
                        >
                          <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                      ) : (
                        <svg
                          onClick={() => setshowPassWord(!showPassWord)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                          className="absolute  w-6 h-6 mt-2 mr-2"
                        >
                          <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </div>
                  </label>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className=" font-main-font text-3xl flex justify-center rounded-full border py-4 w-[90%] border-indigo-500/50 font-medium text-lightblue hover:bg-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    SE CONNECTER
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
