const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
const db = require("../models");
//welcome Page
router.get("/", (req, res) => {
  res.render("welcome", {});
});

//Dashboard

router.get("/dashboard", ensureAuthenticated, (req, res) => {
  console.log("starting Character search");
  db.character
    .findAll({
      where: {
        userid: req.user.id
      },
      include: [db.classes]
    })
    .then(result => {
      let userInfo = {
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
      };
      let characters = [];
      result.forEach(element => {
        let obj = {
          id: element.id,
          characterName: element.characterName,
          class: element.class
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
  let user = req.params.user;
  let char = req.params.charID;
  if (user && char) {
    let data = { user: user, char: char };
    console.log("user found");
    res.render("characterView", data);
  } else {
    res.render("characterView", {
      id: null,
      name: null
    });
    res.send("error");
  }
});

module.exports = router;
