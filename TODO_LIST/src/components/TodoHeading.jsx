import React, { useState } from "react";
import TodoList from "./TodoList";


function TodoHeading({ heading, deleteHeading, addItem }) {
  const [listInput, setListInput] = useState("");

  const handleAddItem = () => {
    if (listInput.trim() === "") return;
    addItem(heading.id, listInput);
    setListInput("");
  };

  return (
    <div className="heading-card">
      <div className="heading-header">
        <h3>{heading.title}</h3>
        <button className="delete-btn" onClick={() => deleteHeading(heading.id)}>
          Delete Heading
        </button>
      </div>

      <TodoList items={heading.items} />

      <div className="add-item">
        <input
          type="text"
          placeholder="Add List"
          value={listInput}
          onChange={(e) => setListInput(e.target.value)}
        />
        <button onClick={handleAddItem}>Add List</button>
      </div>
    </div>
  );
}

export default TodoHeading;
