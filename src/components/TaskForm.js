import React, { useState } from "react";


function TaskForm({ addTask }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;       // prevents adding empty tasks
        addTask({ text, completed: false}); 
        setText("");        // clears input box after adding 
    };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
        <input 
        type="text"
        className="form-control"
        placeholder="Add new task..."
        value={text}
        onChange={(e) => setText(e.target.value)} 
        />
        <button type="submit" className="btn btn-secondary">Add</button>
    </form>
  );
}


export default TaskForm;