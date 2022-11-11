export const TaskList = ({ tasks, setTask }) => {
  console.log(tasks);

  const handleCheckbox = (task) => {
    task.done = !task.done;
    const updatedTasks = [...tasks];
    updatedTasks[task.id - 1] = task;

    setTask(updatedTasks);
  };

  const handleDelete = (task) => {
    const updatedTasks = tasks.filter((item) => item.id !== task.id);
    setTask(updatedTasks);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={task.done ? { textDecoration: "line-through" } : {}}
        >
          {task.task}
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => handleCheckbox(task)}
          ></input>
          <button
            onClick={() => {
              handleDelete(task);
            }}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};
