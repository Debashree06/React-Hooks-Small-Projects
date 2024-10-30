import React, { useState, useMemo } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  // function getNumber() {
  //   return count * 10;
  // }

  let getNumber = useMemo(() => {
    console.log("hiiiiiiii");
    for (let i = 0; i <= 10000; i++) {}
    return count * 10;
  }, [count]);
  return (
    <>
      <h1 style={{ color: color }}>useMemo hook</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Change count</button>
      <button onClick={() => setColor(color == "red" ? "green" : "red")}>
        Change Color
      </button>
      <h2>{getNumber}</h2>
    </>
  );
}

export default UseMemo;
