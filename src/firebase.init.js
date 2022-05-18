// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZIu98a0sH5CqDE_l0xtP7fqq4jRUQiZI",
    authDomain: "todo-app-9231d.firebaseapp.com",
    projectId: "todo-app-9231d",
    storageBucket: "todo-app-9231d.appspot.com",
    messagingSenderId: "793541581016",
    appId: "1:793541581016:web:b7a80b1eb5d0e297195fad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;