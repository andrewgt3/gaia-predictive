import React from 'react';
import { Link } from 'react-router-dom';

const SolutionDetailPage = ({ title, subtitle, heroDescription, benefits, howItWorks, technicalSpecs }) => {
    return (
        <div className="solution-detail-page">
            {/* Hero Section */}
            <section className="solution-hero">
                <div className="container">
                    <Link to="/" className="back-button">
                        ← Back to Home
                    </Link>
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

            {/* Technical Specs - Conditional */}
            {technicalSpecs && technicalSpecs.length > 0 && (
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
            )}
        </div>
    );
};

export default SolutionDetailPage;
