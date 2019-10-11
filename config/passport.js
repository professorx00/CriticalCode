const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const db = require("../models");

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      //Match User
      db.user
        .findAll({ where: { email: email } })
        .then(result => {
          if (!result.user) {
            return done(null, false, {
              message: "that email is not registered"
            });
          }

          //Match Password
          bcrypt.compare(password, result.password, (err, isMatch) => {
            if (err) {
              throw err;
            }
            if (isMatch) {
              return done(null, result.user);
            } else {
              return null, false, { message: "Password incorrect" };
            }
          });
        })
        .catch(err => console.log(err));
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
