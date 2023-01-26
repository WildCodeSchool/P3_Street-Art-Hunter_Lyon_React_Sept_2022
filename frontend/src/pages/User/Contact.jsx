import React from "react";
import ContactForm from "../../components/User/Contact/ContactForm";
import HeaderWithBurger from "../../components/User/Global/HeaderWithBurger";

import { useCurrentUserContext } from "../../contexts/userContext";
import Menu from "./Menu";

function Contact() {
  const { open } = useCurrentUserContext();
  return (
    <div>
      {!open ? (
        <div className="bg-main-background bg-cover w-full h-screen">
          <HeaderWithBurger />
          <div className="mt-40">
            <ContactForm />
          </div>
        </div>
      ) : (
        <div className="bg-main-background backdrop-blur-md text-white font-main-font bg-cover w-full h-screen">
          <Menu />
        </div>
      )}
    </div>
  );
}

export default Contact;
