// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqBKna1x9isD0R2BcK2C3YWLeKJuk6vmY",
  authDomain: "chatify-7b6a7.firebaseapp.com",
  projectId: "chatify-7b6a7",
  storageBucket: "chatify-7b6a7.appspot.com",
  messagingSenderId: "332575727370",
  appId: "1:332575727370:web:106bdaa781062b8b4c64f3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };