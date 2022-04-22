import { DataProvider } from "./components/DataProvider";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <DataProvider>
      <TodoList />
    </DataProvider>
  );
}

export default App;
