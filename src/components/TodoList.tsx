import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "redux/action";
import Todo from "./TodoItem";

interface RootState {
  todos: [{ id: number; title: string }];
}

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  //state = {todos: [{id: 1, title: 'sss', id: 2, title: 'aaa'}]}

  console.log(todos);
  const addTask = () => {
    dispatch(addTodo({ title: todoInput }));
    setTodoInput("");
  };

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
        <button type="submit" className="button" onClick={addTask}>
          Add
        </button>
      </div>
      {todos.map((todo: { title: string; id: number }, index: number) => {
        return <Todo key={index} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
