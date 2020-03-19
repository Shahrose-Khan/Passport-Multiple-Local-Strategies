const express = require("express");
const router = express.Router();
// Load User Controller
const adminController = require("../controllers/admin.controller");
const { forwardAuthenticated } = require("../config/auth");

//Register Routes
// Login Page
router.get("/login", forwardAuthenticated, adminController.login);
// Register Page
router.get("/register", forwardAuthenticated, adminController.register);

// Register
router.post("/register", adminController.registerAdmin);

// Login
router.post("/login", adminController.loginAdmin);

// Logout
router.get("/logout", adminController.logout);

module.exports = router;
