import React from "react";
import { NavLink } from "react-router-dom";

function Step1({ setStep, step }) {
  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="slide-in-bottom absolute bottom-0 bg-fondStepper bg-cover bg-no-repeat w-screen h-5/6  flex flex-col items-center justify-around ">
      <div className="flex flex-col inset-x-0 bottom-0">
        <div className="absolute top-8  bg-lyon h-[25vh] w-full bg-contain bg-center bg-no-repeat mt-[8rem]" />
        <p className="font-main-font  text-center text-2xl mt-[22rem] px-10 min-h-fit">
          Street Art Hunter est un jeu de chasse aux oeuvres de Street Art dans
          la métropole Lyonnaise
        </p>

        <div className="absolute bottom-0  flex items-center justify-center w-full space-x-[4.5rem] mb-[6rem]">
          <button type="button" className="cursor-default">
            <div className="bg-gray-100 rounded-[100%]  w-[3.6rem]  h-[3.6rem] p-[0.2rem] ">
              <div className="w-full h-full rounded-[100%] bg-gray-100 flex justify-center items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="gray"
                  className="w-6 h-6 color-gray-700"
                >
                  <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </div>
            </div>
          </button>
          <div className="flex py-[1.45rem] space-x-[0.3rem] justify-center items-center">
            <div className="border-2 bg-black h-[0.75rem] w-[0.75rem] rounded-full border-black ml-[0.30rem]" />
            <div className="border-2 bg-gray-400 h-[0.75rem] w-[0.75rem] rounded-full border-gray-400" />
            <div className="border-2 bg-gray-400 h-[0.75rem] w-[0.75rem] rounded-full border-gray-400" />
          </div>

          <button type="button" className="" onClick={nextStep}>
            <div className="bg-gradient-to-b from-pink to-lightblue rounded-[100%]  w-[3.6rem]  h-[3.6rem] p-[0.2rem]">
              <div className="w-full h-full rounded-[100%] bg-gradient-to-b from-bottomdark to-[#454377] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center align-middle mt-[2rem]">
        <NavLink to="/inscription">
          <div className="bg-gradient-to-tl from-bottomdark to-bottomlight rounded-3xl font-main-font text-2xl p-[2px] w-24 h-10 relative bottom-0 ">
            <div className="bg-white w-full h-full rounded-3xl text-center">
              <button type="button" className="mt-[1px]">
                Passer
              </button>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Step1;
