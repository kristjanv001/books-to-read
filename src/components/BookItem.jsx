import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import { db } from "../firebase/firebaseConfig";

export default function BookItem(props) {
  const handleCheckBox = (e) => {
    db.collection("books").doc(props.book.id).update({
      done: e.target.checked,
    });
  };

  return (
    <React.Fragment>
      <ListItem
        style={{
          color: props.book.done ? "gray" : "black",
        }}
      >
        <Checkbox
          style={{
            color: "#2ec1ac",
          }}
          onChange={handleCheckBox}
          checked={props.book.done}
        />

        <ListItemText secondary={props.book.author}>
          {props.book.title}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={() => db.collection("books").doc(props.book.id).delete()}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </React.Fragment>
  );
}
