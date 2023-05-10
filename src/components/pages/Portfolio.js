import React from 'react';
import projects from '../../projects'

// const styles ={
//     project: {
//     }
// }

function Portfolio() {

    return (
        <div className="container">
            <h1>Portfolio</h1>
                {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
                {projects.map((project) => (
                    <section className="project" style={{ backgroundImage: `${project.image}`}}>
                        {/* {`${user.name.first} ${user.name.last} (${user.login.username})`} */}
                        <a href={project.deployed}>{project.title}</a>
                        <a href={project.gitHub}><image src='../../assets/github-mark.png'/></a>
                    </section>
                ))}
        </div>
    );
}

export default Portfolio;