import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const DataVsDowntime = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section ref={ref} className={`data-vs-downtime animate-on-scroll ${isVisible ? 'visible' : ''}`}>
            <div className="container split-layout">
                <div className="split-content left">
                    <div className="software-viz-card">
                        <div className="software-viz">
                            {/* Placeholder for software screenshot/visualization */}
                            <div className="viz-header">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <div className="viz-body">
                                <div className="graph-line"></div>
                                <div className="data-points">
                                    <div className="point p1"></div>
                                    <div className="point p2"></div>
                                    <div className="point p3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-content right">
                    <h2 className="highlight-text">
                        Stop Reacting. <br />
                        Start <span className="text-accent">Predicting.</span>
                    </h2>
                    <p>
                        Traditional maintenance relies on failure or arbitrary schedules.
                        Gaia Predictive uses real-time data to pinpoint exactly when maintenance is needed,
                        eliminating unnecessary downtime and extending asset life.
                    </p>
                    <button className="btn btn-accent">Request Demo</button>
                </div>
            </div>
        </section>
    );
};

export default DataVsDowntime;
