import React from 'react';
import './style.css'
import resume from '../../../documents/resume.pdf'


const skills = {
    frontEnd: ['HTML', 'CSS', 'JavaScript', 'React', "jQuery", 'Bootstrap'],
    backEnd: ['Node', 'Express', 'MySQl', 'Sequelize', 'MongoDB', 'Mongoose', 'GraphQL', 'Python'],
    tech: ['Windows','MongoDB Compass', 'Insomnia', 'MySQL Workbench', 'Visual Studio Code', 'PyCharm', 'Heroku', 'Git' ]
}


function Resume() {
    return (
        <div className='resume'>
            <h1 className='w-100'>Proficiencies</h1>
            <div className='row justify-content-around'>
                <div className='card col-3'>
                    <ul className="card-body">
                        <h2>Technology</h2>
                        {skills.tech.map((skill, index) => {
                            return <li key={index}>{skill}</li>
                        })}
                    </ul>
                </div>
                <div className='card col-3'>
                    <ul className="card-body">
                        <h2>Front End</h2>
                        {skills.frontEnd.map((skill, index) => {
                            return <li key={index}>{skill}</li>
                        })}
                    </ul>
                </div>
                <div className='card col-3'>
                    <ul className="card-body">
                        <h2>Back End</h2>
                        {skills.backEnd.map((skill, index) => {
                            return <li key={index}>{skill}</li>
                        })}
                    </ul>
                </div>

            </div>
            <p>Below is my 7 year resume.  Please feel free to click the link and download the PDF.</p>
            <a href={resume} target='_blank' rel="noreferrer">My Resume</a>
        </div>
    );
}

export default Resume;