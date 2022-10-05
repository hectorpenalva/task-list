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
    message: "Hola",
  },
  {
    id: 2,
    completed: true,
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
        <Menu />
        <ListOfTasks tasks={tasks} setTasks={setTasks}/>
        <Button setTasks={setTasks} />
      </div>
    );
  }
  