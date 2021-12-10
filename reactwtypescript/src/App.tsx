import "./App.css";
import Todos from "./components/todos/Todos";
import NewTodo from "./components/newtodo/NewTodo";
import TodosContextProvider from "./store/todos-context";

// All commented out code is used inside of the todos-context.tsx file

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);

  // const handleAddTodo = (text: string) => {
  //   const newTodo = new Todo(text);
  //   setTodos((prevState) => {
  //     return prevState.concat(newTodo);
  //   });
  // };

  // const handleRemoveTodo = (id: string) => {
  //   setTodos((prevState) => {
  //     return prevState.filter((todo) => todo.id !== id);
  //   });
  // };
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
