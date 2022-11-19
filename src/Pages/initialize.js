import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// See: https://momentum-science-of-success-default-rtdb.firebaseio.com/
const firebaseConfig = {
  apiKey: "AIzaSyCP8QpyoTjhz28c1oyiOlaTH1Fjabkj4Mc",
  authDomain: "momentum-science-of-success.firebaseapp.com",
  projectId: "momentum-science-of-success",
  storageBucket: "momentum-science-of-success.appspot.com",
  messagingSenderId: "143097598981",
  appId: "1:143097598981:web:bdc539ff0f3db24818b86c",
  measurementId: "G-702238C2CG",
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://momentum-science-of-success-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);