import React from "react";
import TodoItem from "./TodoItem";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";

export default function TodoList(props) {
  return (
    <div>
      <Paper style={{ backgroundColor: "linen" }}>
        <List>
          {props.todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </List>
      </Paper>
    </div>
  );
}
