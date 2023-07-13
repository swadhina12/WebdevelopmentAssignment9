import React, { useState } from 'react';
import './TodoApp.css';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    setTasks([...tasks, { task: newTask, completed: false }]);
    setNewTask('');
  };

  const handleRemove = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleUpdateStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            {task.task}
            <div>
              <button onClick={() => handleUpdateStatus(index)}>
                Update Status
              </button>
              <button onClick={() => handleRemove(index)}>Remove Todo</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
