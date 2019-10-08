let routes = require("express").Router();

routes.get("/", (req, res) => {
    console.log(req.body);
    res.send("hello GET html");
});

module.exports = routes;
