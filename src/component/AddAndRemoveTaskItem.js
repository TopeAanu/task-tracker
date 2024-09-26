import React from "react";
import "./AddAndRemoveTaskItem";

const AddAndRemoveTaskItem = ({ task, index, removeTask }) => {
  return (
    <li className="task-item">
      <span className="task-text">{task}</span>
      <span className="remove-link" onClick={() => removeTask(index)}>
        X
      </span>
    </li>
  );
};

export default AddAndRemoveTaskItem;
