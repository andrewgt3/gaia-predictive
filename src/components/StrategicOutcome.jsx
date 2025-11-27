import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const StrategicOutcome = () => {
    const [ref, isVisible] = useScrollAnimation();

    const metrics = [
        { value: '12X+', label: 'Potential ROI', highlight: true },
        { value: '25%', label: 'Avg. Downtime Reduction' },
        { value: '6-9mo', label: 'Typical Payback Period' },
        { value: '99.7%', label: 'Uptime Achievement' }
    ];

    return (
        <section ref={ref} className={`strategic-outcome animate-on-scroll ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                <h2 className="section-title">THE STRATEGIC OUTCOME</h2>

                <div className="outcome-layout">
                    {/* Left: Main ROI Callout */}
                    <div className="outcome-primary">
                        <div className="roi-badge">
                            <div className="roi-value">12X+</div>
                            <div className="roi-label">Potential ROI</div>
                        </div>
                        <p className="roi-context">
                            The cost of implementation is significantly lower than the cost of one unplanned downtime event.
                        </p>
                    </div>

                    {/* Right: Supporting Metrics */}
                    <div className="outcome-metrics">
                        <div className="metric-card">
                            <div className="metric-value">25%</div>
                            <div className="metric-label">Avg. Downtime Reduction</div>
                            <p className="metric-detail">Based on first-year deployment across automotive manufacturing clients</p>
                        </div>

                        <div className="metric-card">
                            <div className="metric-value">6-9mo</div>
                            <div className="metric-label">Typical Payback Period</div>
                            <p className="metric-detail">Full system cost recovery through prevented downtime events</p>
                        </div>

                        <div className="metric-card">
                            <div className="metric-value">99.7%</div>
                            <div className="metric-label">Uptime Achievement</div>
                            <p className="metric-detail">Industry-leading operational continuity for critical production lines</p>
                        </div>
                    </div>
                </div>

                {/* Bottom: Value Breakdown */}
                <div className="value-breakdown">
                    <h3>Where the Value Comes From</h3>
                    <div className="breakdown-grid">
                        <div className="breakdown-item">
                            <span className="breakdown-number">01</span>
                            <h4>Eliminated Emergency Repairs</h4>
                            <p>Prevent costly rush orders and overtime labor through predictive intervention</p>
                        </div>
                        <div className="breakdown-item">
                            <span className="breakdown-number">02</span>
                            <h4>Optimized Maintenance Windows</h4>
                            <p>Schedule maintenance during planned downtime, maximizing production hours</p>
                        </div>
                        <div className="breakdown-item">
                            <span className="breakdown-number">03</span>
                            <h4>Extended Asset Lifespan</h4>
                            <p>Reduce wear through data-driven maintenance, delaying capital replacement</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StrategicOutcome;
