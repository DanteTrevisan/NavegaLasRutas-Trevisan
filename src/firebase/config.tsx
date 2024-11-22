// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWi2AP-eoNOw9j7ysJNLE3bnfLrREKP7M",
  authDomain: "neogeo-soundtrack-store-prueba.firebaseapp.com",
  projectId: "neogeo-soundtrack-store-prueba",
  storageBucket: "neogeo-soundtrack-store-prueba.firebasestorage.app",
  messagingSenderId: "296458071031",
  appId: "1:296458071031:web:58d4d318cedad7bc971cf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);