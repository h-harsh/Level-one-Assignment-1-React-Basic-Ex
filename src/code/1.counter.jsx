import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function add() {
    setCounter((prev) => prev + 1);
  }
  function less() {
    setCounter((prev) => prev - 1);
  }
  return (
    <div className="new">
      <h1>Counter</h1>
      <button onClick={add}>+</button>
      <h2>{counter}</h2>
      <button onClick={less}>-</button>
    </div>
  );
}
export default Counter;
