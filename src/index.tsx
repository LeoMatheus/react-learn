import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
function App() {
  return (
    <div className="card">
      <Avatar imgFile={"profile.jpg"} altName={"Niggaheart"} />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

function Avatar(props: any) {
  return <img className={"avatar"} src={props.imgFile} alt={props.altName} />;
}

function Intro() {
  return (
    <div>
      <h1>Terry A. Davis</h1>
      <p>
        Terrence Andrew Davis (December 15, 1969 – August 11, 2018) was an
        American electrical engineer and computer programmer best known for
        creating and designing TempleOS, an operating system in the public
        domain, by himself.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill={"TempleOS"} />
      <Skill skill={"TempleOS"} />
      <Skill skill={"TempleOS"} />
    </div>
  );
}
function Skill(props: any) {
  return <div className="skill">{props.skill}</div>;
}
root.render(
  <React.StrictMode>
    <App />{" "}
  </React.StrictMode>,
);
