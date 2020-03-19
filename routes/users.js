const express = require("express");
const router = express.Router();
// Load User Controller
const userController = require("../controllers/user.controller");
const { forwardUserAuthenticated } = require("../config/auth");

//Register Routes
// Login Page
router.get("/login", forwardUserAuthenticated, userController.login);
// Register Page
router.get("/register", forwardUserAuthenticated, userController.register);

// Register
router.post("/register", userController.registerUser);

// Login
router.post("/login", userController.loginUser);

// Logout
router.get("/logout", userController.logout);

module.exports = router;
