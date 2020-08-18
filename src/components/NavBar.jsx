import AppBar from "@material-ui/core/AppBar";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Button from "@material-ui/core/Button";
import { signInWithGoogle, auth } from "../firebase/firebaseConfig";

// console.log(signInWithGoogle);

export default function NavBar(props) {
  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Typography color="inherit">
          <MenuBookIcon style={{ paddingRight: "10px" }} />
        </Typography>

        <Typography style={{ flex: 1 }} color="inherit">
          BOOKS TO READ
        </Typography>

        {props.currentUser ? (
          <Button
            onClick={() => auth.signOut()}
            disableElevation
            variant="contained"
            color="secondary"
          >
            Log out
          </Button>
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
