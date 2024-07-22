// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZMgrvQBIMqRqKClfuG91cjZrk5lMQiL4",
  authDomain: "mashalfoundation-e5762.firebaseapp.com",
  databaseURL: "https://mashalfoundation-e5762-default-rtdb.firebaseio.com",
  projectId: "mashalfoundation-e5762",
  storageBucket: "mashalfoundation-e5762.appspot.com",
  messagingSenderId: "419726862031",
  appId: "1:419726862031:web:b27683f574d441ee72f9ba",
  measurementId: "G-B56GZ74BDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };
