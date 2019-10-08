require("dotenv").config();

//Auth0 dependencies
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
// const flash = require('connect-flash');
// const userInViews = require('./lib/middleware/userInViews');
// const authRouter = require('./routes/auth');
// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
const session = require("express-session");

// Middleware
const express = require("express");
const path = require("path");

const exphbs = require("express-handlebars");

const routes = require("./routes/index.js");

const PORT = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.

//Auth0 config/init
//===============================================================
const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || "http://localhost:3000/callback"
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

passport.use(strategy);

// You can use this section to keep a smaller payload
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

const sess = {
  secret: "ExpertCrouchingLlama",
  cookie: {},
  resave: false,
  saveUninitialized: true
};

const app = express();

app.use(logger("dev"));
app.use(cookieParser());

if (app.get("env") === "production") {
  //Use secure cookies in production (requires SSL/TLS)

  sess.cookie.secure = true;
}

app.use(session(sess));

app.use(passport.initialize());
app.use(passport.session());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// ====================================================================

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

// Turn on that server!
app.listen(PORT, () => {
  console.log("App listening on port 3000");
});
