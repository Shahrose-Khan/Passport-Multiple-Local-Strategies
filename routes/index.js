const express = require("express");
const router = express.Router();
const {
  ensureUserAuthenticated,
  forwardUserAuthenticated
} = require("../config/auth");

// Welcome Page
router.get("/", forwardUserAuthenticated, (req, res) => res.render("welcome"));

// Dashboard
router.get("/dashboard", ensureUserAuthenticated, (req, res) =>
  res.render("dashboard", {
    user: req.user
  })
);

module.exports = router;
