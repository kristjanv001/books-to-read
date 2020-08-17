import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";

export default function TodoItem(props) {
  console.log(props);
  return (
    <React.Fragment>
      <ListItem
        style={{ textDecoration: props.todo.done ? "line-through" : "none" }}
      >
        <Checkbox checked={props.todo.done} />
        <ListItemText secondary={"author"}>{props.todo.text}</ListItemText>
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </React.Fragment>
  );
}
