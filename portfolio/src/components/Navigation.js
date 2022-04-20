import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand">Jason Snyder</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <Link to='/'>
                        <li className="nav-item nav-link active">About Me</li>
                        </Link>
                        <Link to='/portfolio'>
                        <li className="nav-item nav-link">Portfolio</li>
                        </Link>
                        <Link to='/resume'>
                        <li className="nav-item nav-link">Resume</li>
                        </Link>
                        <Link to='/contact'>
                        <li className="nav-item nav-link">Contact Me</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}