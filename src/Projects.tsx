import React from "react";

const quizPic = require('../images/quiz_app.PNG');
const robotPic = require('../images/robot_tale.jpg');
const softwareRenderPic = require('../images/software_render.PNG');
const voxelRenderPic = require('../images/voxel_render.PNG');

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
                <a href={link} target="_blank">
                    <img src={imgSrc} className="square pic can-hover"/>
                </a>
                </div>
            ))
        }
    </div>
);

export const Projects = () => (
    <>
    <p className="center-text big title">
        Personal Projects
    </p>
    <ProjectsGrid/>
    </>
);