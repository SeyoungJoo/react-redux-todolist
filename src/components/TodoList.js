import { useState, useContext } from "react";
import { DataContext } from "./DataProvider";

export const TodoList = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useContext(DataContext);

  const handleAddTask = () => {
    setTodoList([...todoList, todoInput]);
    setTodoInput("");
  };

  return (
    <div className="app_container">
      <h3 className="header">To-Do List 📋</h3>
      <div className="input_container">
        <input
          className="input"
          value={todoInput}
          type="text"
          onChange={(e) => setTodoInput(e.currentTarget.value)}
          placeholder="Enter task"
        />
        <button
          type="submit"
          className="button"
          onClick={() => handleAddTask()}
        >
          Add
        </button>
      </div>
      {todoList.map((todo, index) => (
        <p className="todo" key={index}>
          {todo}
        </p>
      ))}
    </div>
  );
};
