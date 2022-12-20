import React from "react";

export default function MenuButton({ content }) {
  return (
    <button
      type="button"
      className="font-main-font text-[2rem] p-[0.5px] text-lightblue w-5/6 rounded-[10px] border-[2px] border-lightblue/40 h-12 flex items-center justify-center"
    >
      {content}
    </button>
  );
}
