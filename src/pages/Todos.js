import React, { useState, useEffect }from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Todos() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");

    // Load from localStorage
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(saved);
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks([...tasks, {...task, id: Date.now() }]);
    };
    const toggleTask = (id) => {
        setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed} : t)));
    };
    const deleteTask = (id) => {
        setTasks(tasks.filter((t) => t.id !== id));
    };
    // Filter tasks
    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "incomplete") return !task.completed;
        return true;
    });

    return (
        <div>
            <h1 className="luckiest-guy-regular"> My To-dos</h1>
            <TaskForm addTask={addTask}/>
            <div className="mb-3">
                <button className="btn btn-secondary me-2" onClick={() => setFilter("all")}>All</button>
                <button className="btn btn-secondary me-2" onClick={() => setFilter("completed")}>Completed</button>
                <button className="btn btn-secondary " onClick={() => setFilter("incomplete")}>Incomplete</button>
            </div>
            <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask}/>
        </div>
    );
}

export default Todos;