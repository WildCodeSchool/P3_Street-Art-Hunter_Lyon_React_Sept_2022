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
import BoardWork from "./Admin/BoardWork";
import AdminValidateWork from "./Admin/AdminValidateWork";
import NewPassword from "./User/NewPassword";
import ResetPassword from "./User/ResetPassword";
import AdminMessage from "./Admin/AdminMessage";
import AdminArtist from "./Admin/AdminArtist";
import AdminShop from "./Admin/PageAdShop";
import AdminArtWork from "./Admin/AdminArtWork";
import ArtWorkPictures from "./Admin/AdminArtWorkPictures";
import PictByWork from "./User/PictByWork";
import ProtectedDesk from "./ProtectedDesk";
import ConnexionAdmin from "./Admin/ConnexionAdmin";
import CreateShop from "./Admin/CreateShop";
import { useCurrentResponsiveContext } from "../contexts/responsiveContext";
import BoardReported from "./Admin/BoardReported";
import AdminReportPicture from "./Admin/AdminReportPicture";

export default function Router() {
  const { user } = useCurrentUserContext();

  const { isDesktop, isMobile, isTablet, isLittleMobile } =
    useCurrentResponsiveContext();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {isDesktop && (
        <>
          <Route
            path="/Admin"
            element={
              <ProtectedDesk verifyCondition={user.is_admin}>
                <Dashboard />
              </ProtectedDesk>
            }
          />

          <Route path="/connexion-admin" element={<ConnexionAdmin />} />

          <Route
            path="/Admin-User"
            element={
              <ProtectedDesk verifyCondition={user.is_admin}>
                <AdminUser />
              </ProtectedDesk>
            }
          />
          <Route
            path="/Admin-Scores"
            element={
              <ProtectedDesk verifyCondition={user.is_admin}>
                <Dashboard />
              </ProtectedDesk>
            }
          />
          <Route
            path="/Admin-Modif-User"
            element={
              <ProtectedDesk verifyCondition={user.is_admin}>
                <ModifUser />
              </ProtectedDesk>
            }
          />
          <Route
            path="/Admin-Create-User"
            element={
              <ProtectedDesk verifyCondition={user.is_admin}>
                <CreateUser />
              </ProtectedDesk>
            }
          />
          <Route
            path="/Admin-Works"
            element={
              <ProtectedDesk verifyCondition={user.is_admin}>
                <BoardWork />
              </ProtectedDesk>
            }
          />
          <Route
            path="/Admin-Validate-Work"
            element={
              <ProtectedDesk verifyCondition={user.is_admin}>
                <AdminValidateWork />
              </ProtectedDesk>
            }
          />
          <Route
            path="/Admin-Messages"
            element={
              <ProtectedDesk verifyCondition={user.is_admin}>
                <AdminMessage />
              </ProtectedDesk>
            }
          />
          <Route
            path="/Admin-Artist"
            element={
              <ProtectedDesk verifyCondition={user.is_admin}>
                <AdminArtist />
              </ProtectedDesk>
            }
          />
          <Route
            path="/Admin-Shop"
            element={
              <ProtectedDesk verifyCondition={user.is_admin}>
                <AdminShop />
              </ProtectedDesk>
            }
          />
          <Route
            path="/Admin-Create-Shop"
            element={
              <ProtectedDesk verifyCondition={user.is_admin}>
                <CreateShop />
              </ProtectedDesk>
            }
          />
          <Route
            path="/Admin-Artwork"
            element={
              <ProtectedDesk verifyCondition={user.is_admin}>
                <AdminArtWork />
              </ProtectedDesk>
            }
          />
          <Route
            path="/Admin-ArtworkPict"
            element={
              <ProtectedDesk verifyCondition={user.is_admin}>
                <ArtWorkPictures />
              </ProtectedDesk>
            }
          />
          <Route
            path="/Admin-Reported"
            element={
              <ProtectedDesk verifyCondition={user.is_admin}>
                <BoardReported />
              </ProtectedDesk>
            }
          />
          <Route
            path="/Admin-Report-Picture"
            element={
              <ProtectedDesk verifyCondition={user.is_admin}>
                <AdminReportPicture />
              </ProtectedDesk>
            }
          />
        </>
      )}

      {(isMobile || isTablet || isLittleMobile) && (
        <>
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
          <Route
            path="/galerie/live"
            element={<GalleryLive allOrLive="live" />}
          />
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
            path="/galerie/all/oeuvres/:workId"
            element={
              <Protected verifyCondition={user.id}>
                <PictByWork allOrLive="all" />
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
          <Route path="/forgottenpassword" element={<NewPassword />} />
          <Route
            path="/resetpassword/:passwordtoken"
            element={<ResetPassword />}
          />

          {user.id && user.is_admin === 1 && (
            <>
              <Route path="/Admin-User" element={<AdminUser />} />
              <Route path="/Admin" element={<Dashboard />} />
              <Route path="/Admin-Scores" element={<Dashboard />} />
              <Route path="/Admin-Badges" element={<Dashboard />} />
              <Route path="/Admin-Pictures" element={<Dashboard />} />
              <Route path="/Admin-Modif-User" element={<ModifUser />} />
              <Route path="/Admin-Create-User" element={<CreateUser />} />
              <Route path="/Admin-Works" element={<BoardWork />} />

              <Route
                path="/Admin-Validate-Work"
                element={<AdminValidateWork />}
              />
              <Route path="/Admin-Messages" element={<AdminMessage />} />
              <Route path="/Admin-Artist" element={<AdminArtist />} />
              <Route path="/Admin-Shop" element={<AdminShop />} />
              <Route path="/Admin-Artwork" element={<AdminArtWork />} />
              <Route path="/Admin-ArtworkPict" element={<ArtWorkPictures />} />
            </>
          )}
        </>
      )}

      <Route path="*" element={<Error />} />
    </Routes>
  );
}
