import React from "react";
import './App.css';

const profilePic = require('../images/main_icon.jpg');
const purduePic = require('../images/purdue_university.jpg');
const quizPic = require('../images/quiz_app.PNG');
const robotPic = require('../images/robot_tale.jpg');
const softwareRenderPic = require('../images/software_render.PNG');
const voxelRenderPic = require('../images/voxel_render.PNG');

const Header = () => (
    <div className="Header">
        <p>
            AndrewChoi<sub>.info</sub>
        </p>
    </div>
);
const ProfileText = () => (
    <div className="text-wrapper">
        <p className="big title">
            Andrew Choi
        </p>
        <p className="medium title">
            Software Developer
        </p>
        <p>
            Hello, my name’s Andrew. 
            I am a software developer who works on a variety of projects,
            such as websites and video games.
            <br/><br/>
            You can learn more about me on this website.
        </p>
    </div>
);
const Occupation = () => (
    <div className="grid-container">
        <OccupationText/>
        <div>
            <img src={purduePic.default} className="purdue pic"></img>
            <p className="center-text">
                Edited photo of my current university
            </p>
        </div>
    </div>   
);
const OccupationText = () => (
    <div className="text-wrapper">
        <p className="medium title">
            Current Work/Occupation
        </p>
        <p>
            I am currently a full time student at Purdue University 
            studying computer science. 
            I am expected to graduate by May 2023. 
            I have not yet decided on what field to specialize in. 
            <br/><br/>
            My extra curricular activities within the school currently consist 
            of two game development clubs, an app development group, 
            and a few other miscelaneous clubs.
            <br/><br/>
            In terms of roles, I am currently the design lead 
            at Purdue's Special Interest Group on Game Development.
        </p>
    </div>
);


const squarePicData : {imgSrc: string, link: string}[] = [
    {
        imgSrc: voxelRenderPic.default,
        link: "https://github.com/AndrewChoiDev/wgpu_testing/tree/main",
    },
    {
        imgSrc: softwareRenderPic.default,
        link: "https://github.com/AndrewChoiDev/BasicSoftwareRender",
    },
    {
        imgSrc: quizPic.default,
        link: "https://github.com/AndrewChoiDev/quiz_website",
    },
    {
        imgSrc: robotPic.default,
        link: "https://youtu.be/7FsZHeUaA1w",
    },
];

const ProjectsGrid = () => (
    <div className="square-grid">
        {
            squarePicData.map(({imgSrc, link}) => (
                <div>
                <a href={link}>
                    <img src={imgSrc} className="square pic can-hover"/>
                </a>
                </div>
            ))
        }
    </div>
);

const Profile = () => (
    <div className="grid-container">
        <div>
            <img src={profilePic.default} className="profile pic"></img>
        </div>
        <ProfileText/>
    </div>
);

const Projects = () => (
    <>
    <p className="center-text medium title">
        Personal Projects
    </p>
    <ProjectsGrid/>
    </>
);

type Skill = {name: string, level: 1 | 2 | 3 | 4 | 5};
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
const Skills = () => (
    <div>
        <p className="center-text medium title">
            Technical Skills
        </p>
        {
            programmingSkills
            .concat(toolSkills)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({name, level}) => (
                <p>
                    {name} - 
                    {
                        [1, 2, 3, 4, 5]
                        .map((value) => <>{value <= level ? "★" : "☆"}</>)
                    }
                </p>
            ))
        }
    </div>
);

export const App = () => (
    <div className="App">
        <Header/>
        <div className="layout">
            <Profile/>
            <hr/>
            <Occupation/>
            <hr/>
            <Skills/>
            <hr/>
            <Projects/>
        </div>
    </div>
    
);
