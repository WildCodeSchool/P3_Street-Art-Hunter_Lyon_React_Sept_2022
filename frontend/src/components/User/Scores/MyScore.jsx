import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import isConnected from "@services/isConnected";
import Pierre from "../../../assets/Pierre.png";
import { useCurrentUserContext } from "../../../contexts/userContext";
import { useCurrentResponsiveContext } from "../../../contexts/responsiveContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

export default function MyScore() {
  const [userScoreData, setUserScoreData] = useState([]);
  const { isMobile, isTablet, isLittleMobile } = useCurrentResponsiveContext();
  const { user, token, setUser } = useCurrentUserContext();

  const navigate = useNavigate();

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  useEffect(() => {
    fetch(`${backURL}/score/${user.id}`, { headers: myHeaders })
      .then((result) => {
        if (!isConnected(result)) {
          localStorage.clear();
          setUser("");
          navigate("/");
        }
        return result;
      })
      .then((result) => result.json())
      .then((results) => {
        setUserScoreData(results[0]);
      });
    fetch(`${backURL}/rank/${user.id}`, { headers: myHeaders })
      .then((result) => result.json())
      .then((data) => {
        setUserScoreData(data[0]);
      });
  }, []);

  return (
    <div>
      {(isMobile || isLittleMobile) && (
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
            </tr>
          </tbody>
        </table>
      )}

      {isTablet && (
        <table className="w-screen text-4xl backdrop-blur-sm mt-8">
          <thead />
          <tbody>
            <tr className="bg-pink  bg-opacity-60 h-[5rem] border-b-[1px] border-t-[1px] border-opacity-60 border-white">
              <td className="pl-2 flex h-[3.5rem] items-center justify-start pr-1 text-4xl w-[10w]">
                {userScoreData.ranking}
              </td>
              <td className="w-[15vw]">
                <img
                  src={Pierre}
                  alt="Avatar"
                  className="h-[4rem] w-[4rem] bg-black border-[1px] border-white rounded-full"
                />
              </td>
              <td className="w-[35vw] text-3xl text-center">
                {userScoreData.pseudo}
              </td>
              <td className="w-[20vw] text-3xl  text-center">
                {userScoreData.scorepoint}
              </td>
              <td className="w-[20vw] text-3xl  text-center">
                {userScoreData.badges}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
