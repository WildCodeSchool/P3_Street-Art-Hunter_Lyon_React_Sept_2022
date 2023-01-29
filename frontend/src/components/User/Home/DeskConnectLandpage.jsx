import React from "react";
import qrcode from "@assets/qrcode.png";

function DeskConnectLandpage() {
  return (
    <div className="flex justify-center items-center mb-8">
      <img src={qrcode} alt="" className="rounded-xl w-[70%]" />
    </div>
  );
}

export default DeskConnectLandpage;
