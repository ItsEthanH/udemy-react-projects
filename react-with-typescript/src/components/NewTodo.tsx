import React, { useContext, useRef } from 'react';
import TodosContext from '../context/TodoContext';

import classes from './NewTodo.module.css';

const NewTodo = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredTodoText = todoTextInputRef.current!.value;

    if (enteredTodoText?.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredTodoText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
