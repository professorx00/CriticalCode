let routes = require("express").Router();

routes.get("/", (req, res) => {
  console.log(req.body);
  res.send("hello GET API");
});

module.exports = routes;
