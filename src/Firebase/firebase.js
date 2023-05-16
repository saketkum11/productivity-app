// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuS-e0fYVpiW69hCXjzFjQgiykw_efqrw",
  authDomain: "productivity-df693.firebaseapp.com",
  projectId: "productivity-df693",
  storageBucket: "productivity-df693.appspot.com",
  messagingSenderId: "118778680856",
  appId: "1:118778680856:web:01affe9bbf5d3e67f9956d",
};

// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
