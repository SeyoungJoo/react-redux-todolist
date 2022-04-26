import { useState, useEffect, useRef, useMemo, memo } from "react";

const TodoList = ({ counter, handleCounter }) => {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTask = () => {
    setTodoList([...todoList, todoInput]);
    setTodoInput("");
  };

  const expensiveComputation = useMemo(() => {
    let n = 0;
    for (let i = 0; i < 900000000; i++) {
      n++;
    }
    return n;
  }, []);

  // let expensiveComputation = 0;
  // for (let i = 0; i < 900000000; i++) {
  //   expensiveComputation++;
  // }

  console.log("This is Child Component !!!");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="app_container">
      <button onClick={handleCounter}>Click ++</button>
      <h1>
        expensive value: {expensiveComputation}
        <br />
        counter: {counter}
      </h1>
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

export default memo(TodoList);
