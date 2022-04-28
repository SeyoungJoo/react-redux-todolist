const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        todos: [...state.todos.filter((todo) => todo.id !== action.id)],
      };
    default:
      return state;
  }
};

export default todosReducer;
