import React from 'react';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-content">
                <div className="footer-cta">
                    <h3>Ready to move beyond reactive maintenance?</h3>
                    <a href="/contact" className="btn btn-primary">SCHEDULE A CONSULTATION</a>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Gaia Predictive</h4>
                        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                    </div>
                    <div className="footer-column">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#solutions">Solutions</a></li>
                            <li><a href="#case-studies">Case Studies</a></li>
                            <li><a href="#about">About</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
