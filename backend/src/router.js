const express = require("express");

const router = express.Router();

// service d'authentification

const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");
const authControllers = require("./controllers/authControllers");
const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const PictureControllers = require("./controllers/PictureControllers");
const ArtistControllers = require("./controllers/ArtistControllers");
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
router.post("/users", hashPassword, verifyToken, userControllers.add);
router.put("/users/:id", hashPassword, verifyToken, userControllers.edit);
router.delete("/users/:id", verifyToken, userControllers.destroy);

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

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// Gestion des artists
router.get("/Artists", verifyToken, ArtistControllers.browse);
router.get("/Artists/:id", verifyToken, ArtistControllers.read);
router.post("/Artists", verifyToken, ArtistControllers.add);
router.put("/Artists/:id", verifyToken, ArtistControllers.edit);
router.delete("/galerie/Artists/:id", verifyToken, ArtistControllers.destroy);
module.exports = router;
