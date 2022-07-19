import React, { useState } from 'react';

import Todo from '../models/todo';

type TodosContextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

type Props = { children: React.ReactNode };

const TodosContext = React.createContext<TodosContextType>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

export const TodosContextProvider: React.FC<Props> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodoHandler(todoText: string) {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function removeTodoHandler(todoId: string) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  }

  const contextValue: TodosContextType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
};

export default TodosContext;
