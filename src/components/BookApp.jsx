import React, { useState, useEffect } from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";
import { db } from "../firebase/firebaseConfig";
import Welcome from "./Welcome";

export default function BookApp(props) {
  return (
    <div>
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
