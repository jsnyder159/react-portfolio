import React from 'react';
import gears from '../../../images/profile-gear.png'
import './style.css'

function About() {
    return (
        <div className="about row">
            <img className="gears col-4" src={gears} alt="beared mans head surround by gears"></img>
            <h2 className="title col-1">About Me</h2>
            <p className="para col-7">
                Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
                Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
                mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
                lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
                imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
                in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
            </p>
        </div>
    );
}

export default About;