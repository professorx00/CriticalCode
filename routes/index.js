const express = require("express");
const router = express.Router();

//awsUpload module
const photoUpload = require("../config/awsFileUpload");

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
          charid: element.id,
          characterName: element.characterName,
          class: element.class
        };
        characters.push(obj);
      });
      userInfo.characters = characters;
      console.log(userInfo)
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
router.get("/add/:user", ensureAuthenticated, (req, res) => {
  let user = req.params.user;
  if (user) {
    let data = { user: user };
    res.render("characterAdd", data);
  }
});
router.get("/update/:user/:char", ensureAuthenticated, (req, res) => {
  let user = req.params.user;
  let char = req.params.char;
  console.log(user, char)


  if (user && char) {
    db.character
      .findOne({
        where: {
          userid: user,
          id: char
        },
        include: [{all: true}],
      })
      .then(result => {
        console.log(result.dataValues)
        let data = { user: user, char: char, 
          charData: result.dataValues, 
          classData: result.dataValues.class.dataValues,
          weaponData: result.dataValues.weapon.dataValues,
          raceData: result.dataValues.race.dataValues,
          armorData: result.dataValues.armor.dataValues,

         };
        console.log("user found, character found");
        res.render("characterUpdate", data);
      })

  } else {
    res.send("error");
  }
});
router.get("/delete/:user", ensureAuthenticated, (req, res) => {
  let user = req.params.user;
  if (user) {
    let data = { user: user, char: char };
    console.log("user found");
    res.render("characterAdd", data);
  } else {
    res.render("characterAdd", {
      id: null,
      name: null
    });
    res.send("error");
  }
});
router.get("/randomName/male/:offset?", (req, res) => {
  let offsetNum = 0;
  if (!req.params.offset) {
    offsetNum = Math.floor(Math.random() * Math.floor(Math.random() * 800));
  } else {
    offsetNum = parseInt(req.params.offset);
  }
  let names = {
    offset: offsetNum
  };
  db.characterName
    .findAll({
      where: { gender: "Male" },
      offset: offsetNum,
      limit: 10
    })
    .then(data => {
      data.forEach(element => {
        names[element.id] = element.name;
      });
      console.log(names);
      res.json(names);
    });
});
router.get("/randomName/female/:offset?", (req, res) => {
  let offsetNum = 0;
  if (!req.params.offset) {
    offsetNum = Math.floor(Math.random() * Math.floor(Math.random() * 800));
  } else {
    offsetNum = parseInt(req.params.offset);
  }
  let names = {
    offset: offsetNum
  };
  db.characterName
    .findAll({
      where: { gender: "Female" },
      offset: offsetNum,
      limit: 10
    })
    .then(data => {
      data.forEach(element => {
        names[element.id] = element.name;
      });
      console.log(names);
      res.json(names);
    });
});

router.get("/randomName/:offset?", (req, res) => {
  let offsetNum = 0;
  if (!req.params.offset) {
    offsetNum = Math.floor(Math.random() * Math.floor(Math.random() * 800));
  } else {
    offsetNum = parseInt(req.params.offset);
  }
  let names = {
    offset: offsetNum
  };
  db.characterName
    .findAll({
      offset: offsetNum,
      limit: 10
    })
    .then(data => {
      data.forEach(element => {
        names[element.id] = element.name;
      });
      console.log(names);
      res.json(names);
    });
});

router.post("/photoUpload", (req, res) => {
  console.log(req.files);
  // res.send("yep, got it");
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  photoUpload(req, res);
});

module.exports = router;
