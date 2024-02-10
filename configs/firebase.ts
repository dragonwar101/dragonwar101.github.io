// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig : FirebaseOptions = {
  apiKey: "AIzaSyBDDGzEMqh_ZLBS9xgJ5QWLFcPnrLjuNgE",
  authDomain: "dragonwar101-portfolio.firebaseapp.com",
  projectId: "dragonwar101-portfolio",
  storageBucket: "dragonwar101-portfolio.appspot.com",
  messagingSenderId: "6574426302",
  appId: "1:6574426302:web:ce76cd34b404d7dac376ef",
  measurementId: "G-5N5EMW2KVZ",
  databaseURL: "https://dragonwar101-portfolio-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
export const database = getDatabase(app);
console.log('initialized firebase');
