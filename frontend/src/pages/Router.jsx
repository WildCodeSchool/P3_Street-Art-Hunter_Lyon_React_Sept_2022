import React from "react";
import { Route, Routes } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/userContext";

import AdminUser from "./Admin/AdminUser";
import CreateUser from "./Admin/CreateUser";
import Dashboard from "./Admin/Dashboard";
import ModifUser from "./Admin/ModifUser";
import Registration from "./Global/ Registration";
import Connexion from "./Global/Connexion";
import Error from "./Global/Error";
import Protected from "./Protected";
import Badges from "./User/Badges";
import Camera from "./User/Camera";
import Contact from "./User/Contact";
import CreateWork from "./User/CreateWork";
import Favoris from "./User/Favoris";
import GalleryAll from "./User/GalleryAll";
import GalleryLive from "./User/GalleryLive";
import Help from "./User/Help";
import Home from "./User/Home";
import Map from "./User/Map";
import Menu from "./User/Menu";
import MyGallery from "./User/MyGallery";
import PictureValidation from "./User/PictureValidation";
import Profil from "./User/Profil";
import Scores from "./User/Scores";
import Stepper from "./User/Stepper";

export default function Router() {
  const { user } = useCurrentUserContext();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/inscription" element={<Registration />} />
      <Route path="/stepper" element={<Stepper />} />
      <Route
        path="/scores"
        element={
          <Protected verifyCondition={user.id}>
            <Scores />
          </Protected>
        }
      />
      <Route
        path="/menu"
        element={
          <Protected verifyCondition={user.id}>
            <Menu />
          </Protected>
        }
      />
      <Route
        path="/help"
        element={
          <Protected verifyCondition={user.id}>
            <Help />
          </Protected>
        }
      />
      <Route
        path="/creatework"
        element={
          <Protected verifyCondition={user.id}>
            <CreateWork />
          </Protected>
        }
      />
      <Route path="/galerie/live" element={<GalleryLive allOrLive="live" />} />
      <Route
        path="/map"
        element={
          <Protected verifyCondition={user.id}>
            <Map />
          </Protected>
        }
      />
      <Route
        path="/profil"
        element={
          <Protected verifyCondition={user.id}>
            <Profil />
          </Protected>
        }
      />
      <Route
        path="/favoris"
        element={
          <Protected verifyCondition={user.id}>
            <Favoris />
          </Protected>
        }
      />
      <Route
        path="/magalerie"
        element={
          <Protected verifyCondition={user.id}>
            <MyGallery />
          </Protected>
        }
      />
      <Route
        path="/badges"
        element={
          <Protected verifyCondition={user.id}>
            <Badges />
          </Protected>
        }
      />
      <Route
        path="/camera"
        element={
          <Protected verifyCondition={user.id}>
            <Camera />
          </Protected>
        }
      />
      <Route path="/galerie/all" element={<GalleryAll allOrLive="all" />} />
      <Route
        path="/Contact"
        element={
          <Protected verifyCondition={user.id}>
            <Contact />
          </Protected>
        }
      />
      <Route
        path="/galerie/all/oeuvres"
        element={
          <Protected verifyCondition={user.id}>
            <GalleryAll allOrLive="all" />
          </Protected>
        }
      />
      <Route
        path="/galerie/all/shop"
        element={
          <Protected verifyCondition={user.id}>
            <GalleryAll allOrLive="all" />
          </Protected>
        }
      />
      <Route
        path="/galerie/all/artistes"
        element={
          <Protected verifyCondition={user.id}>
            <GalleryAll allOrLive="all" />
          </Protected>
        }
      />
      <Route
        path="/galerie/live"
        element={
          <Protected verifyCondition={user.id}>
            <GalleryLive allOrLive="live" />
          </Protected>
        }
      />
      <Route
        path="/validation"
        element={
          <Protected verifyCondition={user.id}>
            <PictureValidation />
          </Protected>
        }
      />
      {user.id && user.is_admin === 1 && (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
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
        </>
      )}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}