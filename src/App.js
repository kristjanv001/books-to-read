import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React, { useState, useEffect } from "react";
import BookApp from "./components/BookApp";
import NavBar from "./components/NavBar";
// import Footer from "./Footer";
import { auth, db, createUserInDb } from "./firebase/firebaseConfig";
// import firebase from "./firebase/firebaseConfig";

export default function App() {
  // Styling
  const styles = {
    padding: 0,
    margin: 0,
    height: "100vh",
    backgroundColor: "#e8e8e8",
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c5c5c5' fill-opacity='0.15'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
  };

  // Authentication
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser);
  const [books, setBook] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log("user-->", user);

        db.collection("books")
          .where("userId", "==", user.uid)
          // .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) => {
            setBook(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                title: doc.data().title,
                author: doc.data().author,
              }))
            );
          });

        const userRef = await createUserInDb(user);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        setCurrentUser(user);
      }
    });
    return () => unsubscribe();
  }, []);

  const logOut = () => {
    auth.signOut().then(() => {
      setCurrentUser(null);
    });
  };

  return (
    <Paper style={styles} elevation={0}>
      <NavBar currentUser={currentUser} logOut={logOut} />
      <Grid container justify="center" style={{ marginTop: "3rem" }}>
        <Grid item xs={11} md={8} lg={5}>
          <BookApp currentUser={currentUser} books={books} />
        </Grid>
      </Grid>
      {/* <Footer /> */}
    </Paper>
  );
}
