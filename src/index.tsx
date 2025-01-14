import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const skillData = [
  {
    name: "JavaScript",
    color: "#f0db4f",
    emoji: "🟡",
  },
  {
    name: "Python",
    color: "#3572A5",
    emoji: "🐍",
  },
  {
    name: "Java",
    color: "#B07216",
    emoji: "☕",
  },
  {
    name: "C++",
    color: "#f34b7d",
    emoji: "🟢",
  },
  {
    name: "C#",
    color: "#239120",
    emoji: "🅕",
  },
  {
    name: "HTML",
    color: "#E34C26",
    emoji: "🌐",
  },
  {
    name: "CSS",
    color: "#264de4",
    emoji: "🎨",
  },
  {
    name: "React",
    color: "#61dafb",
    emoji: "⚛️",
  },
  {
    name: "Node.js",
    color: "#68a063",
    emoji: "🟢",
  },
  {
    name: "SQL",
    color: "#c0392b",
    emoji: "💾",
  },
];

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
      {skillData.map((skill) => (
        <Skill skillObj={skill} key={skill.name} />
      ))}
    </div>
  );
}
function Skill({ skillObj }: any) {
  return (
    <div
      className="skill"
      style={{
        background: skillObj.color,
        border: "1px solid rgba(0, 0, 0, 0.75)",
      }}
    >
      <p>{skillObj.name}</p>
      <span>{skillObj.emoji}</span>
    </div>
  );
}
root.render(
  <React.StrictMode>
    <App />{" "}
  </React.StrictMode>,
);
