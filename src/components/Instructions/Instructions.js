import React from 'react';
import './Instructions.css';
import ins_image from './instruction.png';

class Instructions extends React.Component {
    render() {
        return (
            <div className="instructions">
                <img src={ins_image} className="ins_img" />
                <p className="ins_text">
                    Lorem ipsum dolor sit amet,<br />
                    consectetur adipiscing elit, sed do<br /> 
                    eiusmod tempor incididunt ut<br />
                    labore et dolore magna aliqua. Ut<br /> 
                    enim ad minim veniam, quis<br /> 
                    nostrud exercitation ullamco<br /> 
                    laboris nisi ut aliquip ex ea<br /> 
                    commodo consequat. Duis aute<br /> 
                    irure dolor in reprehenderit in<br /> 
                    voluptate velit esse cillum dolore<br /> 
                    eu fugiat nulla pariatur. Excepteur<br /> 
                    sint occaecat cupidatat non proident.
                </p>
            </div>
        );
    }
}


export default Instructions;