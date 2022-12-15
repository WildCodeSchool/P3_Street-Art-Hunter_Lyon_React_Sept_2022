import React from "react";
import Header from "@components/Header";
import Step from "@components/Step";

function Stepper() {
  return (
    <div className="bg-main-background bg-cover w-full h-screen">
      <Header />
      <Step />
    </div>
  );
}

export default Stepper;
