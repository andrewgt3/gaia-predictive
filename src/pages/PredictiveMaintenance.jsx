import React from 'react';
import { Sparkles, CalendarClock, Banknote, Target } from 'lucide-react';
import SolutionDetailPage from '../components/SolutionDetailPage';

const PredictiveMaintenance = () => {
    const pageData = {
        title: "Predictive Maintenance",
        subtitle: "AI-Driven Failure Forecasting",
        heroDescription: "Eliminate unexpected equipment failures with machine learning models that predict component degradation weeks in advance, enabling planned interventions instead of emergency repairs.",

        benefits: [
            {
                icon: <Sparkles size={48} />,
                title: "Forecast Failures 3-12 Days Ahead",
                description: "Advanced AI models analyze historical and real-time data to predict component failures with 95%+ accuracy, giving you ample time to plan maintenance."
            },
            {
                icon: <CalendarClock size={48} />,
                title: "Optimize Maintenance Schedules",
                description: "Replace time-based maintenance with condition-based scheduling, performing maintenance only when needed and avoiding premature part replacement."
            },
            {
                icon: <Banknote size={48} />,
                title: "12x ROI on Maintenance Spend",
                description: "Reduce maintenance costs by 30-40% while simultaneously increasing equipment uptime and production output. (Source: Deloitte/DOE)"
            },
            {
                icon: <Target size={48} />,
                title: "Precision Diagnostics",
                description: "Identify specific failing components (bearings, motors, belts) rather than replacing entire assemblies, minimizing parts inventory and labor costs."
            }
        ],

        howItWorks: [
            {
                title: "Historical Data Training",
                description: "Our AI models are trained on your equipment's historical performance data, learning normal operating patterns and failure signatures."
            },
            {
                title: "Continuous Monitoring",
                description: "Real-time sensor data is fed into predictive models that continuously assess equipment health and degradation rates."
            },
            {
                title: "Failure Probability Calculation",
                description: "Machine learning algorithms calculate the probability of failure for each critical component over the next 30-90 days."
            },
            {
                title: "Maintenance Recommendations",
                description: "When failure probability exceeds thresholds, the system generates maintenance work orders with specific component details and optimal timing."
            },
            {
                title: "Continuous Learning",
                description: "Models improve over time by learning from actual failure events and maintenance outcomes, increasing prediction accuracy."
            }
        ]
    };

    return <SolutionDetailPage {...pageData} />;
};

export default PredictiveMaintenance;
