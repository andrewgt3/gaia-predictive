import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import IngestIcon from './icons/IngestIcon';
import AnalyzeIcon from './icons/AnalyzeIcon';
import PredictIcon from './icons/PredictIcon';

const PredictiveAdvantage = () => {
    const [ref, isVisible] = useScrollAnimation();
    const steps = [
        {
            title: 'INGEST',
            subtitle: 'IoT Sensor Data & ML',
            Icon: IngestIcon,
            description: 'Seamlessly aggregate data from thousands of sensors across your production line.'
        },
        {
            title: 'ANALYZE',
            subtitle: 'Proprietary Failure Algorithms',
            Icon: AnalyzeIcon,
            description: 'Our deep learning models identify subtle patterns that indicate impending failure.'
        },
        {
            title: 'PREDICT',
            subtitle: 'Actionable Maintenance Intelligence',
            Icon: PredictIcon,
            description: 'Receive precise alerts with prescribed actions to prevent downtime before it happens.'
        }
    ];

    return (
        <section ref={ref} className={`predictive-advantage animate-on-scroll ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                <h3 className="section-title">The Gaia Predictive Advantage</h3>
                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step-item">
                            <div className="step-icon">
                                <step.Icon size={56} className="icon-svg" />
                            </div>
                            <div className="step-content">
                                <h4>{step.title}</h4>
                                <p className="step-subtitle">{step.subtitle}</p>
                                <p>{step.description}</p>
                            </div>
                            {index < steps.length - 1 && <div className="step-line"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PredictiveAdvantage;
