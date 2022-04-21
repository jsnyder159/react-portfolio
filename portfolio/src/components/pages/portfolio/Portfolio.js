import React from 'react';
import './portfolio.css'
import github from './images/github2.png'
import live from './images/white-globe.png'
import court from './images/court.png'
import first from './images/first-portfolio.png'
import rpg from './images/rpg-char.PNG'
import tech from './images/tech-blog.png'
import weather from './images/weather-dashboard.png'
import textedi from './images/text-editor.png'

function Portfolio() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={court} className="d-block w-25 mainImg" alt="basketball with NBA logo on court floor"></img>
                    <div className="carousel-caption d-none d-md-block mb-4">
                        <h5>NBA Team Stat Tracker</h5>
                        <p className="description">Look up your favorite NBA team and check the team and players stats. First time working with multiple API's</p>
                    </div>
                    <a className="leftIcon" href="https://github.com/danchanyoungkim/NBA-Team-Stats" target="_blank" rel="noreferrer"><img src={github} alt="White Github Logo"></img></a>
                    <a className='rightIcon' href="https://danchanyoungkim.github.io/NBA-Team-Stats/" target="_blank" rel="noreferrer"><img src={live} alt="White globe"></img></a>
                </div>
                <div className="carousel-item">
                    <img src={first} className="d-block w-25 mainImg" alt="bearded mans headshot beside a paragraph with a jack-o-lantern above both"></img>
                    <div className="carousel-caption d-none d-md-block mb-4">
                        <h5>My First Portfolio</h5>
                        <p className="description">My First attempt at making a personal portfolio.</p>
                    </div>
                    <a className="leftIcon" href="https://github.com/jsnyder159/Portfolio" target="_blank" rel="noreferrer"><img src={github} alt="White Github Logo"></img></a>
                    <a className='rightIcon' href="https://jsnyder159.github.io/Portfolio/" target="_blank" rel="noreferrer"><img src={live} alt="White globe"></img></a>
                </div>
                <div className="carousel-item">
                    <img src={rpg} className="d-block w-25 mainImg" alt="a spell book with arcane symbols and fire"></img>
                    <div className="carousel-caption d-none d-md-block mb-4">
                        <h5>RPG Char Generator</h5>
                        <p className="description">Create, Save, Comment on other RPG Chars.  My first time building a backend from scratch.</p>
                    </div>
                    <a className="leftIcon" href="https://github.com/BPpearsall/RPG-Character-Database" target="_blank" rel="noreferrer"><img src={github} alt="White Github Logo"></img></a>
                    <a className='rightIcon' href="https://bp-rpg-character-database.herokuapp.com/" target="_blank" rel="noreferrer"><img src={live} alt="White globe"></img></a>
                </div>

                <div className="carousel-item">
                    <img src={tech} className="d-block w-25 mainImg" alt="Log in page for a blog"></img>
                    <div className="carousel-caption d-none d-md-block mb-4">
                        <h5>Tech blog</h5>
                        <p className="description">Built a blog you can log into, write comments, and respond to comments to keep and share your ideas.</p>
                    </div>
                    <a className="leftIcon" href="https://github.com/jsnyder159/Tech-Blog" target="_blank" rel="noreferrer"><img src={github} alt="White Github Logo"></img></a>
                    <a className='rightIcon' href="https://tech-blog-jw.herokuapp.com/login" target="_blank" rel="noreferrer"><img src={live} alt="White globe"></img></a>
                </div>
                <div className="carousel-item">
                    <img src={weather} className="d-block w-25 mainImg" alt="Five day forcast and current weather with search bar."></img>
                    <div className="carousel-caption d-none d-md-block mb-4">
                        <h5>Weather dashboard</h5>
                        <p className="description">Build a weather forcaster that will give me a 5 day forcast,save my searched cities, and give me current weather conditions.</p>
                    </div>
                    <a className="leftIcon" href="https://github.com/jsnyder159/Weather-Dashboard" target="_blank" rel="noreferrer"><img src={github} alt="White Github Logo"></img></a>
                    <a className='rightIcon' href="https://jsnyder159.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer"><img src={live} alt="White globe"></img></a>
                </div>
                <div className="carousel-item">
                    <img src={textedi} className="d-block w-25 mainImg" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block mb-4">
                        <h5>Text Editor</h5>
                        <p className="description">Working with webpacks for the first time. Write and save your ideas even if you lose your connection you won't lose your ideas!</p>
                    </div>
                    <a className="leftIcon" href="https://github.com/jsnyder159/text-editor" target="_blank" rel="noreferrer"><img src={github} alt="White Github Logo"></img></a>
                    <a className='rightIcon' href="https://text-editor-jw.herokuapp.com/" target="_blank" rel="noreferrer"><img src={live} alt="White globe"></img></a>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Portfolio;