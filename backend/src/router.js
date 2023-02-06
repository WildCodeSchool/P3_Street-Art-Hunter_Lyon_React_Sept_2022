const express = require("express");
require("dotenv").config();

const cloudinary = require("cloudinary").v2;

const router = express.Router();

// Upload des photos

const cloudinaryUpload = (req, res, next) => {
  const { image, userId, workId } = req.body;
  cloudinary.uploader
    .upload(image, { public_id: `userId-${userId}-workId-${workId}` })
    .then((result) => {
      req.body.url = result.secure_url;
      next();
    })
    .catch((err) => console.warn(err));
};

// Upload avatar

const fsUploadAvatar = (req, res, next) => {
  const { avatar } = req.body;
  console.warn(avatar);
  cloudinary.uploader
    .upload(avatar, { public_id: req.body.avatar })
    .then((result) => {
      req.body.url = result.secure_url;
      next();
    })
    .catch((err) => console.warn(err));
};

// service d'authentification

const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");
const authControllers = require("./controllers/authControllers");
const userControllers = require("./controllers/userControllers");
const badgeControllers = require("./controllers/badgeControllers");
const artistControllers = require("./controllers/artistControllers");
const workControllers = require("./controllers/workControllers");
const pictureControllers = require("./controllers/pictureControllers");
const mailControllers = require("./controllers/mailControllers");
const passwordControllers = require("./controllers/passwordControllers");
const userMessageControllers = require("./controllers/userMessageControllers");
const fileControllers = require("./controllers/fileControllers");
const valdationControllers = require("./controllers/validationControllers");

router.post(
  "/forgottenpassword",
  passwordControllers.verifyEmail,
  passwordControllers.generatePasswordToken,
  mailControllers.sendForgottenPassword
);
router.post(
  `/resetpassword`,
  passwordControllers.verifyTokenPassword,
  hashPassword,
  passwordControllers.resetPassword
);
const favoriteControllers = require("./controllers/favoriteControllers");

router.post(
  "/photo",
  verifyToken,
  pictureControllers.verifyIfUserHasPictureOnWork,
  cloudinaryUpload,
  pictureControllers.addAndPassToNext,
  userControllers.pointsOnPictureValidation
);
// gestion des avatars
router.post(
  "/api/avatars",
  verifyToken,
  fsUploadAvatar,
  fileControllers.updateAvatar
);

// modify profil

router.put("/modifyprofil/:id", verifyToken, userControllers.modifyProfil);

// Auth
router.post(
  "/inscription",
  valdationControllers.arePasswordAndMailValid,
  valdationControllers.verifyMailAndPasswordAvailablity,
  hashPassword,
  userControllers.add
);
router.post(
  "/connexion",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// Gestion des users

router.get("/users", verifyToken, userControllers.browse);
router.get("/users/:id", verifyToken, userControllers.read);
router.get("/leader", verifyToken, userControllers.leaderboard);
router.get("/score/:id", verifyToken, userControllers.getMyscore);
router.get("/rank/:id", verifyToken, userControllers.getRanks);
router.put(
  "/users/:id/score",
  verifyToken,
  userControllers.pointsOnPictureValidation
);

router.post("/users", hashPassword, verifyToken, userControllers.add);
router.put("/users/:id", verifyToken, userControllers.modif);
router.delete("/users/:id", verifyToken, userControllers.destroy);

router.post("/addUsers", hashPassword, verifyToken, userControllers.add);
// Gestion des badges
router.get("/badges", verifyToken, badgeControllers.browse);
router.get("/badges/:id", verifyToken, badgeControllers.read);
router.get("/user/badges/:id", verifyToken, badgeControllers.getUserBadges);

router.post(
  "/badges",
  verifyToken,
  authControllers.isUserAdmin,
  badgeControllers.add
);
router.put(
  "/badges/:id",
  verifyToken,
  authControllers.isUserAdmin,
  badgeControllers.edit
);

// Gestion message
router.post("/userMessage", verifyToken, userMessageControllers.add);
router.get("/userMessage", verifyToken, userMessageControllers.getMessage);

// Gestion des artistes
router.get("/artists", verifyToken, artistControllers.browse);

// Gestion des oeuvres
router.get("/works", verifyToken, workControllers.browse);
router.get("/validation", verifyToken, workControllers.showValidation);
router.get("/works/:id", verifyToken, workControllers.read);
router.get(
  "/works/value/:id",
  verifyToken,
  workControllers.readValuePassItToNext
);
router.get("/workswithpicture", verifyToken, workControllers.getAllWithPicture);
router.get("/workswithpicture/:id", verifyToken, workControllers.findByID);

router.post("/works", verifyToken, workControllers.add);
router.post(
  "/workandpicture",
  verifyToken,
  workControllers.addAndPassWorkIdToNext,
  cloudinaryUpload,
  pictureControllers.add
);

router.put(
  "/works/:id",
  verifyToken,
  workControllers.editAndNext,
  userControllers.pointsOnWorkValidation
);
router.delete(
  "/works/:id",
  verifyToken,
  pictureControllers.deleteAllPicturesFromWorkAndNext,
  workControllers.destroy
);

// Gestion des photos
router.get("/users/:userId/pictures", verifyToken, pictureControllers.myPict);
router.get("/:workId/pictures", verifyToken, pictureControllers.workPict);
router.get("/pictures", verifyToken, pictureControllers.readNonFavoritePicture);
router.get(
  "/pictures/reported",
  verifyToken,
  pictureControllers.getReportedPictures
);
router.get("/pictures/:id", verifyToken, pictureControllers.read);

router.post("/pictures", verifyToken, pictureControllers.add);
router.put(
  "/pictures/changepicture/:id",
  verifyToken,
  cloudinaryUpload,
  pictureControllers.putNewPicture
);
router.put(
  "/pictures/report/:id",
  verifyToken,
  pictureControllers.reportPicture
);
router.put(
  "/pictures/unreport/:id",
  verifyToken,
  pictureControllers.reportPicture
);

router.delete(
  "/pictures/:id",
  verifyToken,
  authControllers.isUserAdmin,
  pictureControllers.deletePicture
);

// Gestion des favoris
router.post("/favorites", verifyToken, favoriteControllers.add);
router.delete(
  "/favorites/:userId/:picture_id",
  verifyToken,
  favoriteControllers.destroy
);
router.get(
  "/user/favoris/:user_id",
  verifyToken,
  pictureControllers.getUserFavorites
);

module.exports = router;
