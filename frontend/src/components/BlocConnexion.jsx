/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function BlocConnexion() {
  return (
    <div className="p-5">
      <div className="p-0 flex min-h-full items-center justify-center ">
        <div className="py-12 px-4 backdrop-blur-sm border-solid border-2 border-indigo-500/50 border-sky-500 w-full max-w-md space-y-8 rounded-md">
          <div>
            <h2 className="font-main-font mt-6 text-center text-[48px] font-bold text-white">
              CONNEXION
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="space-y-px rounded-md shadow-sm">
              <div>
                <h2 className="font-secondary-font mt-6 text-left text-1xl  tracking-tight text-white">
                  Adresse e-mail ou Pseudo
                </h2>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none bg-transparent rounded-full border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="burrito.koala@paradise.fr"
                />
              </div>
              <h2 className="font-secondary-font mt-6 text-left text-1xl  tracking-tight text-white">
                Mot de passe
              </h2>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block bg-transparent w-full appearance-none rounded-full border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="........"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-center text-white text-white"
                >
                  Tu as oublié ton mot de passe ?
                </a>
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
            <div className="text-sm text-center">
              <a
                href="#"
                className="font-medium text-center text-white hover:text-indigo-500"
              >
                inscrit toi
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
