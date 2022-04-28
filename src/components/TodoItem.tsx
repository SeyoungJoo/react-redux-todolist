import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "redux/action";

export interface TodoProps {
  todo: {
    title: string;
    id: number;
  };
}
const Todo: React.FC<TodoProps> = ({ todo: { id, title } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="todo" key={id}>
      {title}
      <p onClick={handleDelete}>X</p>
    </div>
  );
};

export default Todo;
