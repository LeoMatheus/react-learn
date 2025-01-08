import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <p>Hello App</p>;
}
const rootElement =
  document.getElementById("root") || document.createElement("div");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />{" "}
  </React.StrictMode>,
);
