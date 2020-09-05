import AppBar from "@material-ui/core/AppBar";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { signInWithGoogle } from "../firebase/firebaseConfig";

export default function NavBar(props) {
  return (
    <AppBar
      elevation={0}
      style={{
        backgroundColor: "#456E8D",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      position="static"
    >
      <Toolbar
        style={{
          maxWidth: "800px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
              color: "whitesmoke",
              padding: "10px 0",
              letterSpacing: "1px",
            }}
          >
            {props.currentUser
              ? `Welcome, ${props.currentUser.displayName}`
              : `Please sign in to use this app`}
          </span>
          <div id="logout">
            {props.currentUser ? (
              <div>
                <Button
                  onClick={props.logOut}
                  disableElevation
                  style={{
                    color: "#D57249",
                    fontWeight: "600",
                    flexGrow: "0",
                  }}
                >
                  Log out
                </Button>
              </div>
            ) : (
              <Button
                onClick={signInWithGoogle}
                disableElevation
                style={{
                  color: "#fff48f",
                  fontWeight: "600",
                  flexGrow: "0",
                }}
              >
                Sign in with Google
              </Button>
            )}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
