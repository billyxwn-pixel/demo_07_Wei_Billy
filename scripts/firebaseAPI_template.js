//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {

    apiKey: "AIzaSyCdgruwSiiQV9qLmaMm-lLAMLAcrjRgqWE",
    authDomain: "demo07-91471.firebaseapp.com",
    projectId: "demo07-91471",
    storageBucket: "demo07-91471.appspot.com",
    messagingSenderId: "938237383085",
    appId: "1:938237383085:web:73d18222530f1bcb59d124",
    measurementId: "G-N4EW25P39C"
};

//--------------------------------------------
// initialize the Firebase app that's aboce
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); //creates a new database for us, "db"