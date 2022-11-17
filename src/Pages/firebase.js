// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP8QpyoTjhz28c1oyiOlaTH1Fjabkj4Mc",
  authDomain: "momentum-science-of-success.firebaseapp.com",
  projectId: "momentum-science-of-success",
  storageBucket: "momentum-science-of-success.appspot.com",
  messagingSenderId: "143097598981",
  appId: "1:143097598981:web:bdc539ff0f3db24818b86c",
  measurementId: "G-702238C2CG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);