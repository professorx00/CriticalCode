var path = require("path");
let routes = require("express").Router();

routes.get("/register", (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname, "..", "views", "registration.html"));
});

routes.get("/login", (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname, "..", "views", "login.html"));
});

routes.get("/", (req, res) => {
  console.log(req.body);
  // res.render("index");
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = routes;
