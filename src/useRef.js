import React from "react";
import { useRef, useState } from "react";
import "./App.css";
const UseRefComponent = () => {
  const [data, setData] = useState("");
  const inputRef = useRef(null);
  const handleClick = () => {
    const value = inputRef.current.value;
    setData(value);
  };
  return (
    <div className="app">
      <h2>Hello</h2>
      <input type="text" ref={inputRef} placeholder="Enter a value"></input>
      <h2>{data}</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default UseRefComponent;
