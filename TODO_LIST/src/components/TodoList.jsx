import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ items }) {
  return (
    <ul className="todo-items">
      {items.map((item, index) => (
        <TodoListItem key={index} item={item} />
      ))}
    </ul>
  );
}

export default TodoList;
