import React, { useState } from "react";
import InputTask from "./component/InputTask";
import CountdownTimer from "./component/CountdownTimer";
import TaskListItem from "./component/TaskListItems";
import "./AppStyles.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Clear the task list at midnight
  const refreshTasks = () => {
    setTasks([]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, taskIndex) => taskIndex !== index));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Daily Task</h1>
      <CountdownTimer onMidnight={refreshTasks} />
      <InputTask addTask={addTask} />
      <TaskListItem tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default App;
