require("dotenv").config();
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");

// Middleware
const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const PORT = process.env.PORT || 3000;
const path = require("path");
require("./config/passport")(passport);
const app = express();
//Database Models:
var db = require("./models");
//handlebar
app.use(expressLayouts);
app.set("view engine", "ejs");

// ====================================================================

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//Express Session
app.use(
  session({
    secret: "Monty Moose",
    resave: true,
    saveUninitialized: true
  })
);
//Passport Middle Ware
app.use(passport.initialize());
app.use(passport.session());

//Connect Flash
app.use(flash());

//Global Vars
app.use((req, res, next) => {
  // eslint-disable-next-line camelcase
  res.locals.success_msg = req.flash("success_msg");
  // eslint-disable-next-line camelcase
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

//routes
app.use("/", require("./routes/index.js"));
app.use("/users", require("./routes/user.js"));

// Turn on that server!

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, () => {
    console.log("App listening on port 3000");
  });
});
