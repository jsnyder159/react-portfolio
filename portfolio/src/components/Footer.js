import React from 'react';
import github from '../images/github.png'
import linkedIn from '../images/linkedin.png'
import hackerRank from '../images/hacker-rank.png'

function Footer() {
    return (
        <footer className="footer">
            <nav>
                <ul className="d-flex flex-row justify-content-center align-content-center">
                    <li>
                        <a href='https://github.com/jsnyder159' target="_blank"><img src={github} alt="github logo"></img></a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/jason-snyder-94869622b/' target="_blank"><img src={linkedIn} alt="linkedin logo"></img></a>
                    </li>
                    <li>
                        <a href='https://www.hackerrank.com/jason_snyder159' target="_blank"><img src={hackerRank} alt="hacker rank logo" width="33px" height="33px"></img></a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;