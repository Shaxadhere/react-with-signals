import React from "react";
import {todos} from "./Todos.jsx"
import {computed} from "@preact/signals-react"

const completedTodos = computed(() => todos.value.filter(todo => todo.isCompleted))

const Header = () => {
  console.log("Header rerendered")
  return (
    <header className="header">
      <div className="flex-between-center">
        <div className="logo">Logo</div>
        <div className="completed-todos">Completed Todos: {completedTodos.value.length}</div>
      </div>
    </header>
  );
};

export default Header;
