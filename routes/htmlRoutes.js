var path = require("path");
let routes = require("express").Router();

routes.get("/", (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname, "..", "views", "registration.html"));
});

module.exports = routes;
