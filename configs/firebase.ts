// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig : FirebaseOptions = {
  apiKey: process.env.API_KEY,
  authDomain: "dragonwar101-portfolio.firebaseapp.com",
  projectId: "dragonwar101-portfolio",
  storageBucket: "dragonwar101-portfolio.appspot.com",
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
  databaseURL: "https://dragonwar101-portfolio-default-rtdb.europe-west1.firebasedatabase.app/"
};
console.log(process.env);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
export const database = getFirestore(app);
console.log('initialized store');
