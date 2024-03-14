import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
                    <SkillList name="HTML/CSS" emoji="&#128512;" color="red" />
                    <SkillList
                        name="JavaScript"
                        emoji="&#129299;"
                        color="orange"
                    />
                    <SkillList name="React" emoji="&#128406;" color="yellow" />
                    <SkillList name="JSX" emoji="&#128405;" color="green" />
                    <SkillList name="PHP" emoji="&#128405;" color="blue" />
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

function SkillList(props) {
    return (
        <p className="skill" style={{ backgroundColor: props.color }}>
            {props.name} {props.emoji}
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
