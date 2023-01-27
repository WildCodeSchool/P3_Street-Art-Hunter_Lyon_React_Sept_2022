import React from "react";
import ForgottenPassword from "../../components/User/Contact/ForgottenPassword";

import Header from "../../components/Global/Header";

function NewPassword() {
  return (
    <div className="bg-main-background bg-cover w-full h-screen">
      <Header />
      <ForgottenPassword />
    </div>
  );
}

export default NewPassword;
