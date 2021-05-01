import React from 'react';
import './About.css';
import about_pic from './about_us.png';
import arrow_up from './arrow_up.png';
import Home from '../Home/Home';
import Link from 'react-router-dom';
import sr from '../../ScrollReveal';

class About extends React.Component {
    render() {
        return (
            <div className="about">

                <a href="#home">
                    <img src={arrow_up} className="arrow_up" />
                </a>
                <img src={about_pic} className="about_pic" />
                <p className="about_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                    sed do eiusmod tempor incididunt ut labore et dolore<br />
                    magna aliqua. Ut enim ad minim veniam, quis nostrud<br />
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo<br />
                    consequat. Duis aute irure dolor in reprehenderit in<br />
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br />
                    Excepteur sint occaecat cupidatat non proident.
                </p>
            </div> 
        );
    }
}

// function About() {
//     return (
//         <h1>About</h1>
//     );
// }

export default About;
