import React, { useEffect, useState } from "react";
import isConnected from "@services/isConnected";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../../../contexts/userContext";
import { useCurrentResponsiveContext } from "../../../contexts/responsiveContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

export default function LeaderBoard() {
  const [leaders, setLeaders] = useState([]);
  const { isMobile, isTablet, isLittleMobile } = useCurrentResponsiveContext();

  const { token, setUser } = useCurrentUserContext();
  const navigate = useNavigate();
  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });

  useEffect(() => {
    fetch(`${backURL}/leader`, { headers: myHeaders })
      .then((result) => result.json())
      .then((result) => {
        if (!isConnected(result)) {
          localStorage.clear();
          setUser("");
          navigate("/");
        }
        return result;
      })
      .then((result) => {
        setLeaders(result);
      });
  }, []);
  return (
    <div>
      {isMobile && (
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {isLittleMobile && (
        <div className="text-white font-main-font h-[28vh] overflow-auto border-y-[1px] border-white">
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {isTablet && (
        <div className="text-white font-main-font h-[17rem] overflow-auto border-y-[1px] border-white mt-8 mb-4">
          <table className="w-screen text-xl backdrop-blur-sm">
            <thead />
            <tbody>
              {leaders.map((user, index) => (
                <tr
                  key={user.pseudo}
                  className="bg-lightblue bg-opacity-60 h-[5rem] border-t-[1px] border-opacity-60 border-white flex justify-center items-center"
                >
                  <td className="pl-2 flex h-[3.5rem] items-center justify-start pr-8 text-3xl w-[10w]">
                    {index + 1}
                  </td>
                  <td className="w-[15vw]">
                    <img
                      src={user.avatar}
                      alt="Avatar"
                      className="h-[4rem] w-[4rem] bg-black border-[1px] border-white rounded-full"
                    />
                  </td>
                  <td className="w-[35vw] text-3xl text-center">
                    {user.pseudo}
                  </td>
                  <td className="w-[20vw] text-3xl text-center">
                    {user.scorepoint}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
