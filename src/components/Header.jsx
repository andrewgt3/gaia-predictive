import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling 100px
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                <div className={`cta ${isScrolled ? 'visible' : 'hidden'}`}>
                    <a href="mailto:contact@gaiapredictive.com?subject=Request%20Custom%20Demo" className="btn btn-primary">Request Custom Demo</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
