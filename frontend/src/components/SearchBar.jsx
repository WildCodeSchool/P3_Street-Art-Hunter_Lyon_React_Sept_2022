import React from "react";

export default function SearchBar() {
  return (
    <div className="p-5 backdrop-blur-sm">
      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete=""
        required
        className="font-main-font relative block w-full appearance-none bg-transparent rounded-full border border-gray-300 px-3 py-2 text-lightblue placeholder-lightblue focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-"
        placeholder="recherche"
      />
    </div>
  );
}
