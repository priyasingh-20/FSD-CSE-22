import { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const renderCount = useRef(0);

  renderCount.current += 1;

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  useEffect(() => {
    setMessage(`Updated Count-${count}`);
  }, [count]);

  return (
    <div>
      <h1>Counter App</h1>

      <div className="counter">
        <button className="btn" onClick={increment}>+</button>

        <div className="count">{count}</div>

        <button className="btn" onClick={decrement}>-</button>
      </div>

      <h2>{message}</h2>

      <h2>Render Count: {renderCount.current}</h2>
    </div>
  );
};

export default Counter;