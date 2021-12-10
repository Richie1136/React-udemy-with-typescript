import TodosItem from "../todositem/TodosItem";
import classes from "./Todos.module.css";
import { useContext } from "react";
import { TodosContext } from "../../store/todos-context";

const Todos: React.FC = () => {
  const context = useContext(TodosContext);
  return (
    <div>
      <ul className={classes.todos}>
        {context.items.map((item) => (
          <TodosItem key={item.id} text={item.text} onRemoveTodo={context.removeTodo.bind(null, item.id)} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
