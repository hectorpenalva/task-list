import { useState } from "react";
import "./Form.css";

export default function Form(props) {
  const { handleAddItem } = props;
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAddItem({
      id: Math.random(),
      important: false,
      message: newTask,
    });

    setNewTask("");
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={newTask}
          onChange={handleChange}
        />
        <button disabled={newTask ? "" : "disabled"}>Add </button>
      </form>
    </div>
  );
}
