import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TabletConnectLandpage from "../../components/User/Home/TabletConnectLandpage";
import cloud from "../../assets/cloud.svg";
import DeskConnectLandpage from "../../components/User/Home/DeskConnectLandpage";

import ConnectLandpage from "../../components/User/Home/ConnectLandpage";
import { useCurrentUserContext } from "../../contexts/userContext";
import { useCurrentResponsiveContext } from "../../contexts/responsiveContext";

function Home() {
  const { user } = useCurrentUserContext();
  const { isDesktop, isMobile, isTablet, isLittleMobile } =
    useCurrentResponsiveContext();
  const nav = useNavigate();

  useEffect(() => {
    if ((isMobile || isTablet || isLittleMobile) && user.id) {
      nav("/camera");
    } else if (isDesktop && user.id && user.is_admin) {
      nav("/admin");
    }
  });

  return (
    <div>
      {isDesktop && (
        <div className="bg-center bg-desk-background bg-cover bg-no-repeat w-[100%] h-[100vh] flex justify-center items-center">
          <img
            src={cloud}
            alt=""
            className="w-[12%] vibrate-1 absolute right-[4rem] top-[4rem]"
          />
          <img
            src={cloud}
            alt=""
            className="w-[12%] vibrate-1 absolute left-[4rem] top-[4rem]"
          />
          <img
            src={cloud}
            alt=""
            className="w-[10%] vibrate-2 absolute left-[20rem] top-[10rem]"
          />
          <img
            src={cloud}
            alt=""
            className="w-[10%] vibrate-2 absolute right-[20rem] top-[10rem]"
          />

          <div className="w-full h-[100vh] flex flex-col justify-center items-center">
            <div className=" bg-center bg-logo-home bg-contain bg-no-repeat w-[80%] h-[100vh] flicker-3 pt-[20rem]" />
            <div className="typewriter mb-12  h-[50vh] basur notre applickdrop-blur-sm  flex flex-col justify-center items-center font-main-font text-5xl text-white animate-type">
              <div className="">Scannez et commencez à gagner des points</div>
            </div>
            <DeskConnectLandpage />
          </div>
        </div>
      )}
      {isTablet && (
        <div className="bg-center bg-desk-background bg-cover bg-no-repeat w-[100%] h-[100vh] flex justify-center items-center">
          <div className="w-full h-[100vh] flex flex-col justify-center items-center">
            <div className=" bg-center bg-logo-home bg-contain bg-no-repeat w-[80%] h-[100vh] flicker-3 pt-[20rem]" />
            <TabletConnectLandpage />
          </div>
        </div>
      )}
      {isMobile && (
        <div className="bg-center bg-home-image bg-cover w-full h-screen">
          <div className="flex justify-center items-start pt-[16rem] pb-3">
            <div className=" bg-center bg-logo-home bg-contain bg-no-repeat w-full h-[50vh] flicker-3" />
          </div>
          <ConnectLandpage />
        </div>
      )}
      {isLittleMobile && (
        <div className="bg-center bg-home-image bg-cover w-full h-screen">
          <div className="flex justify-center items-start pt-[10rem] pb-3">
            <div className=" bg-center bg-logo-home bg-contain bg-no-repeat w-full h-[50vh] flicker-3" />
          </div>
          <ConnectLandpage />
        </div>
      )}
    </div>
  );
}

export default Home;
