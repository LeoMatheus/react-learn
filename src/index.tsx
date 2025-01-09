import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="card">
      {/* <Avatar /> */}
      <div className="data">
        {/* <Intro /> */}
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        {/* <SkillList /> */}
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />{" "}
  </React.StrictMode>,
);
