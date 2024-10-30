import React, { useState } from "react";
import ClassLifecycle from "./ClassLifecycle";
import ErrorBounding from "./ErrorBounding";
import FunctionLifecycle from "./FunctionLifecycle";
import Dropdown from "./dropdown";
import Axios from "./Axios";
import UseReducer from "./UseReducer";
import Task2 from "./Task2";
import Task1 from "./Task1";
import Todo from "./Todo";
import UseMemo from "./useMemo";
import UseCallback from "./UseCallback";

function App() {
  const [flag, setFlag] = useState(true);
  return (
    <>
      {/* <ErrorBounding>
        <button onClick={() => setFlag(!flag)}>Remove Component</button>
        {flag && <ClassLifecycle name={"Rohit"} />}
      </ErrorBounding> */}
      {/* <FunctionLifecycle /> */}
      {/* <Dropdown /> */}
      {/* <Axios /> */}
      {/* <UseReducer /> */}
      {/* <Task2 /> */}
      {/* <Task1 /> */}
      {/* <Todo /> */}
      {/* <UseMemo /> */}
      <UseCallback />
    </>
  );
}

export default App;
