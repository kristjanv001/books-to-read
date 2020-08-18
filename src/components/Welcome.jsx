import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Welcome() {
  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Welcome!
      </Typography>

      <Typography variant="body1" gutterBottom>
        Log in to continue.
      </Typography>
    </div>
  );
}
