import React from 'react';
import gears from '../../../images/profile-gear.png'
import './about.css'

function About() {
    return (
        <div className="about">
            <div className="d-flex row">
                <img className="gears col-4" src={gears} alt="beared mans head surround by gears"></img>
                <h2 className="title col-1">About Me</h2>
                <p className="para col-7">
                    My names Jason and I am working towards being a full stack web developer.  I spent the majority of the last decade working in the Import/Export
                    industry at docks in NJ and PA as a Marine Superintendent.  Meeting people from all across the world and working with people from all kinds of 
                    backgrounds was an enlightening experience.  I enjoy being in a constant state of learning and love problem solving.  My attention is drawn to 
                    things that are dynamic and ever evolving.  I started teaching myself Python towards the end of 2021 and decided that I needed to make a change
                    in careers where I made coding my focus.  My immediate goals are to work as hard as I can, focus on refining my skills while using the MERN stack,
                    continue learning something new everyday, and find a job in web development.  Long term, I would like to combine the skills that I've gained from 
                    my time working in Import/Export with the skills I am and continue to gain in coding to work my way up to being a Project Manager.
                </p>
            </div>
        </div>
    );
}

export default About;