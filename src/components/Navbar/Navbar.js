import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
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
    );
}

export default Navbar;