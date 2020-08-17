import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoApp() {
  const initialTodos = [
    { id: 1, text: "The Shallows", done: true },
    { id: 2, text: "Ego is the Enemy", done: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (todoText) => {
    setTodos([...todos, { id: 4, text: todoText, done: false }]);
  };

  // , {id:4, text: newTodoText, done: false}
  return (
    <div>
      {/* <h2>TodoApp Heading</h2> */}
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
