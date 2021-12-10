import "./App.css";
import Todos from "./components/todos/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/newtodo/NewTodo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
