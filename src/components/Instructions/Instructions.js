import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import './Instructions.css';
import ins_image from './instruction.png';
import logo from './logo.png';
import sr from '../../ScrollReveal';

class Instructions extends React.Component {
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
            <div className="ins-nav">
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
                <div className="instructions">
                <img src={ins_image} className="ins_img" ref="h1" alt="pic" />
                <p className="ins_text" ref="h2">
                    Go to downloads section<br />
                    Python environment is <br /> 
                    returned with PyAutoGUI, <br />
                    OpenCV and NumPy libraries. <br /> 
                    Run the corresponding <br /> 
                    scripts to get the scripts to<br /> 
                    run the app.
                </p>
            </div> 
            </div>
            
        );
    }
}


export default Instructions;