import React from "react";
import Header from "@components/Header";
import Step1 from "@components/Step1";

function Stepper() {
  return (
    <div className="bg-main-background bg-cover w-full h-screen">
      <Header />
      <Step1 />
    </div>
  );
}

export default Stepper;
