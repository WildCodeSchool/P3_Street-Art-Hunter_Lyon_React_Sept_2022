import React from "react";
import ResetPasswordForm from "../../components/User/Contact/ResetPasswordForm";

import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";

function NewPassword() {
  return (
    <div className="bg-main-background bg-cover w-full h-screen">
      <HeaderWithBurger />
      <ResetPasswordForm />
    </div>
  );
}

export default NewPassword;
