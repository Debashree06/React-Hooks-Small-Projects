// Reducer function to manage all todo actions
export function todoReducer(state, action) {
  if (action.type === "HANDLE_TASK") {
    if (state.editId) {
      // Update the task
      const updatedTodos = state.todos.map((todo) =>
        todo.id === state.editId ? { ...todo, task: state.task } : todo
      );
      return { ...state, todos: updatedTodos, task: "", editId: null };
    } else {
      // Add a new task
      const newTask = {
        task: state.task,
        id: Math.trunc(Math.random() * 10000),
      };
      return { ...state, todos: [...state.todos, newTask], task: "" };
    }
  } else if (action.type === "DELETE_TASK") {
    // Delete the task by id
    const updatedTodos = state.todos.filter(
      (todo) => todo.id !== action.payload
    );
    return { ...state, todos: updatedTodos };
  } else if (action.type === "EDIT_TASK") {
    // Set the editId and populate task input for editing
    const taskToEdit = state.todos.find(
      (todo) => todo.id === action.payload
    )?.task;
    return { ...state, task: taskToEdit || "", editId: action.payload };
  } else if (action.type === "SET_TASK") {
    return { ...state, task: action.payload };
  } else {
    return state;
  }
}
