// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API,
    authDomain: "qlquanan-567e9.firebaseapp.com",
    projectId: "qlquanan-567e9",
    storageBucket: "qlquanan-567e9.appspot.com",
    messagingSenderId: "626394380708",
    appId: "1:626394380708:web:ec4e7b35bb5a66dd11e931"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);