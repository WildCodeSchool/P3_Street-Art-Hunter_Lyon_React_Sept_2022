import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LogoHome from "../../components/User/Home/LogoHome";
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
      <LogoHome />
      <ConnectLandpage />
    </div>
  );
}

export default Home;
