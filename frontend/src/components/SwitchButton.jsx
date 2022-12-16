import React from "react";

export default function SwitchButton({
  isActive,
  setIsActive,
  content,
  styleModif,
  bgColor,
}) {
  return (
    <div>
      {isActive === content ? (
        <button
          type="button"
          className={`from-lightblue bg-gradient-to-br to-pink h-[48px] w-[93px] min-w-fit px-2 rounded-3xl text-black text-3xl font-main-font ${styleModif}`}
        >
          {content}
        </button>
      ) : (
        <div
          className={`from-lightblue bg-gradient-to-br to-pink h-[48px] w-[93px] min-w-fit rounded-3xl p-[2px] ${styleModif}`}
        >
          <button
            type="button"
            className={`bg-${bgColor}  h-full w-full min-w-fit px-2 rounded-3xl text-white text-3xl font-main-font ${styleModif}`}
            onClick={() => {
              setIsActive(content);
            }}
          >
            {content}
          </button>
        </div>
      )}
    </div>
  );
}
