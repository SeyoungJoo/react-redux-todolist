import { useState, useEffect, useRef } from "react";

const TodoList = () => {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleAddTask = () => {
    setTodoList([...todoList, todoInput]);
    setTodoInput("");
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="app_container">
      <h3 className="header">To-Do List 📋</h3>
      <div className="input_container">
        <input
          ref={inputRef}
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

export default TodoList;
