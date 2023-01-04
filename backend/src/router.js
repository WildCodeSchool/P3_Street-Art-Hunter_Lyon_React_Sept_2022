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
router.post("/users", hashPassword, verifyToken, userControllers.add);
router.put("/users/:id", hashPassword, verifyToken, userControllers.edit);
router.delete("/users/:id", verifyToken, userControllers.destroy);

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
