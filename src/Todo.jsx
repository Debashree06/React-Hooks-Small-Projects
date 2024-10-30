import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);

  const addTask = () => {
    if (task.trim()) {
      if (editId) {
        //if id is present than match the id and update the task
        let updatedTodos = todos.map((ele) => {
          if (ele.id === editId) {
            ele.task = task;
          }
          return ele;
        });
        setTodos(updatedTodos);
        setEditId(null);
      } else {
        //if id not present than add the task
        let obj = {
          task: task,
          id: Math.trunc(Math.random() * 10000),
        };
        setTodos([...todos, obj]);
      }
    } else {
      alert("Write task before adding");
    }
    setTask("");
  };

  const deleteTask = (id) => {
    //console.log(id)
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTask = (id) => {
    // console.log(id);
    // editId = id;
    setEditId(id);
    let task = todos.find((ele) => ele.id == id)?.task;
    setTask(task);
  };
  return (
    <>
      <div className="bg-secondary d-flex gap-2 p-4">
        <input
          type="text"
          className="form-control flex-grow-1 fs-4"
          placeholder="write your task here..."
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        {editId ? (
          <>
            <button
              className="py-2 px-4 bg-warning text-white fs-4"
              onClick={addTask}
            >
              Update
            </button>
          </>
        ) : (
          <>
            <button
              className="py-2 px-4 bg-success text-white fs-4"
              onClick={addTask}
            >
              Add
            </button>
          </>
        )}
      </div>
      <div className="container bg-light p-4 my-2">
        {todos.map((ele) => {
          return (
            <div
              key={ele.id}
              className="task d-flex justify-content-between border border-dark my-2"
            >
              <h1 className="fs-4">{ele.task}</h1>
              <div className="btn d-flex gap-3">
                <button
                  className="btn btn-outline-info"
                  onClick={() => editTask(ele.id)}
                >
                  EDIT
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteTask(ele.id)}
                >
                  DELETE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Todo;
