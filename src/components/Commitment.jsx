import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Commitment = () => {
    const [ref, isVisible] = useScrollAnimation();

    const commitments = [
        {
            number: '/0.1',
            title: 'Read-Only Integration',
            description: 'We connect only to existing FIS/sensor data. Zero intrusion, zero network changes required.',
            image: '/images/commitment-1.jpg'
        },
        {
            number: '/0.2',
            title: 'Cybersecurity Compliant',
            description: 'Hardware-enforced unidirectional data access ensures complete OT network protection.',
            image: '/images/commitment-2.jpg'
        },
        {
            number: '/0.3',
            title: 'Alignment First',
            description: 'Custom deployment built hand-in-hand with your executive, IT, and plant teams.',
            image: '/images/commitment-3.jpg'
        }
    ];

    return (
        <section id="about" ref={ref} className={`commitment animate-on-scroll ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                <h2 className="section-title">Our Commitment to Your System</h2>
                <p className="section-subtitle">Zero disruption. Maximum security. Built for your infrastructure.</p>
                <div className="commitment-list">
                    {commitments.map((item, index) => (
                        <div key={index} className="commitment-item">
                            <div className="commitment-image-container">
                                <img src={item.image} alt={item.title} className="commitment-image" />
                            </div>
                            <div className="commitment-left">
                                <div className="commitment-number">{item.number}</div>
                                <h3 className="commitment-title">{item.title}</h3>
                            </div>
                            <div className="commitment-right">
                                <p className="commitment-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Commitment;
