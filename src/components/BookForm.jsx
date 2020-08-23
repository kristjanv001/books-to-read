import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "../hooks/useInputState";
import { db } from "../firebase/firebaseConfig";
import firebase from "../firebase/firebaseConfig";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";

export default function BookForm(props) {
  const [inputTitle, setInputTitle, resetInputTitle] = useInputState("");
  const [inputAuthor, setInputAuthor, resetInputAuthor] = useInputState("");

  // console.log("noniinahh", props.currentUser.id);

  // new
  /* db.collection(`users/${props.currentUser.id}`).add({
      booksObj: [], */

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("books").add({
      userId: props.currentUser.id,
      title: inputTitle,
      author: inputAuthor,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    resetInputTitle();
    resetInputAuthor();
  };

  return (
    <Paper
      style={{ backgroundColor: "snow", margin: "1rem 0", padding: "1rem" }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          value={inputTitle}
          onChange={setInputTitle}
          margin="normal"
          label="Add the title"
          fullWidth
        />
        <TextField
          type="text"
          value={inputAuthor}
          onChange={setInputAuthor}
          margin="normal"
          label="Add the name of the author(s)"
          fullWidth
        />

        <Button
          disabled={!inputTitle || !inputAuthor}
          type="submit"
          // disabled
          // variant="outlined"
          disableElevation
          style={{ marginTop: "1rem" }}
          variant="contained"
          color="default"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </form>
    </Paper>
  );
}
