import React, { useState } from "react";
import Todo from "../models/todo";
// Define a type for general Context
type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

// Create and export context based on defined type
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

// Create a context provider
const TodosContextProvider: React.FC = (props) => {
  //Set the state of the context provider
  const [todos, setTodos] = useState<Todo[]>([]);

  //Set the methods of the context provider
  const deleteTodo = (id: string) => {
    setTodos((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  // Create a context object to be passed filled with values
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteTodo,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
