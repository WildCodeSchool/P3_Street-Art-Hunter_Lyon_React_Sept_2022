import React from "react";
import { NavLink } from "react-router-dom";
import Next from "../../../assets/Next.svg";
import Previous from "../../../assets/Previous.svg";
import { useCurrentResponsiveContext } from "../../../contexts/responsiveContext";

function Step2({ step, setStep }) {
  const { isMobile, isTablet, isLittleMobile } = useCurrentResponsiveContext();
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  return (
    <div>
      {isLittleMobile && (
        <div className="absolute bottom-0 bg-fondStepper bg-cover bg-no-repeat flex flex-col items-center justify-around ">
          <div className="flex flex-col inset-x-0 bottom-0">
            <div className="absolute  bg-tel h-[17vh] w-[100%] bg-contain bg-center bg-no-repeat mt-[11rem]" />
            <p className="font-main-font  text-center text-2xl mt-[19rem] mb-[3rem] px-10 fit">
              Avec l’application vous pouvez prendre en photo des oeuvres, les
              modifier, ajouter des informations
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
                <div className="border-2 bg-black h-[0.75rem] w-[0.75rem] rounded-full border-black ml-[0.30rem]" />
                <div className="border-2 bg-gray-400 h-[0.75rem] w-[0.75rem] rounded-full border-gray-400" />
              </div>

              <button type="button" className="" onClick={nextStep}>
                <div className="bg-gradient-to-b from-pink to-lightblue rounded-[100%]  w-[3.6rem]  h-[3.6rem] p-[0.2rem]">
                  <div className="w-full h-full rounded-[100%] bg-gradient-to-b from-bottomdark to-[#454377] flex justify-center items-center">
                    <img className="w-6 h-6" src={Next} alt="Next button" />
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center align-middle mt-[2rem]">
            <NavLink to="/inscription">
              <div className="bg-gradient-to-tl from-bottomdark to-bottomlight rounded-3xl font-main-font text-2xl p-[2px] w-24 h-10 relative bottom-0 mb-[1rem]">
                <div className="bg-white w-full h-full rounded-3xl text-center">
                  <button type="button">Passer</button>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="absolute bottom-0 bg-fondStepper bg-cover bg-no-repeat flex flex-col items-center justify-around ">
          <div className="flex flex-col inset-x-0 bottom-0">
            <div className="absolute  bg-tel h-[15vh] w-[100%] bg-contain bg-center bg-no-repeat mt-[12.5rem]" />
            <p className="font-main-font  text-center text-2xl mt-[23rem] mb-[3rem] px-10 fit">
              Avec l’application vous pouvez prendre en photo des oeuvres, les
              modifier, ajouter des informations
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
                <div className="border-2 bg-black h-[0.75rem] w-[0.75rem] rounded-full border-black ml-[0.30rem]" />
                <div className="border-2 bg-gray-400 h-[0.75rem] w-[0.75rem] rounded-full border-gray-400" />
              </div>

              <button type="button" className="" onClick={nextStep}>
                <div className="bg-gradient-to-b from-pink to-lightblue rounded-[100%]  w-[3.6rem]  h-[3.6rem] p-[0.2rem]">
                  <div className="w-full h-full rounded-[100%] bg-gradient-to-b from-bottomdark to-[#454377] flex justify-center items-center">
                    <img className="w-6 h-6" src={Next} alt="Next button" />
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center align-middle mt-[2rem]">
            <NavLink to="/inscription">
              <div className="bg-gradient-to-tl from-bottomdark to-bottomlight rounded-3xl font-main-font text-2xl p-[2px] w-24 h-10 relative bottom-0 mb-[1rem]">
                <div className="bg-white w-full h-full rounded-3xl text-center">
                  <button type="button">Passer</button>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      )}

      {isTablet && (
        <div className="absolute bottom-0 bg-fondStepper bg-cover bg-no-repeat flex flex-col items-center justify-around ">
          <div className="flex flex-col inset-x-0 bottom-0">
            <div className="absolute  bg-tel h-[20vh] w-[100%] bg-contain bg-center bg-no-repeat mt-[26rem]" />
            <p className="font-main-font  text-center text-5xl mt-[44rem] mb-[4rem] px-10 fit">
              Avec l’application vous pouvez prendre en photo des oeuvres, les
              modifier, ajouter des informations
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
                <div className="border-2 bg-black h-[0.75rem] w-[0.75rem] rounded-full border-black ml-[0.30rem]" />
                <div className="border-2 bg-gray-400 h-[0.75rem] w-[0.75rem] rounded-full border-gray-400" />
              </div>

              <button type="button" className="" onClick={nextStep}>
                <div className="bg-gradient-to-b from-pink to-lightblue rounded-[100%]  w-[3.6rem]  h-[3.6rem] p-[0.2rem]">
                  <div className="w-full h-full rounded-[100%] bg-gradient-to-b from-bottomdark to-[#454377] flex justify-center items-center">
                    <img className="w-6 h-6" src={Next} alt="Next button" />
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center align-middle mt-[2rem]">
            <NavLink to="/inscription">
              <div className="bg-gradient-to-tl from-bottomdark to-bottomlight rounded-3xl font-main-font text-3xl p-[2px] w-40 h-12 relative bottom-0 mb-[1rem] flex items-center justify-center">
                <div className="bg-white w-full h-full rounded-3xl text-center text-4xl">
                  <button type="button">Passer</button>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default Step2;
