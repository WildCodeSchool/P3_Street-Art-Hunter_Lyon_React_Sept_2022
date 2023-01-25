import React from "react";

function ModalMessage() {
  return (
    <div className=" relative z-10 border justify-center rounded-md bg-white w-[60%] h-[40vh] top-8 shadow-2xl shadow-cyan-500/50">
      <div className=" flex flex-col justify-around">
        <div className="flex-1 mb-16 mt-16 ml-5">Username</div>
        <div className="flex-auto text-justify mx-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          ratione natus corporis, in, totam voluptatibus laudantium autem rem
          magni recusandae, inventore hic vero molestiae quibusdam voluptate
          neque aperiam vitae asperiores?
        </div>
      </div>
    </div>
  );
}

export default ModalMessage;
