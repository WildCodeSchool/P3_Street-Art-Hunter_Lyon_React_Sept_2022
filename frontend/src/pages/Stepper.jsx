import React, { useState } from "react";
import Header from "@components/Header";
import Step1 from "@components/Step1";
import Step2 from "@components/Step2";
import Step3 from "@components/Step3";
import Step4 from "@components/Step4";

function Stepper() {
  const [step, setStep] = useState(1);
  console.warn(step);
  return (
    <div className="bg-main-background bg-cover w-full h-screen">
      <Header />
      {step === 1 ? <Step1 step={step} setStep={setStep} /> : ""}
      {step === 2 ? <Step2 step={step} setStep={setStep} /> : ""}
      {step === 3 ? <Step3 step={step} setStep={setStep} /> : ""}
      {step === 4 ? <Step4 step={step} setStep={setStep} /> : ""}
    </div>
  );
}

export default Stepper;
