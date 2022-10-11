import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCspaIlaHweyVhBIvs5xi4GuKvylUIjCYA",
  authDomain: "teste-e1ee4.firebaseapp.com",
  projectId: "teste-e1ee4",
  storageBucket: "teste-e1ee4.appspot.com",
  messagingSenderId: "456656652540",
  appId: "1:456656652540:web:573683c9bebdcee4372f79",
  measurementId: "G-L3ZDXHVJXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)

export default fireDB