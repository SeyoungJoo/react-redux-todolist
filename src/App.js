import { useState, useEffect, useCallback } from "react";
import TodoList from "./components/TodoList";
import DebugValueComponent from "./components/useIsRaining";

function App() {
  const [time, setTime] = useState(new Date());
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  }, [time]);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  // const handleCounter2 = useCallback(() => {
  //   setCounter2(counter2 + 10);
  // });

  // const handleCounter2 = () => {
  //   setCounter2(counter2 + 10);
  // };

  console.log("This is Parents Component");

  return (
    <>
      {/* <button onClick={handleCounter2}> Click2</button> */}
      <h1>{time.toLocaleTimeString()}</h1>
      <TodoList counter={counter} handleCounter={handleCounter} />
      <DebugValueComponent />
    </>
  );
}

export default App;
