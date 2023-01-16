const express = require("express");
const fs = require("fs");

const router = express.Router();

// Upload des photos

const multer = require("multer");

const upload = multer({ dest: "./public/uploads" });

const fsUpload = (req, res) => {
  const { originalname, filename } = req.file;

  fs.rename(
    `./public/uploads/${filename}`,
    `./public/uploads/${originalname}`,
    (err) => {
      if (err) throw err;
    }
  );

  res.send("File uploaded");
};

router.post("/photo", upload.single("photo"), fsUpload);

// service d'authentification

const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");
const authControllers = require("./controllers/authControllers");
const userControllers = require("./controllers/userControllers");
const PictureControllers = require("./controllers/PictureControllers");
const ArtistControllers = require("./controllers/ArtistControllers");
const badgeControllers = require("./controllers/badgeControllers");

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

router.post("/users", hashPassword, verifyToken, userControllers.add);
router.put("/users/:id", hashPassword, verifyToken, userControllers.edit);
router.delete("/users/:id", verifyToken, userControllers.destroy);
// Gestion des badges
router.get("/badges", badgeControllers.browse);
router.get("/badges/:id", badgeControllers.read);
router.get("/user/badges/:id", badgeControllers.getUserBadges);

// Gestion des images
router.get("/Picture", verifyToken, PictureControllers.browse);
router.get("/Picture/:id", PictureControllers.read);
router.post("/Picture", verifyToken, PictureControllers.add);
router.put("/Picture/:id", verifyToken, PictureControllers.edit);
router.delete(
  "/galerie/live/oeuvres/:id",
  verifyToken,
  PictureControllers.destroy
);

// Gestion des artists
router.get("/Artists", verifyToken, ArtistControllers.browse);
router.get("/Artists/:id", verifyToken, ArtistControllers.read);
router.post("/Artists", verifyToken, ArtistControllers.add);
router.put("/Artists/:id", verifyToken, ArtistControllers.edit);
router.delete("/galerie/Artists/:id", verifyToken, ArtistControllers.destroy);
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

module.exports = router;
