import LogoHome from "../../components/User/Home/LogoHome";
import ConnectLandpage from "../../components/User/Home/ConnectLandpage";

function Home() {
  return (
    <div className="bg-home-image bg-cover w-full h-screen">
      <LogoHome />
      <ConnectLandpage />
    </div>
  );
}

export default Home;
