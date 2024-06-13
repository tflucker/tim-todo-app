import React from "react";

function TodoItem({ task, deleteTask, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(task.id);
  }
  return (
    <div className="todo-item">
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      <p>{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>Delete Task</button>
    </div>
  );
}
export default TodoItem;
