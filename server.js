require("dotenv").config();
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");

// Middleware
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const expressFileUpload = require("express-fileupload");
const PORT = process.env.PORT || 3000;
const path = require("path");
require("./config/passport")(passport);
const app = express();

//Database Models:
var db = require("./models");

//handlebars
app.use(expressLayouts);
app.set("view engine", "ejs");

//file upload helper middleware
app.use(expressFileUpload());

// ====================================================================

// Sets up the Express app to handle data parsing
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));

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
app.use("/api", require("./routes/apiRoutes"));

// Turn on that server!

app.use(function(req, res, next) {
  res.status(404);

  // respond with html page
  if (req.accepts("html")) {
    res.render("404", { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts("json")) {
    res.send({ error: "Not found" });
    return;
  }

  // default to plain-text. send()
  res.type("txt").send("Not found");
});

db.sequelize.sync().then(function() {
  app.listen(PORT, () => {
    console.log("App listening on port 3000");
  });
});
