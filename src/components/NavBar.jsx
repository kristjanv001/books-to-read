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
    <AppBar color="primary" position="static">
      <Toolbar>
        <Typography color="inherit">
          <MenuBookIcon style={{ paddingRight: "10px" }} />
        </Typography>

        <Typography style={{ flex: 1 }} color="inherit">
          BOOKS
        </Typography>

        {props.currentUser ? (
          <div>
            <span color="inherit" style={{ paddingRight: "10px" }}>
              {props.currentUser.displayName}
            </span>

            <Button
              onClick={props.logOut}
              disableElevation
              variant="contained"
              color="secondary"
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
      </Toolbar>
    </AppBar>
  );
}
