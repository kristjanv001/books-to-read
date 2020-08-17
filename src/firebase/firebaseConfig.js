import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCd1gRSitns0V_rDFCXr2Ve_SUsMAO-K5c",
  authDomain: "react-todo-cprgrmmr.firebaseapp.com",
  databaseURL: "https://react-todo-cprgrmmr.firebaseio.com",
  projectId: "react-todo-cprgrmmr",
  storageBucket: "react-todo-cprgrmmr.appspot.com",
  messagingSenderId: "22974497781",
  appId: "1:22974497781:web:790d6d2b8d656ff0b596bc",
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export default firebase
