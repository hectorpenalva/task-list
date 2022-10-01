import "./Button.css";

export default function Button(props) {
  const { setTasks } = props;

  const removeTasks = () => {
    setTasks([]);
  };

  return (
    <div className="Button">
      <button onClick={removeTasks}>REMOVE ALL</button>
    </div>
  );
}
