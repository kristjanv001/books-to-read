import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


// Initial config
const firebaseConfig = {
  apiKey: "AIzaSyC-6SYABWkeNu4M5HxnC0wt-3aQmbfi8qo",
  authDomain: "books-to-read-8be69.firebaseapp.com",
  databaseURL: "https://books-to-read-8be69.firebaseio.com",
  projectId: "books-to-read-8be69",
  storageBucket: "books-to-read-8be69.appspot.com",
  messagingSenderId: "306780162105",
  appId: "1:306780162105:web:7e23e5bf10e1b7f258a5e8",
};
firebase.initializeApp(firebaseConfig);

// Creating a db and auth
export const db = firebase.firestore();
export const auth = firebase.auth();

// Auth
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Auth users to db
export const createUserInDb = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = db.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const timeStamp = firebase.firestore.FieldValue.serverTimestamp();

    try {
      await userRef.set({
        displayName,
        email,
        timeStamp,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

// Export
export default firebase;
