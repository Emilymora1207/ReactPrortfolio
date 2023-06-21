import React from 'react';
import profileImage from "../../assets/profilePic.jpg";

import "../../styles/portfolio.css"

function About() {
    const profileImg = '../../assets.profilePic.jpg'
    const aboutMe1 = 'I recently graduated from the UC Davis Full stack Web Development Bootcamp! I am now ready and, to be honest, super excited about getting a remote Web Development job. I have found that I love working with React JS and MongoDB. React feels like a puzzle to me that I get to put together and it is smooth to use with a database, like MongoDB! I also really enjoy making a beautiful UI for any site, especially when I have a vision for a project that does not follow basic CSS standards. I take it as a challenge!'
    const aboutMe2 = 'I have had 7 years working in the pediatric Dental field. I love my job! I have really enjoyed helping kids become actually excited about going to the dentist! I also loved encouraging my team, especially on tough days. Now I have a child of my own! She is the world to me and my goal is to work from home so I can be with her all of the time! I really hope I get to work with a team in my new field, so that I would be able to continue to encourage a team.'

    return (
        <div className='section'>
            <div className="about container">
                <h1>About Me</h1>
                <div className='aboutSection'>
                    <img alt='Profile' src={profileImage} />
                    <div classname='aboutParagraph' style={{flexDirection: 'column'}}>
                        <p>{aboutMe1}</p>
                        <p>{aboutMe2}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;