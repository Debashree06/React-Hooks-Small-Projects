import axios from "axios";
import React, { useEffect, useState } from "react";

function Axios() {
  let [data, setData] = useState([]);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response = response.json()))
    //   .then((users) => setData(users));
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h1>Using Axios API for date fetching</h1>
      {data.map((item) => {
        return <li>{item.name}</li>;
      })}
    </>
  );
}

export default Axios;
