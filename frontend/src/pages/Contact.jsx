import React from "react";
import ContactForm from "../components/ContactForm";
import HeaderWithBurger from "../components/HeaderWithBurger";

import { useCurrentUserContext } from "../contexts/userContext";
import Menu from "./Menu";

function Contact() {
  const { open } = useCurrentUserContext();
  return (
    <div>
      {!open ? (
        <div className="bg-main-background bg-cover w-full h-screen">
          <HeaderWithBurger />

          <ContactForm />
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
