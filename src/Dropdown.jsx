import React, { useState } from "react";

function Dropdown() {
  const [country, setCountry] = useState("");
  const data = [
    {
      name: "India",
      cities: ["Delhi", "Mumbai", "Bangalore", "Pune"],
    },
    {
      name: "USA",
      cities: ["Texas", "NewYork", "Carlifonia", "Miami"],
    },
    {
      name: "UK",
      cities: ["London", "Lords", "Oval", "Bermingham"],
    },
    {
      name: "China",
      cities: ["Beijing", "Wuhan", "Monkong", "Sanghai"],
    },
  ];
  //https://codeshare.io/KWLrVM
  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <h4>Select your country:</h4>
        <select
          onChange={(e) => {
            // console.log(e.target.value);
            setCountry(e.target.value);
          }}
        >
          <option value="">Select your country </option>
          {data.map((item, i) => {
            return (
              <option key={i} value={i}>
                {item?.name}{" "}
              </option>
            );
          })}
        </select>
      </div>
      {country !== "" && (
        <div style={{ display: "flex", gap: "20px" }}>
          <h4>Select your city</h4>
          <select name="" id="">
            <option value="">Select your city:</option>
            {data[country].cities.map((item, i) => {
              console.log(item);
              return (
                <option key={i} value={i}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </>
  );
}

export default Dropdown;
