import React, { useReducer } from "react";
import { countReducer } from "./reducer/countReducer";

function UseReducer() {
  const [count, dispatch] = useReducer(countReducer, 10);
  return (
    <>
      <h2>useReducer function</h2>
      <h1> {count}</h1>
      <div style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
        <button onClick={() => dispatch({ type: "inc", payload: 1 })}>
          Inc 1
        </button>
        <button onClick={() => dispatch({ type: "dec", payload: 1 })}>
          Dec 1
        </button>
      </div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
        <button onClick={() => dispatch({ type: "inc", payload: 5 })}>
          Inc 5
        </button>
        <button onClick={() => dispatch({ type: "dec", payload: 5 })}>
          Dec 5
        </button>
      </div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
        <button onClick={() => dispatch({ type: "inc", payload: 10 })}>
          Inc 10
        </button>
        <button onClick={() => dispatch({ type: "dec", payload: 10 })}>
          Dec 10
        </button>
      </div>
    </>
  );
}

export default UseReducer;
