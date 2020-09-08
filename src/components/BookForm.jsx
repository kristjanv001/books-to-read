import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { db } from "../firebase/firebaseConfig";
import firebase from "../firebase/firebaseConfig";
import Button from "@material-ui/core/Button";

export default function BookForm(props) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAuthor, setInputAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("books").add({
      userId: props.currentUser.id,
      title: inputTitle,
      author: inputAuthor,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      done: false,
    });
    setInputTitle("");
    setInputAuthor("");
  };

  return (
    <Paper
      style={{
        backgroundColor: "#whitesmoke",
        margin: "1rem 0",
        padding: "1rem",
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          margin="normal"
          label="Add the title"
          fullWidth
        />
        <TextField
          type="text"
          value={inputAuthor}
          onChange={(e) => setInputAuthor(e.target.value)}
          margin="normal"
          label="Add the name of the author(s)"
          fullWidth
        />

        <Button
          disabled={!inputTitle || !inputAuthor}
          type="submit"
          size="large"
          style={{
            fontSize: "1em",
            marginTop: "1rem",
            backgroundColor: "#2ec1ac",
            width: "100%",
            fontWeight: "900",
            color: "whitesmoke",
          }}
          variant="contained"
          color="default"
        >
          Save
        </Button>
      </form>
    </Paper>
  );
}
