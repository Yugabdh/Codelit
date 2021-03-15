import firebase from 'firebase';
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB0VTec_EbAhYwv9S9WLm-G55H8akCJLOQ",
    authDomain: "codelit-app.firebaseapp.com",
    projectId: "codelit-app",
    storageBucket: "codelit-app.appspot.com",
    messagingSenderId: "578735472467",
    appId: "1:578735472467:web:5cb525e89f0a6a8a39eba6",
    measurementId: "G-S235P6QP42"
};


export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
export const provider = myFirebase.auth.GoogleAuthProvider;

firebase.analytics();