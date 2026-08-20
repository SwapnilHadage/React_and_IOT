import { initializeApp } from "firebase/app";
import {getDatabase, } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDrvsQSalfKeBaibDDKr0nhJeyp_8msh_c",
  authDomain: "reactiot-f7964.firebaseapp.com",
  projectId: "reactiot-f7964",
  storageBucket: "reactiot-f7964.firebasestorage.app",
  messagingSenderId: "552120472509",
  appId: "1:552120472509:web:79b89b79c382bc10b0f8d4",
  measurementId: "G-J5HZ2855QF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {
  db,
};
