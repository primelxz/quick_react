// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc1ctahFF6lLzb0Fv_4dZ8aAC0JFIaMVQ",
  authDomain: "quickreack.firebaseapp.com",
  projectId: "quickreack",
  storageBucket: "quickreack.appspot.com",
  messagingSenderId: "121652376528",
  appId: "1:121652376528:web:7d10826405babd9eb2bfd5",
  measurementId: "G-RMTV7NGKCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);