import React from 'react';
import './studies.css';
import { Tooltip } from 'react-tooltip';

const SingleStudies = ({ center, course, duration, learnings }) => {
    return (
        <div>
            <h2>{center}</h2>
            <h4>{course}</h4>
            <p>{duration}</p>
            <ul>
                {learnings.map((learning, index) => (
                    <li key={index}>{learning}</li>
                ))}
            </ul>
        </div>
    );
}

const SingleCourse = ({ cName, ttInfo }) => {
    return (
        <>
            <div>
                <a data-tooltip-id='my-tooltip' data-tooltip-content={ttInfo}>{cName}</a>
                <Tooltip id='my-tooltip' />
            </div>
        </>
    );
}

const AllCourses = () => {
    return (
        <div>
            <SingleCourse 
                cName="JavaScript"
                ttInfo="Descripción del curso de JavaScript"
            />
        </div>
    );
}

const AllStudies = () => {
    return (
        <div>
            <SingleStudies 
                center="IES El Caminás"
                course="Desarrollo de Aplicaciones Web"
                duration="09.2022 - 06.2024"
                learnings={["JavaScript", "ReactJS", "Git", "AWS", "Symphony", "PHP", "AngularJS", "MongoDB", "Nginx", "Docker", "Socket.io", "Figma"]}
            />
        </div>
    );
}

const StudiesAndCourses = () => {
    return (
        <div>
            <AllStudies />
            <AllCourses />
        </div>
    );
}

export default StudiesAndCourses;
