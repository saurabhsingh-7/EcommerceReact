// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWu0Xbu-ocCPRNgp9216dyp3o7a_wjnBg",
  authDomain: "react-first-project-57994.firebaseapp.com",
  projectId: "react-first-project-57994",
  storageBucket: "react-first-project-57994.appspot.com",
  messagingSenderId: "409898020679",
  appId: "1:409898020679:web:afcacc9cf0867aa18b6662",
  measurementId: "G-D2ZFVGGGZZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export default signup;

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unscribe = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unscribe;
  }, []);
  return currentUser;
}

export function logout() {
  return signOut(auth);
}
