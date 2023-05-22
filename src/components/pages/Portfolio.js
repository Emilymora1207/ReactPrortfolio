import React from 'react';
import projects from '../../projects';
import gitHub from '../../assets/github-mark.png';
import project1 from '../../assets/weatherProjectImage.png';
import project2 from '../../assets/dailyPlanner.png';
import project3 from '../../assets/passwordGenerator.png'

const images = {
    project1,
    project2, 
    project3
}

// const styles ={
//     project: {
//     }
// }

function Portfolio() {

    return (
        <div className="container">
            <h1>Portfolio</h1>
            <div className='projects'>
                {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
                {projects.map((project, i) => {
                    const image = images["project" + (i + 1)];
                    return (
                    <section key={i} className="eachProject" style={
                        { 
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        <div className='projectLinks'>
                        <a href={project.deployed}>{project.title}</a>
                        <a href={project.gitHub}><img className='githubLogo' src={gitHub}/></a>
                        </div>
                    </section>
                )
                    }
                )}
                </div>
        </div>
    );
}

export default Portfolio;