import LogoHome from "@components/LogoHome";
import ConnectLandpage from "@components/ConnectLandpage";

function Home() {
  return (
    <div className="bg-home-image bg-cover w-full h-screen">
      <LogoHome />
      <ConnectLandpage />
    </div>
  );
}

export default Home;
