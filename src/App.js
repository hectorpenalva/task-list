import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import ListOfTasks from "./components/ListOfTasks/ListOfTasks";
import Button from "./components/Button/Button";

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

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const handleAddItem = (item) => {
    setTasks([...tasks, item]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form handleAddItem={handleAddItem} />
        <ListOfTasks tasks={tasks} />
        <Button setTasks={setTasks} />
      </header>
    </div>
  );
}

export default App;
