const express = require("express");
const router = express.Router();
const {
  ensureAuthenticated
} = require("../config/auth");
const db = require("../models");

//welcome Page
router.get("/", (req, res) => {
  res.render("welcome", {});
});

//Dashboard

router.get("/dashboard", ensureAuthenticated, (req, res) => {
  console.log(req.user);
  res.render("dashboard", {
    id: req.user.id,
    name: req.user.name
  });
});
router.get("/character", ensureAuthenticated, (req, res) => {
  console.log(req.user)
  res.render("characterView", {
    id: req.user.id,
    name: req.user.name
  });
});

module.exports = router;