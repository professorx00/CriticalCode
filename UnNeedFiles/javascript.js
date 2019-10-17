<<<<<<< HEAD
$(document).ready(function() {
=======
$(document).ready(function () {
>>>>>>> a3b62726cb0d5b0b7aa7bc0d19ffdf5d00554874
  // Your web app's Firebase configuration
  console.log("reached public/assets/javascript/javascript.js");

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

<<<<<<< HEAD
  $("#registrationForm").on("submit", function(event) {
=======
  $("#registrationForm").on("submit", function (event) {
>>>>>>> a3b62726cb0d5b0b7aa7bc0d19ffdf5d00554874
    event.preventDefault();
    let userFirstName = $("#userFirstName")
      .val()
      .trim();
    let userLastName = $("#userLastName")
      .val()
      .trim();
    let userEmail = $("#userEmail")
      .val()
      .trim();
    let userAlias = $("#userAlias")
      .val()
      .trim();
    let userPass = $("#userPassword")
      .val()
      .trim();

    console.log(`userFirstName: ${userFirstName}
        userLastName: ${userLastName}
        userEmail: ${userEmail}
        userAlias: ${userAlias}`);

    firebase
      .auth()
      .createUserWithEmailAndPassword(userEmail, userPass)
<<<<<<< HEAD
      .catch(function(error) {
=======
      .catch(function (error) {
>>>>>>> a3b62726cb0d5b0b7aa7bc0d19ffdf5d00554874
        // Handle Errors here.

        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ...
      });

    let confirmation = $("<div>");
    confirmation.text("Welcome to Valhalla");
    $("#registrationForm").prepend(confirmation);

<<<<<<< HEAD
    setTimeout(function() {
      window.location.href = "https://www.google.com";
    }, 2000);
  });
});
=======
    setTimeout(function () {
      window.location.href = "https://www.google.com";
    }, 2000);
  });
});
>>>>>>> a3b62726cb0d5b0b7aa7bc0d19ffdf5d00554874
