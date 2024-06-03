import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-zSaUH2IjmSP5n57jrF_JHh2J7qQjOwE",
  authDomain: "practice-7223e.firebaseapp.com",
  projectId: "practice-7223e",
  storageBucket: "practice-7223e.appspot.com",
  messagingSenderId: "387110817451",
  appId: "1:387110817451:web:cfb0d3464b52e6272f31ee",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
