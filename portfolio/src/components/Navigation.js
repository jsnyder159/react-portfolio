import React from 'react';

export default function Nav() {
    return(
        <nav className='header-menu'>
            <section
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    flexDirection: 'row',
                    fontSize: 'calc(10px + 2vmin)',
                    backgroundColor: 'var(--xik)',
                    height: '75px',
                    
                }}>
                <span className='name'>Jason Snyder</span>
                <div className='nav-item'>
                    <a href="#">About Me</a>
                </div>
                <div className='nav-item'>
                    <a href="#">Portfolio</a>
                </div>
                <div className='nav-item'>
                    <a href="#">Contact Me</a>
                </div>
                <div className='nav-item'>
                    <a href="#">Resume</a>
                </div>
            </section>
        </nav>
    );
}