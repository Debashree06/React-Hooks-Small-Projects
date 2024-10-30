import React, { useEffect, useState } from "react";

function Task2() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("black");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    if (count % 2 === 0) {
      setColor("green");
    } else {
      setColor("blue");
    }
  }, [count]);

  return (
    <div>
      <button onClick={increment}>+</button>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Task2;
