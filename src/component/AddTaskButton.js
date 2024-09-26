import './AddTaskButton.css';

const AddTaskButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Add Task
    </button>
  );
};

export default AddTaskButton;