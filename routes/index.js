const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

//welcome Page
router.get("/", (req, res) => {
  res.render("welcome", {});
});

//Dashboard

router.get("/dashboard", ensureAuthenticated, (req, res) => {
  console.log("going to dashboard")
  res.render("dashboard", {
    id: req.user.name
  });
  res.send("hello")
});

module.exports = router;
