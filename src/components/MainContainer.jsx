import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React, { useState, useEffect } from "react";
import BookApp from "./BookApp";
import NavBar from "./NavBar";
// import Footer from "./Footer";
import { auth } from "../firebase/firebaseConfig";
import firebase from "../firebase/firebaseConfig";

export default function MainContainer() {
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

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <Paper style={styles} elevation={0}>
      <NavBar currentUser={currentUser} />

      <Grid container justify="center" style={{ marginTop: "3rem" }}>
        <Grid item xs={11} md={8} lg={5}>
          <BookApp currentUser={currentUser} />
        </Grid>
      </Grid>

      {/* <Footer /> */}
    </Paper>
  );
}
