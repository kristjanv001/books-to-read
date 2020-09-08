import React from "react";
import Typography from "@material-ui/core/Typography";
import { signInWithGoogle } from "../firebase/firebaseConfig";
import "./Welcome.css";

export default function Welcome() {
  return (
    <div
      style={{
        padding: "0 1.5em",
        color: "#7c7575",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        maxWidth: "800px",
      }}
    >
      <p>Welcome!</p>
      <p>
        This is a nice little app where users can add books to read. Right now
        it's only possible to log in with Google. Hopefully in the future, users
        can also make an account with e-mail and password.
      </p>
      <p>For now, feel free to sign in and test this app out.</p>
      <p>
        If you have any further question, email me at{" "}
        <code>kristjanvingel@protonmail.ch</code>
      </p>
      <button id="sign-in-btn" onClick={signInWithGoogle}>
        <span>Sign In With Google</span>
      </button>
    </div>
  );
}
