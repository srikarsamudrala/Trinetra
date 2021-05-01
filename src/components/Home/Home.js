import React from 'react';
import './Navbar.css';
import './Home.css';
import banner_svg from './banner_svg.png';
import sr from '../../ScrollReveal';

class Home extends React.Component {
    // componentDidMount = function() {
    //     var animate = {
    //         origin: 'left',
    //         duration: 2000,
    //         distance: '100px'
    //     }

    //     sr.reveal(this.refs.h1, animate);
    // }

    render () {
        return (
            <div className="nav-home" id="home">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <div className="nav-left col-lg-6">
                            <a className="navbar-brand" href="#">Trinetra</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="nav-right collapse navbar-collapse col-lg-6" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link btn home-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn about-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn ins-link" href="#">Instructions</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn down-link" href="#">Download</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>   
                <div className="home">
                    <div className="banner">
                        <h1 ref='h1' className="h1">Wanna control your PC <br /> with just your Eyes?</h1>
                        <a className="btn btn-lg get_button" role="button">Get Started <i className="fas fa-arrow-right"></i></a>
                    </div>
                    <div className="banner_svg ">
                        <img src={banner_svg} className="banner_svg" />
                    </div>
                </div>
            </div>
            
        );
    }
    
}



export default Home;