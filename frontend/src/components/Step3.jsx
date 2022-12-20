import React from "react";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Step3({ step, setStep }) {
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  return (
    <div className="absolute bottom-0 bg-white w-screen h-4/6 rounded-t-[15%] flex flex-col items-center justify-around ">
      <div className="flex flex-col inset-x-0 bottom-0">
        <div className="absolute top-1 bg-step3 bg-top bg-contain h-[25vh] w-full bg-no-repeat mt-[1rem]" />
        <p className="font-main-font text-center text-2xl mt-[14rem] pr-12 pl-12">
          Débusquer les oeuvres, accumuler les points, gravisser les échelons
          pour devenir le chasseur ultime de street art lyonnais !
        </p>

        <div className="absolute bottom-0  flex items-center justify-center w-full space-x-[4.5rem] mb-[6rem]">
          <button type="button" className="" onClick={prevStep}>
            <div className="bg-gradient-to-b from-pink to-lightblue rounded-[100%]  w-[3.6rem]  h-[3.6rem] p-[0.2rem]">
              <div className="w-full h-full rounded-[100%] bg-gradient-to-b from-bottomdark to-[#454377] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="White"
                  className="w-6 h-6"
                >
                  <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </div>
            </div>
          </button>
          <div className="flex py-[1.45rem] space-x-[0.3rem] justify-center items-center">
            <div className="border-2 bg-gray-300 h-[0.75rem] w-[0.75rem] rounded-full border-gray-300" />
            <div className="border-2 bg-gray-300 h-[0.75rem] w-[0.75rem] rounded-full border-gray-300" />
            <div className="border-2 bg-black h-[0.75rem] w-[0.75rem] rounded-full border-black ml-[0.30rem]" />
            <div className="border-2 bg-gray-300 h-[0.75rem] w-[0.75rem] rounded-full border-gray-300" />
          </div>

          <button type="button" className="border" onClick={nextStep}>
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
      <div className="flex justify-center items-center align-middle mt-[1.75rem] pb-[0.55rem]">
        <NavLink to="/inscription">
          <input
            type="submit"
            value="Passer"
            className="bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-[22px] py-1 px-6 "
          />
        </NavLink>
      </div>
    </div>
  );
}

export default Step3;
