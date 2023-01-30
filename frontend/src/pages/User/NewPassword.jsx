import React from "react";
import ForgottenPassword from "../../components/User/Contact/ForgottenPassword";

import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";

function NewPassword() {
  return (
    <div className="bg-main-background bg-cover w-full h-screen">
      <HeaderWithBurger />
      <ForgottenPassword />
    </div>
  );
}

export default NewPassword;
