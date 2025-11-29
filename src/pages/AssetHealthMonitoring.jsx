import React from 'react';
import { Activity, Zap, TrendingDown, Wrench } from 'lucide-react';
import SolutionDetailPage from '../components/SolutionDetailPage';

const AssetHealthMonitoring = () => {
    const pageData = {
        title: "Asset Health Monitoring",
        subtitle: "Real-Time Equipment Intelligence",
        heroDescription: "Gain unprecedented visibility into your manufacturing assets with continuous health monitoring, predictive diagnostics, and automated alerting systems.",

        benefits: [
            {
                icon: <Activity size={48} />,
                title: "Real-Time Visibility",
                description: "Monitor equipment health across your entire fleet with live dashboards showing performance metrics, vibration analysis, and thermal imaging data."
            },
            {
                icon: <Zap size={48} />,
                title: "Instant Anomaly Detection",
                description: "AI-powered algorithms detect deviations from normal operating parameters within milliseconds, triggering immediate alerts before failures occur."
            },
            {
                icon: <TrendingDown size={48} />,
                title: "Reduce Downtime by 40%",
                description: "Proactive monitoring eliminates unexpected breakdowns, reducing unplanned downtime and associated production losses."
            },
            {
                icon: <Wrench size={48} />,
                title: "Optimize Maintenance",
                description: "Shift from reactive to predictive maintenance schedules, reducing maintenance costs by 25% while extending asset lifespan."
            }
        ],

        howItWorks: [
            {
                title: "Sensor Integration",
                description: "Connect to existing plant sensors (vibration, temperature, pressure, current) or deploy our IoT sensor network. No hardware replacement required."
            },
            {
                title: "Data Aggregation",
                description: "Our platform ingests real-time data from all connected assets, normalizing and structuring it for advanced analytics."
            },
            {
                title: "AI Analysis",
                description: "Machine learning models continuously analyze sensor data, comparing current performance against historical baselines and identifying anomalies."
            },
            {
                title: "Automated Alerts",
                description: "When potential issues are detected, the system automatically notifies maintenance teams via SMS, email, or integration with your CMMS."
            },
            {
                title: "Actionable Insights",
                description: "Receive specific recommendations on which components need attention, optimal maintenance timing, and predicted failure modes."
            }
        ],

        technicalSpecs: [
            { label: "Data Refresh Rate", value: "Real-time (< 1 second latency)" },
            { label: "Supported Sensors", value: "Vibration, Temperature, Pressure, Current, Ultrasonic, Thermal" },
            { label: "Integration", value: "OPC UA, Modbus, MQTT, REST API" },
            { label: "Alert Channels", value: "SMS, Email, Slack, Microsoft Teams, CMMS Integration" },
            { label: "Historical Data", value: "Unlimited retention with time-series database" },
            { label: "Deployment", value: "Cloud, On-Premise, or Hybrid" }
        ]
    };

    return <SolutionDetailPage {...pageData} />;
};

export default AssetHealthMonitoring;
