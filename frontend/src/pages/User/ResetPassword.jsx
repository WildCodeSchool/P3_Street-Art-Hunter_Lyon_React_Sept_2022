import React from "react";
import ResetPasswordForm from "../../components/User/Contact/ResetPasswordForm";

import Header from "../../components/Global/Header";

function NewPassword() {
  return (
    <div className="bg-main-background bg-cover w-full h-screen">
      <Header />
      <ResetPasswordForm />
    </div>
  );
}

export default NewPassword;
