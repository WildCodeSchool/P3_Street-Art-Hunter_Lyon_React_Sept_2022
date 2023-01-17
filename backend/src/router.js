const express = require("express");
const sharp = require("sharp");
const fs = require("fs");

const router = express.Router();

// Upload des photos
const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter,
});

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

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    // utilisez sharp pour redimensionner l'image
    const image = await sharp(req.file.buffer)
      .resize(500, 500)
      .png()
      .toBuffer();

    // enregistrez l'image redimensionnée
    fs.writeFileSync("./public/uploads/image.png", image);
    res.send("Image téléchargée et traitée avec succès");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur lors du traitement de l image");
  }
});
// Gestion des users
router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.get("/leader", userControllers.leaderboard);
router.get("/score/:id", userControllers.getMyscore);
router.get("/rank/:id", userControllers.getRanks);

router.post("/user", hashPassword, verifyToken, userControllers.add);
router.put("/user/:id", hashPassword, verifyToken, userControllers.edit);
router.delete("/user/:id", verifyToken, userControllers.destroy);
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
