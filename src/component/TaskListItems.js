import React from "react";
import AddAndRemoveTaskItem from "./AddAndRemoveTaskItem";
import "./TaskListItem.css";

const TaskListItem = ({ tasks, removeTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <AddAndRemoveTaskItem
          key={index}
          task={task}
          index={index}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
};

export default TaskListItem;
