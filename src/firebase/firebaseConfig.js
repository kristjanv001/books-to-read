import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-6SYABWkeNu4M5HxnC0wt-3aQmbfi8qo",
  authDomain: "books-to-read-8be69.firebaseapp.com",
  databaseURL: "https://books-to-read-8be69.firebaseio.com",
  projectId: "books-to-read-8be69",
  storageBucket: "books-to-read-8be69.appspot.com",
  messagingSenderId: "306780162105",
  appId: "1:306780162105:web:7e23e5bf10e1b7f258a5e8"
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export default firebase
