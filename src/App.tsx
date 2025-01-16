import React, { useState } from "react";
import "./index.css";
export default function App() {
  return (
    <div className="container">
      <Counter />
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  function incrementCount() {
    setCount((c) => c + step);
  }

  function decrementCount() {
    setCount((c) => c - step);
  }

  function incrementStep() {
    setStep((c) => c + 1);
  }

  function decrementStep() {
    setStep((c) => c - 1);
  }
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="button" onClick={decrementStep}>
          -
        </button>
        <h1 className="h1">Step: {step}</h1>
        <button className="button" onClick={incrementStep}>
          +
        </button>
      </div>

      <div style={{ display: "flex" }}>
        <button className="button" onClick={decrementCount}>
          -
        </button>
        <h1 className="h1">Counter: {count}</h1>
        <button className="button" onClick={incrementCount}>
          +
        </button>
      </div>
    </div>
  );
}
