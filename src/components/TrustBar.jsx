import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TrustBar = () => {
    const [ref, isVisible] = useScrollAnimation();
    const companies = [
        'Major OEM', 'Tier 1 Supplier', 'Global Manufacturing', 'AutoParts Inc', 'Robotics Co'
    ];

    return (
        <div ref={ref} className={`trust-bar animate-on-scroll ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                <p className="trust-text">Trusted by industry leaders in high-volume production</p>
                <div className="logos">
                    {companies.map((company, index) => (
                        <div key={index} className="logo-placeholder">
                            {company}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
