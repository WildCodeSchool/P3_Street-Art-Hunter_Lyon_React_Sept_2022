/* eslint-disable import/no-unresolved */
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Badges from "@pages/Users/Badges";
import Camera from "@pages/Users/Camera";
import Connexion from "@pages/Global/Connexion";
import Favoris from "@pages/Users/Favoris";
import GalleryLive from "@pages/Users/GalleryLive";
import GalleryAll from "@pages/Users/GalleryAll";
import Help from "@pages/Users/Help";
import Home from "@pages/Users/Home";
import MyGallery from "@pages/Users/MyGallery";
import Map from "@pages/Users/Map";
import Menu from "@pages/Users/Menu";
import Profil from "@pages/Users/Profil";
import Scores from "@pages/Users/Scores";
import Stepper from "@pages/Users/Stepper";
import Contact from "@pages/Users/Contact";
import AdminUser from "@pages/Admin/AdminUser";
import Dashboard from "@pages/Admin/Dashboard";
import ModifUser from "@pages/Admin/ModifUser";
import Registration from "@pages/Global/ Registration";

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
          </Routes>
        </CurrentPhotoContextProvider>
      </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
