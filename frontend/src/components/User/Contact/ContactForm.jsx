import React, { useState } from "react";

function ContactForm() {
  const [setFirstName] = useState("");
  const [setLastName] = useState("");
  const [setEmail] = useState("");
  const [setmessage] = useState("");

  const sendForm = () => {};

  return (
    <div className="flex flex-col justify-center items-center  backdrop-blur-sm rounded-[3rem] mt-2 ml-2 w-[95%]">
      <h1 className="text-white font-main-font text-4xl mb-5 mt-4">
        NOUS CONTACTER
      </h1>
      <form
        onSubmit={sendForm}
        className="flex flex-col justify-center items-center space-y-5 mb-4"
      >
        <label className="flex flex-col justify-center text-white">
          Adresse email
          <div className="flex flex-row-reverse border rounded-[3rem] border-white h-[90%]">
            <input
              onChange={setEmail}
              type="text"
              name="Adresse-email"
              id="email"
              className="form-control relative block w-full appearance-none bg-transparent rounded-full border border-gray-300 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </label>
        <label className="flex flex-col justify-center text-white">
          Prénom
          <div className="flex flex-row-reverse border rounded-[3rem] border-white h-[90%]">
            <input
              onChange={setFirstName}
              type="text"
              name="firstname"
              id="firstName"
              className="form-control relative block w-full appearance-none bg-transparent rounded-full border border-gray-300 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </label>
        <label className="flex flex-col justify-center text-white">
          Nom
          <div className="flex flex-row-reverse border rounded-[3rem] border-white h-[90%]">
            <input
              onChange={setLastName}
              type="text"
              name="lastname"
              id="lastName"
              className="form-control relative block w-full appearance-none bg-transparent rounded-full border border-gray-300 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </label>
        <label className="flex flex-col justify-center text-white h-[10rem]">
          Ton message
          <div className="flex flex-row-reverse align-baseline border rounded-[1.75rem] border-white h-[90%]">
            <textarea
              onChange={setmessage}
              type="text"
              name="message"
              id="message"
              className="form-control block w-[17rem] appearance-none bg-transparent rounded-[1.75rem] px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </label>

        <button
          type="submit"
          className="bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-[32px] py-1 px-6 "
        >
          ENVOYER
        </button>
      </form>
    </div>
  );
}
export default ContactForm;
