import React from 'react';

const Hero = () => {
    const handleLearnMore = () => {
        const processFlowSection = document.querySelector('.predictive-advantage');
        if (processFlowSection) {
            processFlowSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                >
                    <source src="https://assets.gaiapredictive.com/footage%20for%20header%20.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Unifying Filter */}
                <div className="hero-overlay"></div>
            </div>
            <div className="container hero-content">
                <h1 className="animate-fade-up">OPERATIONAL LOGIC DRIVING ZERO-LOSS MANUFACTURING.</h1>

                <div className="scroll-indicator animate-fade-up" style={{ animationDelay: '0.6s' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
