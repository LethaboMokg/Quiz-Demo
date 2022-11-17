import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// See: https://momentum-science-of-success-default-rtdb.firebaseio.com/
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
