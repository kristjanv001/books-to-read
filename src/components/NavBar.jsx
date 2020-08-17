import AppBar from "@material-ui/core/AppBar";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import MenuBookIcon from "@material-ui/icons/MenuBook";

export default function NavBar() {
  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Typography color="inherit">
          <MenuBookIcon style={{ paddingRight: "10px" }} />
        </Typography>

        <Typography color="inherit"> BOOK TO READ</Typography>
      </Toolbar>
    </AppBar>
  );
}
