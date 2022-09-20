import React from "react";

const ExpensiveComponent = React.memo(() => {
  function expensiveFunction() {
    console.log("This function was called!");
    let total = 0;
    for (let i = 0; i < 1000; i++) {
      total += i;
    }
    return total;
  }
  let sum = expensiveFunction();
  console.log("Expensive function rendered");
  return (
    <div>
      <h2>Here is the sum :{sum}</h2>
    </div>
  );
});
export default ExpensiveComponent;
