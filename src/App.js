import React, { useState } from 'react';
import InputTask from "./component/InputTask";


const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]); 
  };

  return (
    <div className="app-container">
      <h1 className="app-title">To-do task app</h1>
      <InputTask addTask={addTask} />
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li className="task-item" key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
