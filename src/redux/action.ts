let id = 1;

export function addTodo(todo: { title: string }) {
  return {
    type: "ADD_TODO",
    payload: {
      id: id++,
      title: todo.title,
    },
  };
}

export const deleteTodo = (id: number) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};
