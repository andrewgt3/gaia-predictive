import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Import generated images (assuming they are moved to assets or imported correctly)
// For now, we'll use the absolute paths directly in the src attribute or import them if possible.
// In a real app, we'd import them. Here we will use the paths provided by the tool.
const slideImages = [
    '/assets/dashboard_overview.png',
    '/assets/dashboard_prediction.png',
    '/assets/dashboard_diagnostics.png'
];

const PlatformShowcase = () => {
    const [ref, isVisible] = useScrollAnimation();
    const [activeSlide, setActiveSlide] = useState(0);
    const [progress, setProgress] = useState(0);

    const slides = [
        {
            id: 0,
            title: 'Real-Time Visibility',
            subtitle: 'Global Fleet Visibility',
            description: 'Monitor your entire production ecosystem from a single pane of glass. Real-time status updates, efficiency metrics, and critical alert aggregation ensure you never miss a beat.',
            image: slideImages[0] // Will update this path once generated
        },
        {
            id: 1,
            title: 'Predictive Intelligence',
            subtitle: 'AI-Driven Failure Forecasting',
            description: 'Our proprietary algorithms analyze vibration, temperature, and telemetry data to predict component failures weeks in advance, allowing for planned intervention instead of emergency repairs.',
            image: slideImages[1]
        },
        {
            id: 2,
            title: 'Asset Diagnostics',
            subtitle: 'Deep-Dive Component Analysis',
            description: 'Drill down into specific assets to visualize wear patterns and performance degradation. Digital twin technology provides a 3D view of component health status.',
            image: slideImages[2]
        }
    ];

    // Auto-advance timer
    useEffect(() => {
        const slideDuration = 10000; // 10 seconds
        const intervalStep = 100; // Update progress every 100ms

        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    setActiveSlide(current => (current + 1) % slides.length);
                    return 0;
                }
                return prev + (intervalStep / slideDuration) * 100;
            });
        }, intervalStep);

        return () => clearInterval(timer);
    }, [activeSlide]);

    const handleSlideChange = (index) => {
        setActiveSlide(index);
        setProgress(0);
    };

    return (
        <section ref={ref} className={`platform-showcase animate-on-scroll ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                <div className="showcase-header">
                    <h2 className="section-title">Platform Capabilities</h2>
                    <p className="section-subtitle">Next-gen intelligence for automotive manufacturing.</p>
                </div>

                <div className="showcase-container">
                    {/* Left Side: Content & Navigation */}
                    <div className="showcase-nav">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`showcase-nav-item ${activeSlide === index ? 'active' : ''}`}
                                onClick={() => handleSlideChange(index)}
                            >
                                <div className="nav-item-header">
                                    <span className="nav-number">0{index + 1}</span>
                                    <h3>{slide.title}</h3>
                                </div>
                                <div className={`nav-progress-bar ${activeSlide === index ? 'active' : ''}`}>
                                    <div
                                        className="progress-fill"
                                        style={{ width: activeSlide === index ? `${progress}%` : '0%' }}
                                    ></div>
                                </div>
                                <div className="nav-content">
                                    <h4>{slide.subtitle}</h4>
                                    <p>{slide.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Image Display */}
                    <div className="showcase-display">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`slide-image-container ${activeSlide === index ? 'active' : ''}`}
                            >
                                <img src={slide.image} alt={slide.title} className="slide-image" />
                                <div className="image-overlay"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlatformShowcase;
