import React, { useEffect, useState } from "react";
import Pierre from "../../../assets/Pierre.png";
import { useCurrentUserContext } from "../../../contexts/userContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

export default function MyScore() {
  const [userScoreData, setUserScoreData] = useState([]);
  const { user } = useCurrentUserContext();
  useEffect(() => {
    fetch(`${backURL}/score/${user.id}`)
      .then((result) => result.json())
      .then((results) => {
        setUserScoreData(results[0]);
      });
    fetch(`${backURL}/rank/${user.id}`)
      .then((result) => result.json())
      .then((data) => {
        setUserScoreData(data[0]);
      });
  }, []);

  return (
    <div>
      <table className="w-screen text-xl backdrop-blur-sm">
        <thead />
        <tbody>
          <tr className="bg-pink  bg-opacity-60 h-[3.5rem] border-b-[1px] border-t-[1px] border-opacity-60 border-white">
            <td className="pl-2 flex h-[3.5rem] items-center justify-start pr-1 text-2xl w-[10w]">
              {userScoreData.ranking}
            </td>
            <td className="w-[15vw]">
              <img
                src={Pierre}
                alt="Avatar"
                className="h-[3rem] w-[3rem] bg-black border-[1px] border-white rounded-full"
              />
            </td>
            <td className="w-[35vw]">{userScoreData.pseudo}</td>
            <td className="w-[20vw]">{userScoreData.scorepoint}</td>
            <td className="w-[20vw]">{userScoreData.badges}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
