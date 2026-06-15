import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const totalCount = tasks.length;
  const completedCount = tasks.filter((t) => t.done).length;
  const activeCount = totalCount - completedCount;

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  // Builds a new task object and adds it to the list
  function addTask() {
    const trimmed = inputValue.trim();
    if (!trimmed) return; // ignore empty input

    const newTask = {
      id: Date.now(),
      text: trimmed,
      done: false,
    };

    setTasks([...tasks, newTask]); // ✅ immutable update
    setInputValue(""); // clear the input
  }

  // Lets user press Enter instead of clicking the button
  function handleKeyDown(e) {
    if (e.key === "Enter") addTask();
  }
  function toggleTask(id) {
    setTasks(
      tasks.map(
        (task) =>
          task.id === id
            ? { ...task, done: !task.done } // new object, flipped done
            : task, // unchanged
      ),
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  const visibleTasks = tasks.filter((task) => {
    if (filter === "active") return !task.done;
    if (filter === "completed") return task.done;
    return true;
  });

  // Enter edit mode — set which task and pre-fill its text
  function startEditing(task) {
    setEditingId(task.id);
    setEditValue(task.text);
  }

  // Save the edit — update task text, exit edit mode
  function saveEdit(id) {
    const trimmed = editValue.trim();
    if (!trimmed) return; // don't save empty text

    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: trimmed } : task)),
    );
    setEditingId(null);
    setEditValue("");
  }

  // Cancel — just exit edit mode, no changes
  function cancelEdit() {
    setEditingId(null);
    setEditValue("");
  }

  return (
    <div className="app-container">
      <h1>📝 My To-Do App</h1>

      <div className="add-task-bar">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="task-input"
        />
        <button onClick={addTask} className="add-btn">
          Add Task
        </button>
      </div>
      {/* Filter Bar */}
      <div className="filter-bar">
        <button
          onClick={() => setFilter("all")}
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
        >
          All {totalCount}
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`filter-btn ${filter === "active" ? "active" : ""}`}
        >
          Active {activeCount}
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`filter-btn ${filter === "completed" ? "active" : ""}`}
        >
          Completed {completedCount}
        </button>
      </div>
      {/* Task List */}

      <ul className="task-list">
        {visibleTasks.map((task) => (
          <li key={task.id} className="task-item">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
              className="task-checkbox"
            />

            {editingId === task.id ? (
              // ── EDIT MODE ──
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveEdit(task.id);
                    if (e.key === "Escape") cancelEdit();
                  }}
                  className="edit-input"
                />
                <button onClick={() => saveEdit(task.id)} className="save-btn">
                  💾
                </button>
              </>
            ) : (
              // ── VIEW MODE ──
              <>
                <span
                  className={`task-text ${task.done ? "task-done" : ""}`}
                  onDoubleClick={() => startEditing(task)}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="delete-btn"
                >
                  ✕
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      {visibleTasks.length === 0 && (
        <p className="empty-message">
          {tasks.length === 0
            ? "No tasks yet. Add one above! 👆"
            : "No tasks match this filter."}
        </p>
      )}
    </div>
  );
}

export default App;
