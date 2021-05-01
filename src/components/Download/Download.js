import React from 'react';
import {Link} from 'react-router-dom';
import './Download.css';
import './Navbar.css';
import down_box from './down_box.png';
import logo from './logo.png';
import sr from '../../ScrollReveal';

class Download extends React.Component {
    componentDidMount = function() {
        var animate = {
            delay: 1000
        }

        var animate2 = {
            delay: 2000
        }

        sr.reveal(this.refs.nav, animate);
        sr.reveal(this.refs.down, animate2)
    }

    render() {
        return (
            <div className="down-nav">
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
                <div className="download" ref="down">
                    <a href="https://github.com/srikarsamudrala/Trinetra">
                        <img src={down_box} className="down_box" alt="pic" />
                        <h1 className="download_head">Download</h1>
                    </a>
                </div>
            </div>
            
        );
    }
}

export default Download;
