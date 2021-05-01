import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import './About.css';
import logo from './logo.png';
import about_pic from './about_us.png';
import sr from '../../ScrollReveal';

export default class About extends React.Component {
    componentDidMount = function() {
        var animate1 = {
            delay: 3000
        }

        var animate2 = {
            delay: 1000
        }

        // sr.reveal(this.refs.h1, animate);
        sr.reveal(this.refs.h2, animate1);
        sr.reveal(this.refs.nav, animate2)
    }

    render() {
        return (
            <div className="about-nav">
                <div className="row">
                    <nav className="navbar navbar-expand-lg" ref="nav">
                        <div className="nav-left col-lg-6">
                            <Link to="/Home" className="navbar-brand"><img src={logo} className="logo" alt="pic" /></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="nav-right collapse navbar-collapse col-lg-6" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/Home" className="nav-link btn home-link">Home</Link><span class="sr-only">(current)</span>
                                </li>
                                <li className="nav-item">
                                    <Link to="/About" className="nav-link btn about-link">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Instructions" className="nav-link btn ins-link">Instructions</Link>                                
                                </li>
                                <li className="nav-item">
                                    <Link to="/Download" className="nav-link btn down-link">Download</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>   
                <div className="about">
                    <img src={about_pic} className="about_pic" ref="h1" alt="pic" />
                    <p className="about_text" ref="h2">
                        Trinetra enables people to navigate around their<br />
                        desktop, using only their eyes. This includes moving<br />
                        the mouse and pressing the buttons. We built the base<br />
                        in Python 3, we used PyQt5 to create a GUI. Then we<br />
                        used OpenVINO and dlib library's pre-trained models and <br />
                        applied transfer learning on them, in order to estimate<br />
                        the real-time gaze detection.
                    </p>
                </div>
            </div>   
        );
    }
}

// export default About;
