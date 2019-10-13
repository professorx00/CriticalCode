const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
const db = require("../models");
let userInfo = {};

//welcome Page
router.get("/", (req, res) => {
  res.render("welcome", {});
});

//Dashboard

router.get("/dashboard", ensureAuthenticated, (req, res) => {
  userInfo = {
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  };
  db.character.findAll({ where: { userid: req.user.id } }).then(result => {
    let characters = [];
    result.forEach(element => {
      let obj = {
        id: element.id,
        characterName: element.characterName
      };
      characters.push(obj);
    });
    userInfo.characters = characters;
    if (userInfo.characters.length === 0) {
      userInfo.characters = null;
      res.render("dashboard", userInfo);
    } else {
      res.render("dashboard", userInfo);
    }
  });
});
router.get("/log/:user/:charID", (req, res) => {
  let user = req.user.id;
  let name = req.user.name;
  let char = req.params.charID;
  let email = req.user.email;
  console.log("character redirect " + user + char);
  if (user && char) {
    console.log("user found");
    res.send("FILE")
  } else {
    // res.render("characterView", {
    //   id: null,
    //   name: null
    // });
    res.send("error");
  }
});

module.exports = router;
