import { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

const getLocalStorageItems = () => {
  const list = localStorage.getItem("todoList");
  if (list) {
    return JSON.parse(localStorage.getItem("todoList"));
  } else {
    return [];
  }
};

export const DataProvider = (props) => {
  const [todoList, setTodoList] = useState(getLocalStorageItems());

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <DataContext.Provider value={[todoList, setTodoList]}>
      {props.children}
    </DataContext.Provider>
  );
};
