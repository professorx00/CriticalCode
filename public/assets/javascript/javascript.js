$(document).ready(function() {
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

  $("#registrationForm").on("submit", function() {
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
      .catch(function(error) {
        // Handle Errors here.

        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ...
      });

      setTimeout(function(){
        let confirmation = $("<div>");
        confirmation.text("Welcome to Valhalla");
        $("#registrationForm").prepend(confirmation);
      }, 2000);
      
      window.location.href="https://www.google.com";
  });
});
