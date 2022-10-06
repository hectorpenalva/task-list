import "./Menu.css";

export default function Menu(props) {
  const { showTasks, setShowTasks } = props;
  
  return (
    <div className="Menu">
      <button 
        onClick={()=>setShowTasks("All")} 
        className={showTasks === "All" ? "selected" : ""}>
          All
      </button>
      <button 
        onClick={()=>setShowTasks("Pending")} 
        className={showTasks === "Pending" ? "selected" : ""}>
          Pending
      </button>
      <button 
        onClick={()=>setShowTasks("Completed")} 
        className={showTasks === "Completed" ? "selected" : ""}>
          Completed
      </button>
    </div>
  );
}
