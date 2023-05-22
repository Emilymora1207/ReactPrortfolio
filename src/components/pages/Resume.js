import React from 'react';

function Resume() {
    const resumeLink = 'https://docs.google.com/document/d/1jYNY433Zk56BRFQ33K_iN8K3r_Oyo7zdKBFyF-O270M/edit?usp=sharing'

    const frontEnd = ['Html', 'CSS', 'JavaScript','JQuery', 'Bootstrap', 'AJAX', 'SASS' ];
    const backEnd = ['MySQL', 'MongoDB', 'Express', 'ReactJS', 'Node', 'Handlebars', 'Firebase', 'AWS', 'Webpack'];

    return (
        <div className="resume">
            <h1>Resume</h1>
            <p>Click to download my <a href={resumeLink}>Resume</a></p>
            <h2>Front End Proficiencies</h2>
            <ul>
                {frontEnd.map((front) => {
                    return <li>{front}</li>
                })}
            </ul>
            <h2>Back End Proficiencies</h2>
            <ul>
                {backEnd.map((back) => {
                    return <li>{`${back}`}</li>
                })}
            </ul>

            {/* <img src={profileImg}/>
            <p>{aboutMe}</p> */}
        </div>
    );
}

export default Resume;