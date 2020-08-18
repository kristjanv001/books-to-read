import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import { db } from "../firebase/firebaseConfig";

export default function BookItem(props) {
  console.log(props);
  return (
    <React.Fragment>
      <ListItem
        style={{ textDecoration: props.book.done ? "line-through" : "none" }}
      >
        {/* <Checkbox checked={props.book.done} /> */}
        <ListItemText secondary={props.book.author}>
          {props.book.title}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={(e) => db.collection("books").doc(props.book.id).delete()}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </React.Fragment>
  );
}
