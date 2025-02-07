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

  function handleReset() {
    setCount(0);
    setStep(1);
  }
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
      <div className="step-controls">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        {/* <button className="button" onClick={decrementStep}> */}
        {/*   - */}
        {/* </button> */}
        <h1 className="h1">Step: {step}</h1>
        {/* <button className="button" onClick={incrementStep}> */}
        {/*   + */}
        {/* </button> */}
      </div>

      <div className="counter-controls">
        <button className="button" onClick={decrementCount}>
          -
        </button>
        {/* <h1 className="h1">Counter: {count}</h1> */}
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button className="button" onClick={incrementCount}>
          +
        </button>
      </div>

      <div className="date-container">
        <DateToday days={count} />
      </div>

      {(count > 0 || step > 1) && (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}

function addDays(date: Date, days: number): Date {
  const newDate = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  return newDate;
}

function DateToday(props: { days: number }) {
  const today = new Date();
  return (
    <div>
      {props.days !== 0 && <span>{props.days} days Days from today </span>}
      {addDays(today, props.days).toDateString()}
    </div>
  );
}
