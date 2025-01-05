import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getBook, getBooks } from "./data";
function App() {
  console.log("alou");

  const [braum, setBraum] = useState(getBooks());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and leo save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
