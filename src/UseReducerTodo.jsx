import React from "react";
import { todoReducer } from "./reducer/todoReducer";

function Todo() {
  const initialState = { todos: [], task: "", editId: null };
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleTask = () => {
    if (state.task.trim()) {
      dispatch({ type: "HANDLE_TASK" });
    } else {
      alert("Write a task before adding");
    }
  };

  return (
    <>
      <div className="bg-secondary d-flex gap-2 p-4">
        <input
          type="text"
          className="form-control flex-grow-1 fs-4"
          placeholder="Write your task here..."
          onChange={(e) =>
            dispatch({ type: "SET_TASK", payload: e.target.value })
          }
          value={state.task}
        />
        <button
          className={`py-2 px-4 ${
            state.editId ? "bg-warning" : "bg-success"
          } text-white fs-4`}
          onClick={handleTask}
        >
          {state.editId ? "Update" : "Add"}
        </button>
      </div>
      <div className="container bg-light p-4 my-2">
        {state.todos.map((ele) => (
          <div
            key={ele.id}
            className="task d-flex justify-content-between border border-dark my-2"
          >
            <h1 className="fs-4">{ele.task}</h1>
            <div className="btn d-flex gap-3">
              <button
                className="btn btn-outline-info"
                onClick={() => dispatch({ type: "EDIT_TASK", payload: ele.id })}
              >
                EDIT
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() =>
                  dispatch({ type: "DELETE_TASK", payload: ele.id })
                }
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Todo;
