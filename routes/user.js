const express = require("express");
const router = express.Router();
const db = require("../models");

const bcrypt = require("bcryptjs");
const passport = require("passport");

//Login Page
router.get("/login", (req, res) => {
  res.render("login");
});

//Register Page
router.get("/register", (req, res) => {
  res.render("register");
});

// Register Handle
router.post("/register", (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];
  console.log(name, email, password, password2);
  //check required fields
  if (!name || !email || !password || !password2) {
    errors.push({ msg: "Please Enter All Fields" });
  }
  //check if passwords match
  if (password !== password2) {
    errors.push({ msg: "Passwords Do Not Match" });
  }
  // check password is length
  if (password.length < 6) {
    errors.push({ msg: "Passwords should be at least 6 characters" });
  }
  if (errors.length > 0) {
    res.render("register", {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    //validation Passed
    db.user.findAll({ where: { email: email } }).then(result => {
      if (result.email === email) {
        errors.push({ msg: "Email is already registered." });
        res.render("register", {
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        const newUser = {
          name: name,
          email: email,
          password: password
        };
        //Hash Password
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
              throw err;
            }
            //set password to hash
            newUser.password = hash;
            // set new user
            db.user
              .create(newUser)
              .then(() => {
                req.flash(
                  "success_msg",
                  "You are now registered and can login."
                );
                res.redirect("/users/login");
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

router.get("/test", (req, res) => {
  console.log("monkey");
  res.send("monkey");
});

// login handle
router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/users/login",
    failureFlash: true
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success_msg", "You are logged out.");
  res.redirect("/users/login");
});

module.exports = router;
