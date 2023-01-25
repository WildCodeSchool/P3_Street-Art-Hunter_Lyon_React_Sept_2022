import { BrowserRouter, Route, Routes } from "react-router-dom";

import Camera from "./pages/User/Camera";
import Connexion from "./pages/Global/Connexion";
import Favoris from "./pages/User/Favoris";
import GalleryLive from "./pages/User/GalleryLive";
import GalleryAll from "./pages/User/GalleryAll";
import Help from "./pages/User/Help";
import Home from "./pages/User/Home";
import MyGallery from "./pages/User/MyGallery";
import Map from "./pages/User/Map";
import Menu from "./pages/User/Menu";
import Profil from "./pages/User/Profil";
import Scores from "./pages/User/Scores";
import Stepper from "./pages/User/Stepper";
import Contact from "./pages/User/Contact";
import AdminUser from "./pages/Admin/AdminUser";
import Dashboard from "./pages/Admin/Dashboard";
import ModifUser from "./pages/Admin/ModifUser";
import Registration from "./pages/Global/ Registration";
import CreateUser from "./pages/Admin/CreateUser";
import CreateWork from "./pages/User/CreateWork";
import PictureValidation from "./pages/User/PictureValidation";
import Badges from "./pages/User/Badges";

import "./App.css";

import { CurrentUserContextProvider } from "./contexts/userContext";
import { CurrentPhotoContextProvider } from "./contexts/photoContext";

function App() {
  return (
    <BrowserRouter>
      <CurrentUserContextProvider>
        <CurrentPhotoContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/inscription" element={<Registration />} />
            <Route path="/stepper" element={<Stepper />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/scores" element={<Scores />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/help" element={<Help />} />
            <Route path="/creatework" element={<CreateWork />} />

            <Route
              path="/galerie/live"
              element={<GalleryLive allOrLive="live" />}
            />
            <Route path="/map" element={<Map />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/favoris" element={<Favoris />} />
            <Route path="/magalerie" element={<MyGallery />} />
            <Route path="/badges" element={<Badges />} />
            <Route path="/camera" element={<Camera />} />
            <Route
              path="/galerie/all"
              element={<GalleryAll allOrLive="all" />}
            />
            <Route path="/Contact" element={<Contact />} />

            <Route
              path="/galerie/all/oeuvres"
              element={<GalleryAll allOrLive="all" />}
            />
            <Route
              path="/galerie/all/shop"
              element={<GalleryAll allOrLive="all" />}
            />
            <Route
              path="/galerie/all/artistes"
              element={<GalleryAll allOrLive="all" />}
            />

            <Route
              path="/galerie/live"
              element={<GalleryLive allOrLive="live" />}
            />
            <Route path="/creatework" element={<CreateWork />} />
            <Route path="/validation" element={<PictureValidation />} />

            <Route path="/Admin-User" element={<AdminUser />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Admin-Scores" element={<Dashboard />} />
            <Route path="/Admin-Badges" element={<Dashboard />} />
            <Route path="/Admin-Messages" element={<Dashboard />} />
            <Route path="/Admin-Pictures" element={<Dashboard />} />
            <Route path="/Admin-Artist" element={<Dashboard />} />
            <Route path="/Admin-Shop" element={<Dashboard />} />
            <Route path="/Admin-Artwork" element={<Dashboard />} />
            <Route path="/Admin-Modif-User" element={<ModifUser />} />
            <Route path="/Admin-Create-User" element={<CreateUser />} />
          </Routes>
        </CurrentPhotoContextProvider>
      </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
