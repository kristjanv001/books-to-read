import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React, { useState, useEffect } from "react";
import BookApp from "./components/BookApp";
import NavBar from "./components/NavBar";
import { auth, db, createUserInDb } from "./firebase/firebaseConfig";

export default function App() {
  const styles = {
    padding: 0,
    margin: 0,
    height: "100vh",
    backgroundColor: "#4C799A",
  };

  const [currentUser, setCurrentUser] = useState(null);
  const [books, setBook] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        db.collection("books")
          .where("userId", "==", user.uid)
          .onSnapshot((snapshot) => {
            setBook(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                title: doc.data().title,
                author: doc.data().author,
                done: doc.data().done,
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
      <Grid container justify="center" style={{ padding: 10 }}>
        <Grid>
          <BookApp currentUser={currentUser} books={books} />
        </Grid>
      </Grid>
    </Paper>
  );
}
