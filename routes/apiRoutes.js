let routes = require("express").Router();

// const friends = require("../data/friends.js")

routes.post("/add", function(req, res) {
  //localhost:3000/api

  res.send("hi");

  console.log("body", req.body);
});

routes.get("/all", function(req, res) {
  console.log(req.body);
  res.send("hellllo");
});

routes.post("/devour", function(req, res) {
  console.log("body", req.body);
  res.send("hello again");
});

module.exports = routes;
