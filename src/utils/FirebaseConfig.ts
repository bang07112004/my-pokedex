// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPBPjx3NZCBYWa2QuxOUkLo522dskzG94",
  authDomain: "my-pokedex-e51b8.firebaseapp.com",
  projectId: "my-pokedex-e51b8",
  storageBucket: "my-pokedex-e51b8.appspot.com",
  messagingSenderId: "773917828616",
  appId: "1:773917828616:web:08386810d3dcaac732d3bd",
  measurementId: "G-68ES8LLG08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
