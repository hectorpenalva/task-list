import { useState } from "react";
import "./Menu.css";

export default function Menu() {
  const [buttonSelected, setNewButtonSelected] = useState("All");
  return (
    <div className="Menu">
      <button 
        onClick={()=>setNewButtonSelected("All")} 
        className={buttonSelected === "All" ? "selected" : ""} 
        href="#">All
      </button>
      <button 
        onClick={()=>setNewButtonSelected("Pending")} 
        className={buttonSelected === "Pending" ? "selected" : ""} 
        href="#">Pending
      </button>
      <button 
        onClick={()=>setNewButtonSelected("Completed")} 
        className={buttonSelected === "Completed" ? "selected" : ""} 
        href="#">Completed
      </button>
    </div>
  );
}
