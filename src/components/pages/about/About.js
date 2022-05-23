import React from "react";
import gears from "../../../images/profile-gear.png";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="d-flex row">
        <img
          className="gears col-4"
          src={gears}
          alt="beared mans head surround by gears"
        ></img>
        <h2 className="title col-1">About Me</h2>
        <p className="para col-7">
          My names Jason and I am a full stack web developer. I spent the
          majority of the last decade working in the Import/Export industry at
          docks in NJ and PA as a Marine Superintendent. Meeting people from all
          across the world and working with people from all kinds of backgrounds
          was an enlightening experience. I started teaching myself Python
          towards the end of 2021 and decided that I needed to make a change in
          careers where I made coding my focus. I joined and completed the
          Rutger's Mern Full Stack Web Dev Bootcamp in 2022. I had the pleasure
          to meet and work with some really awesome people. I'm continuing my
          development knowledge base with more classes with a focus on Mongodb,
          Express, React, Node, and Python. With that experience I am going to
          continue to work as hard as I can, refine my skills while focusing on
          using the MERN stack, continue to learn something new everyday, and
          find a job in web development.
        </p>
      </div>
    </div>
  );
}

export default About;
