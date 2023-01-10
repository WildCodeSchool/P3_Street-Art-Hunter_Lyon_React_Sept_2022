import React, { useEffect, useState } from "react";

const backURL = import.meta.env.VITE_BACKEND_URL;

export default function LeaderBoard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch(`${backURL}/leader`)
      .then((result) => result.json())
      .then((result) => {
        setLeaders(result);
      });
  }, []);
  return (
    <div className="text-white font-main-font h-[18rem] overflow-auto border-y-[1px] border-white">
      <table className="w-screen text-xl backdrop-blur-sm">
        <thead />
        <tbody>
          {leaders.map((user, index) => (
            <tr
              key={user.pseudo}
              className="bg-lightblue bg-opacity-60 h-[3.5rem] border-t-[1px] border-opacity-60 border-white"
            >
              <td className="pl-2 flex h-[3.5rem] items-center justify-start pr-1 text-2xl w-[10w]">
                {index + 1}
              </td>
              <td className="w-[15vw]">
                <img
                  src={user.avatar}
                  alt="Avatar"
                  className="h-[3rem] w-[3rem] bg-black border-[1px] border-white rounded-full"
                />
              </td>
              <td className="w-[35vw]">{user.pseudo}</td>
              <td className="w-[20vw]">{user.scorepoint}</td>
              <td className="w-[20vw]">{user.badges}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
