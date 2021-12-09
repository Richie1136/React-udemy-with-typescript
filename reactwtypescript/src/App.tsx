import "./App.css";
import Todos from "./components/todos/Todos";

function App() {
  return (
    <div className="App">
      <Todos items={["Learn React", "Learn Typescript"]} />
    </div>
  );
}

export default App;
