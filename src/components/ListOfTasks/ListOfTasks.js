import "./ListOfTasks.css";

export default function ListOfTasks(props) {
  const { tasks, setTasks } = props;

  console.log(tasks);

  return (
    <div className="ListOfTasks">
      {tasks.map((elemento) => (
        <div key={elemento.id}>{elemento.message}</div>
      ))}
    </div>
  );
}
