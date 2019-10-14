var db = require("../models");
let calculator = require("./calculator.js");
let routes = require("express").Router();

routes.get("/", (req, res) => {
  db.character
    .findAll({
      include: [db.armor, db.weapon, db.race, db.classes]
    })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});
routes.get("/user/:id/:characterId?", (req, res) => {
  if (req.params.characterId) {
    db.character
      .findAll({
        where: {
          userid: req.params.id,
          id: req.params.characterId
        },
        include: [db.armor, db.weapon, db.race, db.classes, db.user]
      })
      .then(data => {
        console.log("Character Id Found");
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    db.character
      .findAll({
        where: {
          userid: req.params.id
        },
        include: [db.armor, db.spells, db.weapon, db.race, db.classes]
      })
      .then(data => {
        console.log("All User Characters");
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  }
});
routes.get("/weapons/:id?", (req, res) => {
  if (req.params.id) {
    db.weapon
      .findAll({
        where: {
          id: req.params.id
        }
      })
      .then(data => {
        console.log("Specific Weapon");
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    db.weapon
      .findAll({})
      .then(data => {
        console.log("All Weapon");
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  }
});
routes.get("/classes/:id?", (req, res) => {
  if (req.params.id) {
    db.classes
      .findAll({
        where: {
          id: req.params.id
        }
      })
      .then(data => {
        console.log("Specific Class");
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    db.classes
      .findAll({})
      .then(data => {
        console.log("All Classes");
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  }
});
routes.get("/race/:id?", (req, res) => {
  if (req.params.id) {
    db.race
      .findAll({
        where: {
          id: req.params.id
        }
      })
      .then(data => {
        console.log("Specific Race");
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    db.race
      .findAll({})
      .then(data => {
        console.log("All Races");
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  }
});
routes.get("/armor/:id?", (req, res) => {
  if (req.params.id) {
    db.armor
      .findAll({
        where: {
          id: req.params.id
        }
      })
      .then(data => {
        console.log("Specific Armor");
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    db.armor
      .findAll({})
      .then(data => {
        console.log("All Armor");
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  }
});
routes.post("/addCharacter", (req, res) => {
  db.character
    .create({
      userId: req.body.userid,
      characterName: req.body.characterName,
      str: req.body.str,
      dex: req.body.dex,
      con: req.body.con,
      int: req.body.int,
      wis: req.body.wis,
      char: req.body.char,
      equipment: req.body.equipment,
      spells: req.body.spells,
      skill: req.body.skill,
      armorId: req.body.armorId,
      classId: req.body.classId,
      raceId: req.body.raceId,
      weaponId: req.body.weaponId
    })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send("server error");
      console.log("err", err);
      throw err;
    });
});

routes.post("/cal/:command", (req, res) => {
  if (req.body.command === "abilityMod") {
    const abilityMod = calculator.abiityMod(req.stat);
    res.send(abilityMod);
  } else {
    res.status(404);
  }
});

module.exports = routes;
