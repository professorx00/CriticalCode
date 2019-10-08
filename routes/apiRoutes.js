const routes = require('express').Router();

// const friends = require("../data/friends.js")

routes.post('/add', (req, res) => { //localhost:3000/api

  console.log("body", req.body);


});

routes.get("/all", function (req, res) {

});

routes.post("/devour", (req, res) => {
  console.log("body", req.body);
});

module.exports = routes;