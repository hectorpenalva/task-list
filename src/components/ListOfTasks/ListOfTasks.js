import "./ListOfTasks.css";

export default function ListOfTasks(props) {
  const { tasks, setTasks } = props;

  console.log(tasks);

  return (
    <div className="ListOfTasks">
      <ul>{tasks.map((elemento) => (
        <li className="task" key={elemento.id}>
          <span>{elemento.message}</span>       
          <button className ="remove-task" onClick={()=>{
            const newArray = tasks.filter(e => (
              e.id !== elemento.id
            ))
            setTasks (newArray)
          }}> <svg width="16px" height="16px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#444"><path d="M19 11v9.4a.6.6 0 01-.6.6H5.6a.6.6 0 01-.6-.6V11M10 17v-6M14 17v-6M21 7h-5M3 7h5m0 0V3.6a.6.6 0 01.6-.6h6.8a.6.6 0 01.6.6V7M8 7h8" stroke="#444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
        </li>

      ))}
      </ul>
    </div>
  );
}
