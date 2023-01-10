const express = require("express");

const multer = require("multer");

const router = express.Router();

// On définit la destination de stockage de nos fichiers

const upload = multer({ dest: "uploads/" });

// route POST pour recevoir un fichier dont le nom est "picture"
router.post("/picture", upload.single("picture"), (req, res) => {
  res.send("File uploaded");
});

// service d'authentification

const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");
const authControllers = require("./controllers/authControllers");
const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
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

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// Gestion des badges
router.get("/badges", badgeControllers.browse);
router.get("/badges/:id", badgeControllers.read);
router.get("/user/badges/:id", badgeControllers.getUserBadges);

router.post("/badges", badgeControllers.add);
router.put("/badges/:id", badgeControllers.edit);

module.exports = router;
