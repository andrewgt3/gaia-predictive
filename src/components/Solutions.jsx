import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import LineGraphIcon from './icons/LineGraphIcon';
import ForecastIcon from './icons/ForecastIcon';
import CircuitIcon from './icons/CircuitIcon';

const Solutions = () => {
    const [ref, isVisible] = useScrollAnimation();
    const solutions = [
        {
            title: 'Asset Health Monitoring',
            Icon: LineGraphIcon,
            description: 'Real-time tracking of machine performance and vital statistics.',
            link: '/solutions/asset-health-monitoring'
        },
        {
            title: 'Predictive Maintenance',
            Icon: ForecastIcon,
            description: 'AI-driven forecasting of component failures before they occur.',
            link: '/solutions/predictive-maintenance'
        },
        {
            title: 'Production Optimization',
            Icon: CircuitIcon,
            description: 'Automated recommendations to maximize throughput and efficiency.',
            link: '/solutions/production-optimization'
        }
    ];

    return (
        <section ref={ref} className={`solutions animate-on-scroll ${isVisible ? 'visible' : ''}`} id="solutions">
            <div className="solutions-background">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>
            <div className="container">
                <h2 className="section-title">Our Predictive Maintenance Solutions</h2>
                <div className="solutions-grid">
                    {solutions.map((sol, index) => (
                        <Link to={sol.link} key={index} className="solution-card-link">
                            <div className="solution-card">
                                <div className="card-icon">
                                    <sol.Icon size={64} className="icon-svg" />
                                </div>
                                <h3>{sol.title}</h3>
                                <p>{sol.description}</p>
                                <div className="card-link">
                                    Learn more <span className="arrow">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
