import AppBar from "@material-ui/core/AppBar";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Button from "@material-ui/core/Button";
import { signInWithGoogle } from "../firebase/firebaseConfig";

// console.log(signInWithGoogle);

export default function NavBar(props) {
  return (
    <AppBar
      style={{
        backgroundColor: "#456E8D",
        height: "70px",
        display: "flex",
        justifyContent: "center",
      }}
      position="static"
    >
      <div>
        <Toolbar
          style={{
         
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div id="logo" >
            <Typography color="inherit">
              <span style={{ fontSize: "2rem", fontWeight: "600" }}>BOOKS</span>
            </Typography>
          </div>

          <div id="logout" >
            {/* <Typography style={{ flex: 1 }} color="inherit"></Typography> */}
            {/* show current user's name + logout on the navbar */}
            {props.currentUser ? (
              <div>
                {/* <span
                color="inherit"
                style={{
                  paddingRight: "10px",
                  fontWeight: "bold",
                }}
              >
                {props.currentUser.displayName}
              </span> */}
                <Button
                  onClick={props.logOut}
                  disableElevation
                  color="secondary"
                  style={{
                    color: "tomato",
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
                variant="contained"
                color="default"
              >
                Log in
              </Button>
            )}
          </div>
        </Toolbar>
      </div>
    </AppBar>
  );
}
