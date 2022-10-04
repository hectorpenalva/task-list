import "./ListOfTasks.css";

export default function ListOfTasks(props) {
  const { tasks, setTasks } = props;

  console.log(tasks);

  return (
    <div className="ListOfTasks">
      {tasks.map((elemento) => (
        <div key={elemento.id}>{elemento.message}         
          <button onClick={()=>{
            const newArray = tasks.filter(e => (
              e.id !== elemento.id
            ))
            setTasks (newArray)
          }}> BORRAR </button>
        </div>

      ))}
    </div>
  );
}
