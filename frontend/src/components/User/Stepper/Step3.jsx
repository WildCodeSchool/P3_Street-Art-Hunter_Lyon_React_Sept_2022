import React from "react";
import { NavLink } from "react-router-dom";
import DisabledNext from "../../../assets/DisabledNext.svg";
import Previous from "../../../assets/Previous.svg";
import { useCurrentResponsiveContext } from "../../../contexts/responsiveContext";

function Step3({ step, setStep }) {
  const { isMobile, isTablet, isLittleMobile } = useCurrentResponsiveContext();

  const prevStep = () => {
    setStep(step - 1);
  };
  return (
    <div>
      {isLittleMobile && (
        <div className="absolute bottom-0 bg-fondStepper bg-cover bg-no-repeat flex flex-col items-center justify-around ">
          <div className="flex flex-col inset-x-0 bottom-0">
            <div className="absolute  bg-step3 h-[17vh] w-[100%] bg-contain bg-center bg-no-repeat mt-[11rem]" />
            <p className="font-main-font  text-center text-2xl mt-[19rem] mb-[3rem] px-10 fit">
              Débusquer les oeuvres, accumuler les points, gravisser les
              échelons pour devenir le chasseur ultime du street art lyonnais !
            </p>

            <div className="absolute bottom-0  flex items-center justify-center w-full space-x-[4.5rem] mb-[4rem]">
              <button type="button" className="" onClick={prevStep}>
                <div className="bg-gradient-to-b from-pink to-lightblue rounded-[100%]  w-[3.6rem]  h-[3.6rem] p-[0.2rem]">
                  <div className="w-full h-full rounded-[100%] bg-gradient-to-b from-bottomdark to-[#454377] flex justify-center items-center">
                    <img
                      className="w-6 h-6"
                      src={Previous}
                      alt="Previous button"
                    />
                  </div>
                </div>
              </button>
              <div className="flex py-[1.45rem] space-x-[0.3rem] justify-center items-center">
                <div className="border-2 bg-gray-400 h-[0.75rem] w-[0.75rem] rounded-full border-gray-400" />
                <div className="border-2 bg-gray-400 h-[0.75rem] w-[0.75rem] rounded-full border-gray-400" />
                <div className="border-2 bg-black h-[0.75rem] w-[0.75rem] rounded-full border-black ml-[0.30rem]" />
              </div>

              <button type="button" className="cursor-default">
                <div className="bg-gray-100 rounded-[100%]  w-[3.6rem]  h-[3.6rem] p-[0.2rem]">
                  <div className="w-full h-full rounded-[100%] bg-gray-100 flex justify-center items-center">
                    <img
                      className="w-6 h-6"
                      src={DisabledNext}
                      alt="Next button"
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center align-middle mt-[1.75rem] pb-[0.55rem]">
            <NavLink to="/inscription">
              <button
                type="button"
                className="bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-4xl py-1 px-6 relative bottom-3"
              >
                S'inscrire
              </button>
            </NavLink>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="absolute bottom-0 bg-fondStepper bg-cover bg-no-repeat flex flex-col items-center justify-around ">
          <div className="flex flex-col inset-x-0 bottom-0">
            <div className="absolute  bg-step3 h-[15vh] w-[100%] bg-contain bg-center bg-no-repeat mt-[12.5rem]" />
            <p className="font-main-font  text-center text-2xl mt-[23rem] mb-[3rem] px-10 fit">
              Débusquer les oeuvres, accumuler les points, gravisser les
              échelons pour devenir le chasseur ultime du street art lyonnais !
            </p>

            <div className="absolute bottom-0  flex items-center justify-center w-full space-x-[4.5rem] mb-[4rem]">
              <button type="button" className="" onClick={prevStep}>
                <div className="bg-gradient-to-b from-pink to-lightblue rounded-[100%]  w-[3.6rem]  h-[3.6rem] p-[0.2rem]">
                  <div className="w-full h-full rounded-[100%] bg-gradient-to-b from-bottomdark to-[#454377] flex justify-center items-center">
                    <img
                      className="w-6 h-6"
                      src={Previous}
                      alt="Previous button"
                    />
                  </div>
                </div>
              </button>
              <div className="flex py-[1.45rem] space-x-[0.3rem] justify-center items-center">
                <div className="border-2 bg-gray-400 h-[0.75rem] w-[0.75rem] rounded-full border-gray-400" />
                <div className="border-2 bg-gray-400 h-[0.75rem] w-[0.75rem] rounded-full border-gray-400" />
                <div className="border-2 bg-black h-[0.75rem] w-[0.75rem] rounded-full border-black ml-[0.30rem]" />
              </div>

              <button type="button" className="cursor-default">
                <div className="bg-gray-100 rounded-[100%]  w-[3.6rem]  h-[3.6rem] p-[0.2rem]">
                  <div className="w-full h-full rounded-[100%] bg-gray-100 flex justify-center items-center">
                    <img
                      className="w-6 h-6"
                      src={DisabledNext}
                      alt="Next button"
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center align-middle mt-[1.75rem] pb-[0.55rem]">
            <NavLink to="/inscription">
              <button
                type="button"
                className="bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-4xl py-1 px-6 relative bottom-3"
              >
                S'inscrire
              </button>
            </NavLink>
          </div>
        </div>
      )}
      {isTablet && (
        <div className="absolute bottom-0 bg-fondStepper bg-cover bg-no-repeat flex flex-col items-center justify-around ">
          <div className="flex flex-col inset-x-0 bottom-0">
            <div className="absolute  bg-step3 h-[20vh] w-[100%] bg-contain bg-center bg-no-repeat mt-[26rem]" />
            <p className="font-main-font  text-center text-5xl mt-[44rem] mb-[4rem] px-10 fit">
              Débusquer les oeuvres, accumuler les points, gravisser les
              échelons pour devenir le chasseur ultime du street art lyonnais !
            </p>

            <div className="absolute bottom-0  flex items-center justify-center w-full space-x-[4.5rem] mb-[4rem]">
              <button type="button" className="" onClick={prevStep}>
                <div className="bg-gradient-to-b from-pink to-lightblue rounded-[100%]  w-[3.6rem]  h-[3.6rem] p-[0.2rem]">
                  <div className="w-full h-full rounded-[100%] bg-gradient-to-b from-bottomdark to-[#454377] flex justify-center items-center">
                    <img
                      className="w-6 h-6"
                      src={Previous}
                      alt="Previous button"
                    />
                  </div>
                </div>
              </button>
              <div className="flex py-[1.45rem] space-x-[0.3rem] justify-center items-center">
                <div className="border-2 bg-gray-400 h-[0.75rem] w-[0.75rem] rounded-full border-gray-400" />
                <div className="border-2 bg-gray-400 h-[0.75rem] w-[0.75rem] rounded-full border-gray-400" />
                <div className="border-2 bg-black h-[0.75rem] w-[0.75rem] rounded-full border-black ml-[0.30rem]" />
              </div>

              <button type="button" className="cursor-default">
                <div className="bg-gray-100 rounded-[100%]  w-[3.6rem]  h-[3.6rem] p-[0.2rem]">
                  <div className="w-full h-full rounded-[100%] bg-gray-100 flex justify-center items-center">
                    <img
                      className="w-6 h-6"
                      src={DisabledNext}
                      alt="Next button"
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center align-middle mt-[1.75rem] pb-[0.55rem]">
            <NavLink to="/inscription">
              <button
                type="button"
                className="bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-4xl py-1 px-6 relative bottom-3"
              >
                S'inscrire
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default Step3;
