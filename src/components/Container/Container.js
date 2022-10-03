import { useState } from "react";
import "./Container.css";
import Form from "../Form/Form";
import ListOfTasks from "../ListOfTasks/ListOfTasks";
import Button from "../Button/Button";

const TASKS = [
  {
    id: 1,
    important: false,
    message: "Hola",
  },
  {
    id: 2,
    important: false,
    message: "Adios",
  },
];

export default function Container() {
    const [tasks, setTasks] = useState(TASKS);

    const handleAddItem = (item) => {
      setTasks([...tasks, item]);
    };
  
    return (
      <div className="Container">
        <Form handleAddItem={handleAddItem} />
        <ListOfTasks tasks={tasks} />
        <Button setTasks={setTasks} />
      </div>
    );
  }
  