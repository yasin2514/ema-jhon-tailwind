// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1x-RdCtnsFm0U5JtuG7iOFkMmVY6A0C4",
    authDomain: "ema-jhon-firebase-auth-93b6f.firebaseapp.com",
    projectId: "ema-jhon-firebase-auth-93b6f",
    storageBucket: "ema-jhon-firebase-auth-93b6f.appspot.com",
    messagingSenderId: "273736522778",
    appId: "1:273736522778:web:227b9203cc57e8fd3485a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;