import ConnectLandpage from "../../components/User/Home/ConnectLandpage";

function Home() {
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
