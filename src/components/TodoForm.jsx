import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "../hooks/useInputState";

export default function TodoForm(props) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper
      style={{ backgroundColor: "snow", margin: "1rem 0", padding: "1rem" }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add a new book to read"
          fullWidth
        />
      </form>
    </Paper>
  );
}
