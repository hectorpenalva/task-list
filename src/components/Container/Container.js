import { useState } from "react";
import "./Container.css";
import Form from "../Form/Form";
import Menu from "../Menu/Menu";
import ListOfTasks from "../ListOfTasks/ListOfTasks";
import Button from "../Button/Button";

const TASKS = [
  {
    id: 1,
    completed: false,
    message: "Example of a pending task",
  },
  {
    id: 2,
    completed: true,
    message: "Example of a completed task",
  },
];

export default function Container() {
  const [tasks, setTasks] = useState(TASKS);
  const [showTasks, setShowTasks] = useState("All");

  const handleAddItem = (item) => {
    setTasks([...tasks, item]);
  };

  return (
    <div className="Container">
      <Form handleAddItem={handleAddItem} />
      <Menu showTasks={showTasks} setShowTasks={setShowTasks} />
      <ListOfTasks showTasks={showTasks} tasks={tasks} setTasks={setTasks} />
      <Button setTasks={setTasks} />
    </div>
  );
}
