import classes from "./TodosItem.module.css";

const TodosItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodosItem;
