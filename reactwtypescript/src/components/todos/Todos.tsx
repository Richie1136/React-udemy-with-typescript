import Todo from "../../models/todo";
import TodosItem from "../todositem/TodosItem";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <TodosItem key={item.id} text={item.text} />
        ))}
      </ul>
      <p>{props.children}</p>
    </div>
  );
};

export default Todos;
