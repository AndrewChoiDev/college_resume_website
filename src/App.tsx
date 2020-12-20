import React from "react";
import './App.css';
import { Skills } from './Skills';
import { Projects } from './Projects';


const profilePic = require('../images/main_icon.jpg');
const purduePic = require('../images/purdue_university.jpg');

const Header = () => (
    <div className="Header">
        <p>
            AndrewChoi<sub>.info</sub>
        </p>
    </div>
);
const ProfileText = () => (
    <div >
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
        <div style={{margin: "auto"}}>
            <img src={purduePic.default} className="purdue pic"></img>
            <p className="center-text">
                Edited photo of my current university
            </p>
        </div>
    </div>   
);
const OccupationText = () => (
    <div >
        <p className="medium title">
            Current Work/Occupation
        </p>
        <p>
            I am currently a full time student at Purdue University (class of 2023)
            studying computer science. 
            My potential interests include systems programming and graphics technology. 
            <br/><br/>
            My extracurricular activities within the school currently consist 
            of two game development clubs, an app development group, 
            and a few other miscelaneous clubs.
            In terms of roles, I am currently the design lead 
            at Purdue's Special Interest Group on Game Development.
        </p>
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

        <div className="cover">
            <p className="center-text medium title" style={{fontWeight: "bold"}}>
                Contact
            </p>
            <div style={{margin: "auto", width: "300px"}}>
                <p>
                    Email: <span style={{float: "right"}}>kimchy101@gmail.com</span>
                </p>
            </div>
        </div>
    </div>
    
);
