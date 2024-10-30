import React, { useState, useCallback, useEffect } from "react";

function UseCallback() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  let getNumber = useCallback(() => {
    return count * 100;
  }, [count]);
  console.log(getNumber);

  return (
    <>
      <h1 style={{ color: color }}>useCallback hook</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Change count</button>
      <button onClick={() => setColor(color == "red" ? "green" : "red")}>
        Change Color
      </button>
      <DisplayNumber getNumber={getNumber} />
    </>
  );
}

function DisplayNumber({ getNumber }) {
  useEffect(() => {
    console.log("hi");
  }, [getNumber]);
  return (
    <>
      <h1>Child component</h1>
      <h2>{getNumber()}</h2>
    </>
  );
}

export default UseCallback;
