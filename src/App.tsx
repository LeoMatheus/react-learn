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
      <div>
        <DateToday days={count} />
      </div>
    </div>
  );
}

function addDays(date: Date, days: number): Date {
  const newDate = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  return newDate;
}
function DateToday(props: any) {
  const today = new Date();
  return <h1>{addDays(today, props.days).toDateString()}</h1>;
}
