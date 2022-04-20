import React from 'react';
import './style.css'
import resume from '../../../documents/resume.pdf'

function Resume() {
    return (
        <div className='resume'>
            <h1 className='w-100'>Proficiencies</h1>
            <div className='row justify-content-around'>
                <div className='card col-3'>
                    <ul className="card-body">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
                <div className='card col-3'>
                    <ul className="card-body">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
                <div className='card col-3'>
                    <ul className="card-body">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
            </div>
            <p>Below is my 7 year resume.  Please feel free to click the link and download the PDF.</p>
            <a href={resume} target='_blank'>My Resume</a>
        </div>
    );
}

export default Resume;