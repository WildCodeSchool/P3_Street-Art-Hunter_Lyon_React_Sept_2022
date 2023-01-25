import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ConnectLandpage from "../../components/User/Home/ConnectLandpage";
import { useCurrentUserContext } from "../../contexts/userContext";

function Home() {
  const { user } = useCurrentUserContext();
  const nav = useNavigate();
  useEffect(() => {
    if (user.id) {
      nav("/camera");
    }
  });

  return (
    <div className="bg-home-image bg-cover w-full h-screen">
      <div className="logo-container flex justify-center ">
        <div className="bg-logo-home bg-cover w-full h-logo flicker-3" />
      </div>
      <ConnectLandpage />
    </div>
  );
}

export default Home;
