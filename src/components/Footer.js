import React from "react";
import gitHub from '../assets/github-logo_icon-icons.com_73546.svg';
import linkedIn from '../assets/icons8-linkedin.svg'
// import githubLink from 'https://github.com/Emilymora1207'


function Footer() {
    return (
        <div className="centered">
            <div className='footer' >
                <a href='https://github.com/Emilymora1207' target="_blank"><img alt='github Logo' src={gitHub} /></a>
                <a href='https://www.linkedin.com/in/emily-mora-4135b6248/' target="_blank"><img alt="linkedIn Logo" src={linkedIn} /></a>
            </div>
        </div>
    );
}

export default Footer;