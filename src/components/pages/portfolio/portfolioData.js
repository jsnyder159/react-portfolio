import React from 'react';
import github from './images/github2.png'
import live from './images/white-globe.png'
import court from './images/court.png'


function PortData() {

    const layouts = [
        {
            image: "./images/court.png",
            alt: "basketball with NBA logo on court floor",
            name: 'NBA Team Stat Tracker',
            desc: 'Look up your favorite NBA team and check the team and players stats.',
            git: "https://github.com/danchanyoungkim/NBA-Team-Stats",
            gitalt: "White Github Logo",
            live: "https://danchanyoungkim.github.io/NBA-Team-Stats/",
            livealt: 'White globe'
        },
        {
            image: "./images/first-portfolio.png",
            alt: "bearded mans headshot with a jack-o-lantern above him",
            name: 'My First Portfolio',
            desc: 'My First attempt at making a personal portfolio.',
            git: "https://github.com/jsnyder159/Portfolio",
            gitalt: "White Github Logo",
            live: 'https://jsnyder159.github.io/Portfolio/',
            livealt: 'White globe'
        },
        {
            image: './images/rpg-char.PNG',
            alt: 'a spell book with arcane symbols and fire',
            name: 'RPG Char Generator',
            desc: 'Create, Save, and Comment on other RPG Chars.',
            git: 'https://github.com/BPpearsall/RPG-Character-Database',
            gitalt: 'White Github Logo',
            live: 'https://bp-rpg-character-database.herokuapp.com/',
            livealt: 'white globe'
        },
        {
            image: './images/tech-blog.png',
            alt: 'log in page for a blog',
            name: 'Tech Blog',
            desc: 'Built a plog you can log into, write comments, and respond to comments to keep and shre your ideas.',
            git: 'https://github.com/jsnyder159/Tech-Blog',
            gitalt: 'White Github Logo',
            live: 'https://tech-blog-jw.herokuapp.com/login',
            livealt: 'white globe'
        },
        {
            image: './images/weather-dashboard.png',
            alt: 'Five day forcast and current weather with search bar.',
            name: 'Weather Dashbord',
            desc: 'I Built a weather forcaster that will give me a 5 day forcast, and current weather for a searched city.  While save previously searched cities.',
            git: "https://github.com/jsnyder159/Weather-Dashboard",
            gitalt: 'White Github Logo',
            live: "https://jsnyder159.github.io/Weather-Dashboard/",
            livealt: 'white globe',
        },
        {
            image: './images/text-editor.png',
            alt: 'text screen showing JATE',
            name: 'Text Editor',
            desc: "Working with webpacks for the first time I built an installable text editor.  Write and save your ideas even if you lose connection, you won't loss your ideas.",
            git: "https://github.com/jsnyder159/text-editor",
            gitalt: "White Github logo",
            live: 'https://text-editor-jw.herokuapp.com/',
            livealt: 'white globe',
        },
    ]

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
                    <div>
                        <img src={court} className="d-block w-25 mainImg" alt="basketball with NBA logo on court floor"></img>
                        <div className="carousel-caption d-none d-md-block mb-4">
                            <h5>NBA Team Stat Tracker</h5>
                            <p className="description">Look up your favorite NBA team and check the team and players stats.</p>
                        </div>
                        <a className="leftIcon" href="https://github.com/danchanyoungkim/NBA-Team-Stats" target="_blank" rel="noreferrer"><img src={github} alt="White Github Logo"></img></a>
                        <a className='rightIcon' href="https://danchanyoungkim.github.io/NBA-Team-Stats/" target="_blank" rel="noreferrer"><img src={live} alt="White globe"></img></a>
                    </div>
                </div>
                <div className="carousel-item"></div>
                <div>
                    {layouts.map((layout, index) => {
                        return <div key={index}>
                            <img src={layout.image} className="d-block w-25 mainImg" alt={layout.alt}></img>
                            <div className="carousel-caption d-none d-md-block mb-4">
                                <h5>{layout.name}</h5>
                                <p className="description">{layout.desc}</p>
                            </div>
                            <a className="leftIcon" href={layout.git} target="_blank" rel="noreferrer"><img src={github} alt={layout.gitalt}></img></a>
                            <a className='rightIcon' href={layout.live} target="_blank" rel="noreferrer"><img src={live} alt={layout.livealt}></img></a>
                        </div>
                    })}
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
    )
}

export default PortData;