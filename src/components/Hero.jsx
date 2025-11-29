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
                <p className="hero-subtext animate-fade-up" style={{ animationDelay: '0.2s' }}>
                    We integrate deep machine intelligence with your existing operational data to forecast catastrophic failure, ensuring guaranteed production continuity and optimized resource alignment.
                </p>
                <p className="hero-footnote animate-fade-up" style={{ animationDelay: '0.3s' }}>
                    Utilizing existing plant sensors and FIS data — Zero hardware Capex required.
                </p>
                <div className="hero-ctas animate-fade-up" style={{ animationDelay: '0.4s' }}>
                    <button className="btn btn-primary">REQUEST A CUSTOM DEMO</button>
                    <button className="btn btn-secondary" onClick={handleLearnMore}>LEARN HOW IT WORKS</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
