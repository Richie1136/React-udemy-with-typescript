import Todo from "../../models/todo";
import TodosItem from "../todositem/TodosItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <div>
      <ul className={classes.todos}>
        {props.items.map((item) => (
          <TodosItem key={item.id} text={item.text} />
        ))}
      </ul>
      <p>{props.children}</p>
    </div>
  );
};

export default Todos;
