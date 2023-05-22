import React from 'react';
import profileImage from "../../assets/profilePic.jpg";

function About() {
    const profileImg = '../../assets.profilePic.jpg'
    const aboutMe = 'I was born and raised in California. 5 years ago I married my husband, and this year we just had our first child. One major motivation for pursuing this career is being albe to stay at home with my little girl. However, once I started gaining knowledge in this field, I realized how much of a passion I have for Web Development.'
    return (
        <div className='section'>
        <div className="about container">
            <h1>About Me</h1>
            <div className='aboutSection'>
                <img alt='Profile' src={profileImage} />
                <p>{aboutMe}</p>
            </div>
        </div>
        </div>
    );
}

export default About;