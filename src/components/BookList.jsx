import React from "react";
import BookItem from "./BookItem";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";

export default function BookList(props) {
  return (
    <div>
      <Paper style={{ backgroundColor: "linen", minHeight: 88 }}>
        <List>
          {props.books.map((book) => {
            return <BookItem key={book.id} book={book} />;
          })}
        </List>
      </Paper>
    </div>
  );
}
