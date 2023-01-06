import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "@pages/ Registration";
import Badges from "@pages/Badges";
import Camera from "@pages/Camera";
import Connexion from "@pages/Connexion";
import Favoris from "@pages/Favoris";
import Galerie from "@pages/Galerie";
import Help from "@pages/Help";
import Home from "@pages/Home";
import MaGalerie from "@pages/MaGalerie";
import Map from "@pages/Map";
import Menu from "@pages/Menu";
import Profil from "@pages/Profil";
import Scores from "@pages/Scores";
import Stepper from "@pages/Stepper";

import "./App.css";

import Dashboard from "@pages/Dashboard";
import { CurrentUserContextProvider } from "./contexts/userContext";

function App() {
  return (
    <BrowserRouter>
      <CurrentUserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Registration />} />
          <Route path="/stepper" element={<Stepper />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scores" element={<Scores />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/help" element={<Help />} />
          <Route path="/galerie" element={<Galerie allOrLive="all" />} />
          <Route path="/map" element={<Map />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/magalerie" element={<MaGalerie />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/galerie/all" element={<Galerie allOrLive="all" />} />
          <Route
            path="/galerie/all/oeuvres"
            element={<Galerie allOrLive="all" />}
          />
          <Route
            path="/galerie/all/shop"
            element={<Galerie allOrLive="all" />}
          />
          <Route
            path="/galerie/all/artistes"
            element={<Galerie allOrLive="all" />}
          />
          <Route
            path="/galerie/live/artistes"
            element={<Galerie allOrLive="live" />}
          />
          <Route
            path="/galerie/live/oeuvres"
            element={<Galerie allOrLive="live" />}
          />
          <Route
            path="/galerie/live/shop"
            element={<Galerie allOrLive="live" />}
          />
          <Route path="/galerie/live" element={<Galerie allOrLive="live" />} />
        </Routes>
      </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
