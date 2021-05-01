import React from 'react';
import './Download.css';
import down_box from './down_box.png';
import sr from '../../ScrollReveal';

class Download extends React.Component {
    render() {
        return (
            <div className="download">
                <img src={down_box} className="down_box" />
                <h1 className="download_head">Download</h1>
            </div>
        );
    }
}

export default Download;
