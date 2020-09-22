import * as firebase from "firebase/app"; //imports all elements in firebase package
import "firebase/firebase-database";
import "firebase/firestore";
import "firebase/firebase-auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = { //copy & paste firebase config
  apiKey: "AIzaSyDoH96u8cfcR5WEoHrhQ6RR_8k_mtinxYg",
  authDomain: "clone-c3291.firebaseapp.com",
  databaseURL: "https://clone-c3291.firebaseio.com",
  projectId: "clone-c3291",
  storageBucket: "clone-c3291.appspot.com",
  messagingSenderId: "540480637336",
  appId: "1:540480637336:web:5e20fc20d80dc9e6be83ed",
  measurementId: "G-MQGSBKGTVG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();  
const auth = firebase.auth();
// firebase.analytics();
console.log(firebase);

export {db, auth}; //exports important variables so we can use them in any other file