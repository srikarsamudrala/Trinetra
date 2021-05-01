import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import './Home.css';
import banner_svg from './banner_svg.png';
import logo from './logo.png';
import sr from '../../ScrollReveal';

class Home extends React.Component {
    componentDidMount = function() {
        var animate = {
            origin: 'left',
            duration: 3000,
            distance: '100px'
        }

        var animate2 = {
            origin: 'left',
            duration: 3000,
            distance: '100px',
            delay: 1000
        }

        var animate3 = {
            delay: 2000
        }

        var animate4 = {
            delay: 1000
        }

        sr.reveal(this.refs.h1, animate);
        sr.reveal(this.refs.h2, animate2);
        sr.reveal(this.refs.h3, animate3);
        sr.reveal(this.refs.nav, animate4)
    }

    render () {
        return (
            <div className="nav-home" id="home">
                <div className="row">
                    <nav className="navbar navbar-expand-lg" ref="nav">
                        <div className="nav-left col-lg-6">
                            <Link to="/Home" className="navbar-brand"><img src={logo} className="logo" /></Link>
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
                <div className="home">
                    <div className="banner">
                        <h1 ref='h1' className="h1">Wanna control your PC <br /> with just your Eyes?</h1>
                            <Link to="/About" className="btn-lg get_button" ref="h2">Get Started&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></Link>
                    </div>
                    <div className="banner_svg ">
                        <img src={banner_svg} className="banner_svg" ref="h3" />
                    </div>
                </div>
            </div>
            
        );
    }
    
}



export default Home;