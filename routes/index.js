let routes = require("express").Router();

let authRoutes = require("./authRoutes.js");
let apiRoutes = require("./apiRoutes.js");
let htmlRoutes = require("./htmlRoutes.js");

routes.use("/login", authRoutes);
routes.use("/api", apiRoutes);
routes.use("/", htmlRoutes);

module.exports = routes;
