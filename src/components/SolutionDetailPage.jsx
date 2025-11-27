import React from 'react';
import { useNavigate } from 'react-router-dom';

const SolutionDetailPage = ({ title, subtitle, heroDescription, benefits, howItWorks, useCases, technicalSpecs }) => {
    const navigate = useNavigate();

    return (
        <div className="solution-detail-page">
            {/* Hero Section */}
            <section className="solution-hero">
                <div className="container">
                    <button className="back-button" onClick={() => navigate('/')}>
                        ← Back to Home
                    </button>
                    <h1>{title}</h1>
                    <p className="solution-subtitle">{subtitle}</p>
                    <p className="solution-hero-description">{heroDescription}</p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="solution-benefits">
                <div className="container">
                    <h2>Key Benefits</h2>
                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="benefit-card">
                                <div className="benefit-icon">{benefit.icon}</div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="solution-how-it-works">
                <div className="container">
                    <h2>How It Works</h2>
                    <div className="how-it-works-steps">
                        {howItWorks.map((step, index) => (
                            <div key={index} className="work-step">
                                <div className="step-number">{index + 1}</div>
                                <div className="step-content-detail">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="solution-use-cases">
                <div className="container">
                    <h2>Real-World Applications</h2>
                    <div className="use-cases-grid">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="use-case-card">
                                <h3>{useCase.title}</h3>
                                <p className="use-case-scenario">{useCase.scenario}</p>
                                <p className="use-case-result"><strong>Result:</strong> {useCase.result}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Specs */}
            <section className="solution-specs">
                <div className="container">
                    <h2>Technical Specifications</h2>
                    <div className="specs-grid">
                        {technicalSpecs.map((spec, index) => (
                            <div key={index} className="spec-item">
                                <h4>{spec.label}</h4>
                                <p>{spec.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="solution-cta">
                <div className="container">
                    <h2>Ready to Transform Your Operations?</h2>
                    <p>Schedule a custom demo to see how {title} can revolutionize your manufacturing process.</p>
                    <button className="btn btn-primary btn-large">Request Custom Demo</button>
                </div>
            </section>
        </div>
    );
};

export default SolutionDetailPage;
