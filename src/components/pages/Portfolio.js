import React from 'react';
import projects from '../../projects';
import gitHub from '../../assets/github-mark.png';
import project1 from '../../assets/medicationTracker.png'
import project2 from '../../assets/weatherProjectImage.png';
import project3 from '../../assets/dailyPlanner.png';
import project4 from '../../assets/passwordGenerator.png'
import project5 from '../../assets/socBackEnd.png'

const images = {
  project1,
  project2,
  project3,
  project4,
  project5
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
        {/* <section
                    className="mainProject"
                    style={
                        {
                            backgroundImage: `url(${mainProject.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                    <div className='overlay'>
                        <div className='projectLinks'>
                            <a href={mainProject.deployed} target="_blank">{mainProject.title}</a>
                            <a href={mainProject.gitHub} target="_blank"><img className='githubLogo' src={gitHub} /></a>
                        </div>
                    </div>
                </section> */}
        {/* <section className='otherProjects'> */}
        {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
        {projects.map((project, i) => {
          const image = images["project" + (i + 1)];
          return (
            <section
              key={i} className="eachProject"
              style={
                {
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}>
              <div className='overlay'>
                <div className='projectInfo'>
                  <div className='projectLinks'>
                    <a href={project.deployed} target="_blank">{project.title}</a>
                    <a href={project.gitHub} target="_blank"><img className='githubLogo' src={gitHub} /></a>
                  </div>
                  <div className='skillsAndDesc'>
                  <p>{project.skills}</p>
                  <p>{project.description}</p>
                  </div>
                </div>
              </div>
            </section>
          )
        }
        )}
        {/* </section> */}
      </div>
    </div>
  );
}

export default Portfolio;