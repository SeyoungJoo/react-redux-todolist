import { useState, useEffect, useCallback } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [time, setTime] = useState(new Date());
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  }, [time]);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  console.log("This is Parents Component");

  return (
    <>
      <h1>{time.toLocaleTimeString()}</h1>
      <TodoList counter={counter} handleCounter={handleCounter} />
    </>
  );
}

export default App;
