// import React from "react";
// import { useReducer } from "react";
// import ExpensiveComponent from "./ExpensiveComponent";
// import "./App.css";

// // Understanding useReducers
// //This is a hook that is used for managing the state of the app.
// //This is very similar to the reduce array method in js
// const ACTION = {
//   INCREMENT: "increment",
//   DECREMENT: "decrement",
//   NEW_USER_INPUT: "newUserInput",
//   TG_COLOR: "tg_color",
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         count: state.count + 1,
//       };
//     case "DECREMENT":
//       return {
//         count: state.count - 1,
//       };
//     case "newUserInput":
//       return {
//         ...state,
//         userInput: action.payload,
//       };
//     case "tgClor":
//       return {
//         ...state,
//         color: !state.color,
//       };
//     default:
//       throw new Error();
//   }
// };

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, {
//     count: 0,
//     userInput: "",
//     color: false,
//   });
//   return (
//     <div className="app">
//       <input
//         type="text"
//         value={state.userInput}
//         onChange={(e) =>
//           dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })
//         }
//       ></input>
//       <h1>Count: {state.count}</h1>
//       <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
//       <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
//       <button>color</button>
//       <p>{state.userInput}</p>
//     </div>
//   );
// };

// export default App;
