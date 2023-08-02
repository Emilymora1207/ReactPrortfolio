import React from 'react';
import projects from '../../projects';
import gitHub from '../../assets/github-mark.png';
import logo from '../../assets/Asset1.svg'
// import project1 from '../../assets/medicationTracker.png'
// import project2 from '../../assets/weatherProjectImage.png';
import project1 from '../../assets/dailyPlanner.png';
import project2 from '../../assets/passwordGenerator.png'
import project3 from '../../assets/socBackEnd.png'
import medicProject from '../../assets/medicAsset 2.svg'
import medProject1 from '../../assets/medProject1.png'
import medProject2 from '../../assets/medProject2.png'
import weatherProject1 from '../../assets/weatherProject1.png'
import weatherProject2 from '../../assets/weatherProject2.png'
import weatherProject3 from '../../assets/weatherProject3.png'
import weatherProject4 from '../../assets/weatherProject4.png'
import weatherProject from '../../assets/weatherProjectImage.png'
import weatherProjectIcon from '../../assets/weatherProjectIcon.svg'
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
      <div className='largeProjects'>
        <a href='https://vast-atoll-15971.herokuapp.com/'><h2 style={{margin: '0', fontSize: '250%'}}>MedicationTracker</h2></a>
        <div className='circles'>
          <svg height="50" width="50">
            <circle cx="25" cy="25" r="25" stroke="none" fill="rgb(36, 135, 255)" />
          </svg>
          <svg height="50" width="50">
            <circle cx="25" cy="25" r="25" stroke="none" fill="rgb(77, 204, 255)" />
          </svg>
          <svg height="50" width="50">
            <circle cx="25" cy="25" r="25" stroke="none" fill="rgb(76, 171, 55)" />
          </svg>
          <svg height="50" width="50">
            <circle cx="25" cy="25" r="25" stroke="none" fill="rgb(106, 233, 77)" />
          </svg>
        </div>
        <img src={medProject1} style={{ width: '25%', position: 'absolute', bottom: '50px', left: '50px', zIndex: '1' }} />
        <img src={medProject2} style={{
          width: "75%",
          position: 'absolute', right: '50px', top: '150px'
        }} />
        <img src={logo} style={{height: '300px', boxShadow: 'none', position: 'absolute', bottom: '100px', left: '400px', zIndex: '2'}}/>
        <div className='largeProjectInfo'>
          <p>MERN Stack</p>
          <p>Tracks medications needed <br/>to take each day</p>
          <a href='https://github.com/Emilymora1207/MedicationTracker.git' target="_blank"><img style={{boxShadow: 'none', height: '100px'}}
          // className='githubLogo' 
          src={gitHub} /></a>
        </div>
      </div>
      <div className='largeProjects'>
        <a href='https://emilymora1207.github.io/Weather-Forecast/'><h2 style={{margin: '0', fontSize: '250%'}}>Weather Forecast</h2></a>
        <img src={weatherProjectIcon} style={{position: 'absolute', top: '100px', left: '100px', height: '350px', boxShadow: 'none', zIndex: '7'}}/>
        <img src={weatherProject1} style={{position: 'absolute', top: '300px', right: '100px', zIndex: '5'}}/>
        <img src={weatherProject4} style={{position: 'absolute', bottom: '50px', left: '50px', width: '50%', zIndex: '4'}}/>
        <img src={weatherProject3} style={{position: 'absolute', bottom: '250px', left: '300px', width: '50%', zIndex: '3'}}/>
        <img src={weatherProject} style={{position: 'absolute', bottom: '400px', left: '550px', width: '50%', zIndex: '2'}}/>
        <div className='largeProjectInfo' style={{zIndex: '6'}}>
          <p>JavaScript, APIs</p>
          <p>A 5 day forecast for any location</p>
          <a href='https://github.com/Emilymora1207/Weather-Forecast.git' target="_blank"><img style={{boxShadow: 'none', height: '100px'}}
          // className='githubLogo' 
          src={gitHub} /></a>
        </div>
      </div>
      {/* <img style={{width: '80%'}} src={medicProject}/> */}
      <h1>Other Projects</h1>
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
                  {/* adds skills and descriptions to each project */}
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