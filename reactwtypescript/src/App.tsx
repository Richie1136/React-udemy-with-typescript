import "./App.css";
import Todos from "./components/todos/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/newtodo/NewTodo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

  const handleAddTodo = (text: string) => {};
  return (
    <div className="App">
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
