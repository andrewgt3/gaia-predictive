import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Commitment = () => {
    const [ref, isVisible] = useScrollAnimation();
    const [expandedCard, setExpandedCard] = useState(null);

    const commitments = [
        {
            title: 'Read-Only Integration',
            description: 'We connect only to existing FIS/sensor data. Zero intrusion, zero network changes required.',
            details: 'Our platform integrates seamlessly with your existing Factory Information Systems (FIS) and sensor networks through read-only data connections. This ensures complete operational integrity—no modifications to your production systems, no downtime for installation, and no risk to your existing workflows.'
        },
        {
            title: 'Cybersecurity Compliant',
            description: 'Hardware-enforced unidirectional data access ensures complete OT network protection.',
            details: 'We employ hardware-enforced data diodes that physically prevent any data from flowing back into your operational technology (OT) network. This unidirectional architecture meets the highest cybersecurity standards and provides absolute protection against external threats, ensuring your critical manufacturing systems remain isolated and secure.'
        },
        {
            title: 'Alignment First',
            description: 'Custom deployment built hand-in-hand with your executive, IT, and plant teams.',
            details: 'Every deployment begins with comprehensive stakeholder alignment sessions involving your C-suite, IT leadership, and plant operations teams. We customize our solution to your specific manufacturing environment, existing systems, and business objectives—ensuring seamless adoption and maximum ROI from day one.'
        }
    ];

    const handleCardClick = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    return (
        <section ref={ref} className={`commitment animate-on-scroll ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                <h2 className="section-title">OUR COMMITMENT TO YOUR SYSTEM</h2>
                <div className="commitment-grid">
                    {commitments.map((item, index) => (
                        <div
                            key={index}
                            className={`commitment-card ${expandedCard === index ? 'expanded' : ''}`}
                            onClick={() => handleCardClick(index)}
                            role="button"
                            tabIndex={0}
                        >
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            {expandedCard === index && (
                                <div className="card-details">
                                    <p>{item.details}</p>
                                </div>
                            )}
                            <div className="card-indicator">
                                {expandedCard === index ? '−' : '+'}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Commitment;
