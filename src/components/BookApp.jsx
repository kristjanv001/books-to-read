import React from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";
import Welcome from "./Welcome";

export default function BookApp(props) {
  return (
    <div style={{ width: "100%" }}>
      {!props.currentUser ? (
        <Welcome />
      ) : (
        <div>
          <BookForm currentUser={props.currentUser} />
          <BookList books={props.books} />
        </div>
      )}
    </div>
  );
}
