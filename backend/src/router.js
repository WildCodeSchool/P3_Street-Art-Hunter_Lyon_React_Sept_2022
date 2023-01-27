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

// Auth
router.post("/inscription", hashPassword, userControllers.add);
router.post(
  "/connexion",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// Gestion des users

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.get("/leader", userControllers.leaderboard);
router.get("/score/:id", userControllers.getMyscore);
router.get("/rank/:id", userControllers.getRanks);
router.put("/users/:id/score", userControllers.pointsOnPictureValidation);

router.post("/users", hashPassword, verifyToken, userControllers.add);
router.put("/users/:id", verifyToken, userControllers.modif);
router.delete("/users/:id", verifyToken, userControllers.destroy);

router.post("/addUsers", hashPassword, verifyToken, userControllers.add);
// Gestion des badges
router.get("/badges", badgeControllers.browse);
router.get("/badges/:id", badgeControllers.read);
router.get("/user/badges/:id", badgeControllers.getUserBadges);

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
router.post("/userMessage", userMessageControllers.add);
router.get("/userMessage", userMessageControllers.getMessage);

// Gestion des artistes
router.get("/artists", artistControllers.browse);

// Gestion des oeuvres
router.get("/works", workControllers.browse);
router.get("/validation", workControllers.showValidation);
router.get("/works/:id", workControllers.read);
router.get("/works/value/:id", workControllers.readValuePassItToNext);
router.get("/workswithpicture", workControllers.getAllWithPicture);

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
router.delete("/works/:id", verifyToken, workControllers.destroy);

// Gestion des photos
router.get("/users/:userId/pictures", pictureControllers.myPict);
router.get("/pictures", pictureControllers.browse);
router.get("/pictures/:id", pictureControllers.read);
router.post("/pictures", pictureControllers.add);
router.put(
  "/pictures/changepicture/:id",
  cloudinaryUpload,
  pictureControllers.putNewPicture
);

// Gestion des favoris
router.post("/favorites", verifyToken, favoriteControllers.add);
router.delete(
  "/favorites/:user_id/:picture_id",
  verifyToken,
  favoriteControllers.destroy
);
router.get("/user/favoris/:user_id", pictureControllers.getUserFavorites);

module.exports = router;
