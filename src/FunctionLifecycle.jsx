import React, { useEffect, useState } from "react";

function FunctionLifecycle() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  useEffect(() => {
    //will execute after every render()
    //direct changes of state can leads to in-finite re-renders
    //if we directly change the state here than it will rerender again and again
    console.log("1st syntax without.... second arguments");
  });

  useEffect(() => {
    //this execute only once after the  initial render
    //this executes in the mounting phase of a component
    //this is similar to componentDidMount in class based component
    console.log(
      "2nd syntax .... with second argument as empty array dependencies"
    );
  }, []);

  useEffect(() => {
    //this useEffect executes in the updating phase of a component
    //this is similar to componentDidUpdate() method in class
    //this particular useEffect depends upon the passing state
    //it execute after the changes in dependencies array state/props
    console.log(
      "3rd syntax .... with second argument as state/props dependencies"
    );
  }, [count, color]);

  useEffect(() => {
    console.log("4th syntax .... with render function");
    return () => {
      //this  executes in the unmounting  phase of component
      //executes before the useEffect() to cleanup the previous ongoing task/logic
      //similar to the componentWillUnmount() method in class component
      console.log("");
    };
  });

  return (
    <>
      {console.log("render method")}
      <h1>Life cycle in function based component</h1>
      <h2 style={{ color: color }}>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Change Count</button>
      <button onClick={() => setColor("blue")}>Change Color</button>
    </>
  );
}

export default FunctionLifecycle;
