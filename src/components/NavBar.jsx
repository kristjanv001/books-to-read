import AppBar from "@material-ui/core/AppBar";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { signInWithGoogle } from "../firebase/firebaseConfig";
import "./NavBar.css";

export default function NavBar(props) {
  return (
    <AppBar
      elevation={0}
      style={{
        backgroundColor: "#7c7575",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      position="static"
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          id="navbar-text"
          style={{ color: "#fbf0f0", paddingBottom: "10px" }}
        >
          {props.currentUser
            ? `Welcome, ${props.currentUser.displayName}`
            : `Please sign in to use this app`}
        </span>

        <div id="logout">
          {props.currentUser ? (
            <div>
              <a
                onClick={props.logOut}
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "white",
                  fontWeight: "600",
                  // flexGrow: "0",
                }}
              >
                Log out
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </AppBar>
  );
}
