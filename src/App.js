import "./App.css";
import Form from "./components/Form/Form";
import ListOfTasks from "./components/ListOfTasks/ListOfTasks";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <ListOfTasks />
        <Button />
      </header>
    </div>
  );
}

export default App;
