import Todo from "../../models/todo";
import TodosItem from "../todositem/TodosItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; handleRemoveTodo: (id: string) => void }> = (props) => {
  return (
    <div>
      <ul className={classes.todos}>
        {props.items.map((item) => (
          <TodosItem key={item.id} text={item.text} onRemoveTodo={props.handleRemoveTodo.bind(null, item.id)} />
        ))}
      </ul>
      <p>{props.children}</p>
    </div>
  );
};

export default Todos;
