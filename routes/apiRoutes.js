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
  let character = req.body;
  console.log(character);
  db.character
    .create({
      characterName: character.characterName,
      str: character.str,
      dex: character.dex,
      con: character.con,
      int: character.int,
      wis: character.wis,
      char: character.char,
      equipment: character.equipment,
      skill: character.skill,
      spells: character.spells,
      gold: character.gold,
      copper: character.copper,
      electrum: character.electrum,
      silver: character.silver,
      platinum: character.platinum,
      experience: character.experience,
      faction: character.faction,
      alignment: character.alignment,
      bonusLanguage: character.bonusLanguage,
      background: character.background,
      strAdditional: character.strAdditional,
      dexAdditional: character.dexAdditional,
      conAdditional: character.conAdditional,
      intAdditional: character.intAdditional,
      wisAdditional: character.wisAdditional,
      charAdditional: character.charAdditional,
      inspiration: character.inspiration,
      acrobatics: character.acrobatics,
      animalHandling: character.animalHandling,
      arcana: character.arcana,
      athletics: character.athletics,
      deception: character.deception,
      history: character.history,
      insight: character.insight,
      intimidation: character.intimidation,
      investigation: character.investigation,
      medicine: character.medicine,
      nature: character.nature,
      perception: character.perception,
      performance: character.performance,
      religion: character.religion,
      sleightofHand: character.sleightofHand,
      stealth: character.stealth,
      survival: character.survival,
      imgURL: character.imgURL,
      armorId: character.armorId,
      weaponId: character.weaponId,
      raceId: character.raceId,
      classId: character.classId,
      userId: character.userId
    })
    .then(() => {
      return res.redirect("/dashboard");
    })
    .catch(err => {
      res.status(500).send("server error");
      console.log("err", err);
      throw err;
    });
});

routes.post("/updateCharacter/:userId/:charId", (req, res) => {
  let character = req.body;
  console.log(character);
  db.character
    .update(
      {
        characterName: character.characterName,
        str: character.str,
        dex: character.dex,
        con: character.con,
        int: character.int,
        wis: character.wis,
        char: character.char,
        equipment: character.equipment,
        skill: character.skill,
        spells: character.spells,
        gold: character.gold,
        copper: character.copper,
        electrum: character.electrum,
        silver: character.silver,
        platinum: character.platinum,
        experience: character.experience,
        faction: character.faction,
        alignment: character.alignment,
        bonusLanguage: character.bonusLanguage,
        background: character.background,
        strAdditional: character.strAdditional,
        dexAdditional: character.dexAdditional,
        conAdditional: character.conAdditional,
        intAdditional: character.intAdditional,
        wisAdditional: character.wisAdditional,
        charAdditional: character.charAdditional,
        inspiration: character.inspiration,
        acrobatics: character.acrobatics,
        animalHandling: character.animalHandling,
        arcana: character.arcana,
        athletics: character.athletics,
        deception: character.deception,
        history: character.history,
        insight: character.insight,
        intimidation: character.intimidation,
        investigation: character.investigation,
        medicine: character.medicine,
        nature: character.nature,
        perception: character.perception,
        performance: character.performance,
        religion: character.religion,
        sleightofHand: character.sleightofHand,
        stealth: character.stealth,
        survival: character.survival,
        imgURL: character.imgURL,
        armorId: character.armorId,
        weaponId: character.weaponId,
        raceId: character.raceId,
        classId: character.classId
      },
      {
        where: {
          id: req.params.charId
        }
      }
    )
    .then(data => res.send(`Updated character: ${data}`));
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
