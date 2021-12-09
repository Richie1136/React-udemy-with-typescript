import "./App.css";
import Todos from "./components/todos/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/newtodo/NewTodo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
  return (
    <div className="App">
      <NewTodo />
      <Todos items={todos} />
    </div>
  );
}

export default App;
