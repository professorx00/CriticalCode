var db = require("../models");

let routes = require("express").Router();

// routes.get("/", (req, res) => {
//   console.log(req.body);
//   res.send("hello GET API");
// });

routes.get("/", (req, res) => {
  // console.log(req.params.userid);
  db.character
    .findAll({
      include: [db.armor, db.spells, db.weapon, db.race, db.classes]
    })
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

routes.get("/user/:id", (req, res) => {
  console.log(req.params.id);
  db.character
    .findAll({
      where: {
        userid: req.params.id
      },
      include: [db.armor, db.spells, db.weapon, db.race, db.classes]
    })
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = routes;
