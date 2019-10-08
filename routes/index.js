let routes = require("express").Router();

let apiRoutes = require("./apiRoutes.js");
let htmlRoutes = require("./htmlRoutes.js");

routes.use("/api", apiRoutes);
routes.use("/", htmlRoutes);

module.exports = routes;
