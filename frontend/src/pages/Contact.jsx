import React from "react";
import Header from "@components/Header";
import ContactForm from "@components/ContactForm";

function Contact() {
  return (
    <div className="bg-main-background bg-cover w-full h-screen">
      <Header />

      <ContactForm />
    </div>
  );
}

export default Contact;
