import { useEffect, useState } from "react";
import "./App.css";
import { TaskForm } from "./components/Form/TaskForm";
import { TaskList } from "./components/TaskList/TaskList";

function App() {
  const initialTasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [
        {
          id: 1,
          task: "Ir a la compra",
          done: false,
        },
        {
          id: 2,
          task: "Hacer ejercicios de react",
          done: true,
        },
      ];

  const [tasks, setTask] = useState(initialTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <TaskForm setTask={setTask} tasks={tasks}></TaskForm>
      <TaskList setTask={setTask} tasks={tasks}></TaskList>
    </div>
  );
}

export default App;
