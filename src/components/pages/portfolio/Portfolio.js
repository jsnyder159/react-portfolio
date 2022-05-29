import React from 'react';
import './portfolio.css';
import github from './images/github2.png'
import live from './images/white-globe.png'
import court from './images/court.png'
import first from './images/first-portfolio.png'
import rpg from './images/rpg-char.PNG'
import tech from './images/tech-blog.png'
import weather from './images/weather-dashboard.png'
import textedi from './images/text-editor.png'
import charity from './images/charity.PNG'

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
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
            </div>
            <div className="carousel-inner d-flex flex-sm-wrap">
                <div className="carousel-item active">
                    <ul className="bigList d-flex flex-row justify-content-center align-content-center">
                        <li><a className="leftIcon" href="https://github.com/danchanyoungkim/NBA-Team-Stats" target="_blank" rel="noreferrer"><img src={github} alt="White Github Logo"></img></a></li>
                        <li><a className='rightIcon' href="https://danchanyoungkim.github.io/NBA-Team-Stats/" target="_blank" rel="noreferrer"><img src={live} alt="White globe"></img></a></li>
                    </ul>
                    <div className="d-flex justify-content-center align-content-center flex-column">
                        <img src={court} className="d-block mainImg" alt="basketball with NBA logo on court floor"></img>
                        <div className="carousel-caption d-block d-sm-block mb-4 d-flex">
                            <h5>NBA Team Stat Tracker</h5>
                            <p className="description">Look up your favorite NBA teams stats.</p> <p className='tech-used'>Bulma Framework, CSS, HTML, Javascript, Sportsdata.io API, Ticketmaster API </p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <ul className="bigList d-flex flex-row justify-content-center align-content-center">
                    <li><a className="leftIcon" href="https://github.com/jsnyder159/Portfolio" target="_blank" rel="noreferrer"><img src={github} alt="White Github Logo"></img></a></li>
                    <li><a className='rightIcon' href="https://jsnyder159.github.io/Portfolio/" target="_blank" rel="noreferrer"><img src={live} alt="White globe"></img></a></li>
                    </ul>
                    <img src={first} className="d-block mainImg" alt="bearded mans headshot beside a paragraph with a jack-o-lantern above both"></img>
                    <div className="carousel-caption d-block d-sm-block mb-4">
                        <h5>My First Portfolio</h5>
                        <p className="description">My First attempt at making a personal portfolio.</p> <p className='tech-used'>CSS, HTML, Javascript</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <ul className="bigList d-flex flex-row justify-content-center align-content-center">
                    <li><a className="leftIcon" href="https://github.com/BPpearsall/RPG-Character-Database" target="_blank" rel="noreferrer"><img src={github} alt="White Github Logo"></img></a></li>
                    <li><a className='rightIcon' href="https://bp-rpg-character-database.herokuapp.com/" target="_blank" rel="noreferrer"><img src={live} alt="White globe"></img></a></li>
                    </ul>
                    <img src={rpg} className="d-block mainImg" alt="a spell book with arcane symbols and fire"></img>
                    <div className="carousel-caption d-block d-sm-block mb-4">
                        <h5>RPG Char Generator</h5>
                        <p className="description">Create, Save, and Comment on other RPG Chars.</p> <p className='tech-used'>HTML, CSS, Javascript, Handlebars, Node, Express, MySQL, Sequelize </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <ul className="bigList d-flex flex-row justify-content-center align-content-center">
                    <li><a className="leftIcon" href="https://github.com/jsnyder159/Tech-Blog" target="_blank" rel="noreferrer"><img src={github} alt="White Github Logo"></img></a></li>
                    <li><a className='rightIcon' href="https://tech-blog-jw.herokuapp.com/login" target="_blank" rel="noreferrer"><img src={live} alt="White globe"></img></a></li>
                    </ul>
                    <img src={tech} className="d-block mainImg" alt="Log in page for a blog"></img>
                    <div className="carousel-caption d-block d-sm-block mb-4">
                        <h5>Tech blog</h5>
                        <p className="description">A blog to keep and share your ideas.</p> <p className='tech-used'>HTML, CSS, Javascript, Sequelize, Express, MySQL2, Handlebars</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <ul className="bigList d-flex flex-row justify-content-center align-content-center">
                    <li><a className="leftIcon" href="https://github.com/jsnyder159/Weather-Dashboard" target="_blank" rel="noreferrer"><img src={github} alt="White Github Logo"></img></a></li>
                    <li><a className='rightIcon' href="https://jsnyder159.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer"><img src={live} alt="White globe"></img></a></li>
                    </ul>
                    <img src={weather} className="d-block mainImg" alt="Five day forcast and current weather with search bar."></img>
                    <div className="carousel-caption d-block d-sm-block mb-4">
                        <h5>Weather dashboard</h5>
                        <p className="description">A weather app that will give you a 5 day forcast.</p> <p className='tech-used'>HTML, CSS, Javascript, Bootstrap, Openweather API</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <ul className="bigList d-flex flex-row justify-content-center align-content-center">
                    <li><a className="leftIcon" href="https://github.com/jsnyder159/text-editor" target="_blank" rel="noreferrer"><img src={github} alt="White Github Logo"></img></a></li>
                    <li><a className='rightIcon' href="https://text-editor-jw.herokuapp.com/" target="_blank" rel="noreferrer"><img src={live} alt="White globe"></img></a></li>
                    </ul>
                    <img src={textedi} className="d-block mainImg" alt="text screen showing JATE"></img>
                    <div className="carousel-caption d-block d-sm-block mb-4">
                        <h5>Text Editor</h5>
                        <p className="description"> Write and save your ideas even offline.</p> <p className='tech-used'>Express, Babel, Webpack </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <ul className="bigList d-flex flex-row justify-content-center align-content-center">
                    <li><a className="leftIcon" href="https://github.com/jsnyder159/Raffles-of-Love" target="_blank" rel="noreferrer"><img src={github} alt="White Github Logo"></img></a></li>
                    <li><a className='rightIcon' href="https://charity-raffle.herokuapp.com/" target="_blank" rel="noreferrer"><img src={live} alt="White globe"></img></a></li>
                    </ul>
                    <img src={charity} className="d-block mainImg" alt="jar full of coins labeled charity"></img>
                    <div className="carousel-caption d-block d-sm-block mb-4">
                        <h5>Raffles of Love</h5>
                        <p className="description"> A place for charities to raffle off donated items. Not associated with any charities or raffling off any goods.</p> <p className='tech-used'>Express, React, React Bootstrap, React Router, MongoDB, GraphQL, Mongoose, Stripe, Apollo, JSON Web Tokens, bcrypt </p>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column align-content-center">
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Portfolio;