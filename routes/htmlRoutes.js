var path = require("path");
let routes = require("express").Router();
import * as firebase from "firebase/app";
import "firebase/auth";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user = firebase.auth().currentUser;
if (user) {
  // User is signed in.
  routes.get("/", (req, res) => {
    console.log(req.body);
    // res.render("index");
    res.sendFile(path.join(__dirname, "..", "views", "index.html"));
  });
} else {
  // No user is signed in.
  routes.get("/register", (req, res) => {
    console.log(req.body);
    res.sendFile(path.join(__dirname, "..", "views", "registration.html"));
  });

  routes.get("/login", (req, res) => {
    console.log(req.body);
    res.sendFile(path.join(__dirname, "..", "views", "login.html"));
  });
}



module.exports = routes;
