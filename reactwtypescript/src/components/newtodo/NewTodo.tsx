import React, { useRef } from "react";

const NewTodo = () => {
  const todoTextInput = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInput.current!.value;
    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo Text</label>
      <input typeof="text" id="text" ref={todoTextInput} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
