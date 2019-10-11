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

var user = firebase.auth().currentUser;
if (user) {
    // User is signed in.
} else {
    // No user is signed in.
}
