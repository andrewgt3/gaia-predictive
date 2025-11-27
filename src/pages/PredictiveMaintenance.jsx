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
                title: "Forecast Failures 2-4 Weeks Ahead",
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
                description: "Reduce maintenance costs by 30-40% while simultaneously increasing equipment uptime and production output."
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
        ],

        useCases: [
            {
                title: "Electric Motor Failures",
                scenario: "A manufacturing plant experienced frequent motor failures on critical production equipment, causing 5-7 days of downtime per incident.",
                result: "Predictive models detected bearing degradation 3 weeks before failure, allowing scheduled replacement during weekend maintenance. Downtime reduced to 4 hours."
            },
            {
                title: "Hydraulic System Leaks",
                scenario: "Hydraulic press systems were failing unpredictably, causing oil contamination and expensive emergency repairs.",
                result: "Pressure and temperature analysis predicted seal failures 2 weeks in advance. Maintenance costs dropped 45% while eliminating contamination incidents."
            },
            {
                title: "Gearbox Degradation",
                scenario: "Critical gearboxes in a stamping line were failing catastrophically, requiring 10+ days for replacement and costing $250K per incident.",
                result: "Vibration analysis detected gear tooth wear 6 weeks early, enabling planned replacement during annual shutdown. Zero catastrophic failures in 2 years."
            }
        ],

        technicalSpecs: [
            { label: "Prediction Accuracy", value: "95%+ for trained equipment types" },
            { label: "Forecast Window", value: "2-12 weeks depending on failure mode" },
            { label: "AI Models", value: "LSTM, Random Forest, Gradient Boosting, Transformer Networks" },
            { label: "Training Data Required", value: "Minimum 6 months of historical data" },
            { label: "Supported Equipment", value: "Motors, Pumps, Compressors, Gearboxes, Bearings, Conveyors" },
            { label: "Model Updates", value: "Continuous learning with weekly retraining cycles" }
        ]
    };

    return <SolutionDetailPage {...pageData} />;
};

export default PredictiveMaintenance;
