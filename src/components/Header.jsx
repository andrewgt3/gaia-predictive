import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">
                    <a href="/">
                        <span className="logo-icon">❖</span> Gaia Predictive
                    </a>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#solutions">Solutions</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="cta">
                    <button className="btn btn-primary">Request Custom Demo</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
