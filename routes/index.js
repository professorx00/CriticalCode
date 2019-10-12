const express = require("express");
const router = express.Router();
const {
  ensureAuthenticated
} = require("../config/auth");
const db = require("../models");
const helper = require("../routes/getData")
let userInfo = {}



//welcome Page
router.get("/", (req, res) => {
  res.render("welcome", {});
});

//Dashboard

router.get("/dashboard", ensureAuthenticated, (req, res) => {
  console.log(req.user);
  res.render("dashboard", {
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  }
  db.character.findAll({ where: { userid: req.user.id } }).then((result, ) => {
    let characters = []
    result.forEach(element => {
      console.log(element)
      let obj = {
        id: element.id,
        characterName: element.characterName,
        }
      characters.push(obj)
    });
    userInfo.characters = characters
    res.render('dashboard',)
    
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