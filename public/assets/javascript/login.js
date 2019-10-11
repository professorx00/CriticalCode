$(document).ready(function() {
  // Your web app's Firebase configuration
  console.log("reached public/assets/javascript/login.js");

  var firebaseConfig = {
    apiKey: "AIzaSyCirE4_nnECammw9TpXlpJDf0nzw1GZwh4",
    authDomain: "valhalla-74d3c.firebaseapp.com",
    databaseURL: "https://valhalla-74d3c.firebaseio.com",
    projectId: "valhalla-74d3c",
    storageBucket: "valhalla-74d3c.appspot.com",
    messagingSenderId: "156268042372",
    appId: "1:156268042372:web:a739815fb1a515ba330ad1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  $("#loginForm").on("submit", function(event) {
    event.preventDefault();

    let userEmail = $("#userEmail")
      .val()
      .trim();
    let userPass = $("#userPassword")
      .val()
      .trim();

    console.log(`userEmail: ${userEmail}`);

    firebase
      .auth()
      .signInWithEmailAndPassword(userEmail, userPass)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  });
});
