import React from "react";
import { useState, useMemo, useEffect } from "react";
import ExpensiveComponent from "./ExpensiveComponent";
import "./App.css";

//Learn useMemo Hook from the Doc and a Youtube tutorial for building good performing apps.

const App = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  const userType = useMemo(
    () => ({
      age: age < 17 ? true : false,
      citizen: country === "USA" ? true : false,
    }),
    [age, country]
  );
  useEffect(() => {
    console.log("user type has changed!");
  }, [userType]);

  return (
    <div className="app">
      <input
        type="text"
        value={text}
        placeholder="Enter a text"
        onChange={(e) => setText(e.target.value)}
      ></input>
      <input
        type="number"
        value={number}
        placeholder="Enter a number"
        onChange={(e) => setNumber(e.target.value)}
      ></input>

      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="number"
        value={age}
        placeholder="Enter Your Age"
        onChange={(e) => setAge(e.target.value)}
      ></input>
      <input
        type="text"
        value={country}
        placeholder="USA"
        onChange={(e) => setCountry(e.target.value)}
      ></input>
      <ExpensiveComponent />
    </div>
  );
};

export default App;
