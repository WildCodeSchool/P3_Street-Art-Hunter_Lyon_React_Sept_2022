import React from "react";

function Step1() {
  return (
    <div className="absolute bottom-0 bg-white w-screen h-3/6 rounded-t-[15%] flex flex-col items-center justify-around ">
      <div className="flex flex-col inset-x-0 bottom-0 mr-2">
        <p className="font-main-font text-center text-xl mt-16">
          Street Art Hunter est un jeu de chasse aux oeuvres de Street Art dans
          la métropole Lyonnaise
        </p>
        <div className="flex justify-center items-center align-middle mt-20">
          <input
            type="submit"
            value="S'INSCRIRE"
            className="bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-[32px] py-1 px-6 "
          />
        </div>
        <div className="absolute bottom-0  flex space-x-72 ml-6 ">
          <button type="button" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
            </svg>
          </button>
          <button type="button" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step1;
