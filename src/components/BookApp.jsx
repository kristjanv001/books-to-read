import React, { useState, useEffect } from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";
import { db } from "../firebase/firebaseConfig";

export default function TodoApp() {
  const [books, setBook] = useState([]);

  useEffect(() => {
    db.collection("books")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        console.log("collection read");
        setBook(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            author: doc.data().author,
          }))
        );
      });
  }, []);

  return (
    <div>
      {/* <h2>TodoApp Heading</h2> */}
      <BookForm />
      <BookList books={books} />
    </div>
  );
}
