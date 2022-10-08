import "./ListOfTasks.css";

export default function ListOfTasks(props) {
  const { showTasks, tasks, setTasks } = props;

  return (
    <div className="ListOfTasks">
      <ul>
        {tasks
          .filter((task) => {
            if (showTasks === "Pending") {
              return task.completed === false;
            } else if (showTasks === "Completed") {
              return task.completed === true;
            } else {
              return task;
            }
          })
          .map((task) => (
            <li className="task" key={task.id}>
              <span>{task.message}</span>
              <div className="buttons">
                <button
                  className="complete-task"
                  onClick={() => {
                    task.completed = !task.completed;
                    const newArray = tasks.filter((e) => e);
                    setTasks(newArray);
                  }}
                >
                  {" "}
                  <svg
                    width="18px"
                    height="18px"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#444"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke={task.completed === true ? "#0f7" : "#999"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <button
                  className="remove-task"
                  onClick={() => {
                    const newArray = tasks.filter((e) => e.id !== task.id);
                    setTasks(newArray);
                  }}
                >
                  {" "}
                  <svg
                    width="18px"
                    height="18px"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#444"
                  >
                    <path
                      d="M19 11v9.4a.6.6 0 01-.6.6H5.6a.6.6 0 01-.6-.6V11M10 17v-6M14 17v-6M21 7h-5M3 7h5m0 0V3.6a.6.6 0 01.6-.6h6.8a.6.6 0 01.6.6V7M8 7h8"
                      stroke="#ff0000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
