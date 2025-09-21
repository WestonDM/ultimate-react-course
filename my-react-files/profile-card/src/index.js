import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
    {
        skill: "HTML + CSS",
        level: "advanced",
        color: "red",
    },
    {
        skill: "Javascript",
        level: "advanced",
        color: "orange",
    },
    {
        skill: "React",
        level: "intermediate",
        color: "yellow",
    },
    {
        skill: "PHP",
        level: "intermediate",
        color: "green",
    },
    {
        skill: "Python",
        level: "Beginner",
        color: "blue",
    },
    {
        skill: "Git",
        level: "intermediate",
        color: "green",
    },
    {
        skill: "Web Design",
        level: "Beginner",
        color: "blue",
    },
    {
        skill: "Video Editing",
        level: "advanced",
        color: "purple",
    },
    {
        skill: "After Effects",
        level: "advanced",
        color: "violet",
    },
];

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro
                    name="Christopher Weston"
                    description="I am a driven, creative, and experienced director of web
                    engineering, web developer, and digital media specialist. A
                    highly motivated 20+ year industry veteran, I have extensive
                    leadership experience in managing development teams and
                    overseeing interactive projects from concept to completion."
                />
                {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
                <div className="skill-list">
                    {skills.map((skillSet) => (
                        <SkillList skillObj={skillSet} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Avatar() {
    return (
        <div>
            <img src="./img/profile.jpg" alt="" className="avatar" />
        </div>
    );
}

function Intro(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    );
}

function SkillList({ skillObj }) {
    //const skillLevel = skillObj.level;
    return (
        <p className="skill" style={{ backgroundColor: skillObj.color }}>
            {skillObj.skill}{" "}
            {skillObj.level === "advanced"
                ? "\uD83D\uDE00"
                : skillObj.level === "intermediate"
                ? "\uD83D\uDC4D"
                : "\uD83D\uDD95"}
            <span>{skillObj.level === "advanced" && "👍"}</span>
        </p>
    );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
