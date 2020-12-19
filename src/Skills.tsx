import React from "react";
type FiveRating = 1 | 2 | 3 | 4 | 5;
type Skill = {name: string, level: FiveRating};

const programmingSkills : Skill[] = [
    {
        name: "Rust",
        level: 4,
    },
    {
        name: "Java",
        level: 4,
    },
    {
        name: "C#",
        level: 4,
    },
    {
        name: "HTML",
        level: 4,
    },
    {
        name: "JavaScript",
        level: 3,
    },
    {
        name: "TypeScript",
        level: 3,
    },
    {
        name: "C",
        level: 2,
    },
    {
        name: "CSS",
        level: 4,
    },
    {
        name: "Python",
        level: 3,
    },
    {
        name: "LaTeX",
        level: 2,
    },
    {
        name: "Dart",
        level: 2,
    },
    {
        name: "GLSL",
        level: 3,
    },
    {
        name: "C++",
        level: 2,
    },
];

const toolSkills : Skill[] = [
    {
        name: "VSCode",
        level: 5,
    },
    {
        name: "IntelliJ",
        level: 3,
    },
    {
        name: "Android Studio",
        level: 2,
    },
    {
        name: "Vim",
        level: 4,
    },
    {
        name: "Git",
        level: 3,
    },
    {
        name: "Github",
        level: 4,
    },
    {
        name: "Bitbucket",
        level: 3,
    },
    {
        name: "React",
        level: 3,
    },
    {
        name: "Vue",
        level: 3,
    },
    {
        name: "Flutter",
        level: 2,
    },
    {
        name: "Webpack",
        level: 2,
    },
]
const FiveStars = ({level}: {level: FiveRating}) => (
    <>{
    [1, 2, 3, 4, 5]
    .map((value) => <>{value <= level ? "★" : "☆"}</>)
    }</>
);

const SkillSet = ({skills}: {skills: Skill[]}) => (
    <>
    {
            skills
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({name, level}) => (
                <div>
                <p>
                    {name}
                    <span style={{float: "right", color: "white"}}>
                    <FiveStars level={level}></FiveStars>
                    </span>
                </p>
                </div>
            ))
    }
    </>
);
export const Skills = () => (
    <div>
        <p className="center-text big title">
            Technical Skills
        </p>
        <div className="two-side-grid">
            <div>
                <p className="center-text medium title">
                    Programming Languages
                </p>
                <SkillSet skills={programmingSkills}/>
            </div>
            <div>
                <p className="center-text medium title">
                    Tools / Frameworks
                </p>
                <SkillSet skills={toolSkills}/>
            </div>
        </div>
    </div>
);