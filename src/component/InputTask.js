import React, { useState } from 'react';
import AddTaskButton from './AddTaskButton';

const InputTask = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={task} 
        onChange={handleInputChange} 
        placeholder="Enter your task here"
      />
      <AddTaskButton onClick={() => {
        if (task.trim()) {
          addTask(task); // Call the function to add the task
          setTask(''); // Clear the input field
        }
      }} />
    </div>
  );
};

export default InputTask;