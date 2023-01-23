import React, { useState } from "react";
import Step2 from "../../components/User/Stepper/Step2";
import Step3 from "../../components/User/Stepper/Step3";
import Step1 from "../../components/User/Stepper/Step1";
import Header from "../../components/Global/Header";

function Stepper() {
  const [step, setStep] = useState(1);
  console.warn(step);
  return (
    <div className="bg-main-background bg-cover w-full h-screen">
      <Header />
      {step === 1 ? <Step1 step={step} setStep={setStep} /> : ""}
      {step === 2 ? <Step2 step={step} setStep={setStep} /> : ""}
      {step === 3 ? <Step3 step={step} setStep={setStep} /> : ""}
    </div>
  );
}

export default Stepper;
