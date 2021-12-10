import React, { useRef } from "react";
import classes from "./NewTodo.module.css";
import { useContext } from "react";
import { TodosContext } from "../../store/todos-context";

const NewTodo: React.FC = () => {
  const context = useContext(TodosContext);
  const todoTextInput = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInput.current!.value;
    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }
    context.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label htmlFor="text">Todo Text</label>
      <input typeof="text" id="text" ref={todoTextInput} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
