import { useState } from "react";

export const TaskForm = ({ tasks, setTask }) => {
  const [newTask, setNewTask] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  const newInput = ({ target: { value } }) => {
    const taskToAdd = {
      id: tasks.length + 1,
      task: value,
      done: false,
    };
    setNewTask(taskToAdd);
  };

  const handleClick = () => {
    setTask([...tasks, newTask]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" maxLength={100} onChange={newInput}></input>
      <button onClick={handleClick}>Add task</button>
    </form>
  );
};
