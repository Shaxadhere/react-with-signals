import React from "react";
import { signal, effect } from "@preact/signals-react";

const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9);
};

const getData = () => {
  const value = localStorage.getItem("todos");
  if (value === null) return [];
  return JSON.parse(value);
};

export const todos = signal(getData());
const inputValue = signal("");

effect(() => {
  localStorage.setItem("todos", JSON.stringify(todos.value));
});

const Todos = () => {

  console.log("Todos rerenderd")
  const addTodo = (e) => {
    if (inputValue.value === "") return;
    e.preventDefault();
    todos.value = [
      ...todos.value,
      { id: generateUniqueId(), name: inputValue.value, isCompleted: false },
    ];
    inputValue.value = "";
  };

  const onTodoChange = (e, todo) => {
   const isCompleted = e.target.checked;
    todos.value = todos.value.map((t) => {
      if (t.id === todo.id) {
        return { ...t, isCompleted };
      }
      return t;
    });
  };
  return (
    <div>
      <div className="max-w-500 flex-center gap-5">
        <div>
          <label className="label">
            <span className="label-text">Enter Todo</span>
          </label>
          <input
            className="input"
            type="text"
            value={inputValue.value}
            onChange={(e) => (inputValue.value = e.target.value)}
          />
        </div>
        <input
          disabled={!inputValue.value}
          type="button"
          value={"Save"}
          className="submit-btn"
          onClick={addTodo}
        />
      </div>
      <h2>Todos</h2>
      {todos.value.map((todo) => (
        <div key={todo.id} className="flex-center">
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={(e) => onTodoChange(e, todo)}
          />
          <p>{todo.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Todos;
