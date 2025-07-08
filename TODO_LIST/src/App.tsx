import React, { useState } from "react";
import TodoHeading from "./components/TodoHeading";
import "./App.css";

function App() {
  const [headings, setHeadings] = useState([
    {
      id: 1,
      title: "Grocery Items",
      items: ["Milk", "Bread", "Butter"]
    },
    {
      id: 2,
      title: "Office Work",
      items: ["Finish Report", "Prepare Presentation", "Schedule Meeting"]
    }
  ]);
  const [headingInput, setHeadingInput] = useState("");

  const addHeading = () => {
    if (headingInput.trim() === "") return;
    setHeadings([
      ...headings,
      { id: Date.now(), title: headingInput, items: [] }
    ]);
    setHeadingInput("");
  };

  const deleteHeading = (id) => {
    setHeadings(headings.filter((h) => h.id !== id));
  };

  const addItemToHeading = (id, item) => {
    setHeadings(
      headings.map((h) =>
        h.id === id ? { ...h, items: [...h.items, item] } : h
      )
    );
  };

  return (
    <div className="app">
      <h2>My Todo List</h2>
      <div className="add-heading">
        <input
          type="text"
          placeholder="Enter heading"
          value={headingInput}
          onChange={(e) => setHeadingInput(e.target.value)}
        />
        <button onClick={addHeading}>Add Heading</button>
      </div>

      <div className="heading-list">
        {headings.map((heading) => (
          <TodoHeading
            key={heading.id}
            heading={heading}
            deleteHeading={deleteHeading}
            addItem={addItemToHeading}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
