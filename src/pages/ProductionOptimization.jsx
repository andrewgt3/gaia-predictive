import React from 'react';
import { TrendingUp, Settings, RefreshCw, Rocket } from 'lucide-react';
import SolutionDetailPage from '../components/SolutionDetailPage';

const ProductionOptimization = () => {
    const pageData = {
        title: "Production Optimization",
        subtitle: "Data-Driven Efficiency Gains",
        heroDescription: "Maximize throughput and minimize waste with AI-powered production optimization that identifies bottlenecks, optimizes cycle times, and ensures consistent quality across your manufacturing operations.",

        benefits: [
            {
                icon: <TrendingUp size={48} />,
                title: "Increase OEE by 15-25%",
                description: "Improve Overall Equipment Effectiveness through optimized cycle times, reduced changeovers, and minimized quality defects."
            },
            {
                icon: <Settings size={48} />,
                title: "Eliminate Bottlenecks",
                description: "Real-time production analytics identify constraint points in your process, enabling targeted improvements that unlock capacity."
            },
            {
                icon: <RefreshCw size={48} />,
                title: "Reduce Scrap by 30%",
                description: "Quality prediction models detect process drift before defects occur, preventing scrap generation and rework costs."
            },
            {
                icon: <Rocket size={48} />,
                title: "Boost Throughput",
                description: "Optimize machine parameters, material flow, and production sequencing to increase output without capital investment."
            }
        ],

        howItWorks: [
            {
                title: "Production Data Collection",
                description: "Integrate with MES, SCADA, and PLC systems to capture real-time production metrics including cycle times, quality data, and material usage."
            },
            {
                title: "Process Mining",
                description: "AI algorithms analyze production workflows to identify inefficiencies, bottlenecks, and opportunities for improvement."
            },
            {
                title: "Parameter Optimization",
                description: "Machine learning models recommend optimal machine settings (speeds, feeds, temperatures) to maximize throughput while maintaining quality."
            },
            {
                title: "Quality Prediction",
                description: "Predictive models analyze process variables to forecast quality outcomes, enabling real-time adjustments before defects occur."
            },
            {
                title: "Continuous Improvement",
                description: "Track KPIs over time and automatically identify new optimization opportunities as production conditions change."
            }
        ],

        technicalSpecs: [
            { label: "Data Sources", value: "MES, SCADA, PLC, ERP, QMS" },
            { label: "Optimization Algorithms", value: "Genetic Algorithms, Reinforcement Learning, Constraint Programming" },
            { label: "KPI Tracking", value: "OEE, Cycle Time, Scrap Rate, Throughput, Yield, First Pass Quality" },
            { label: "Recommendation Engine", value: "Real-time parameter suggestions with confidence scores" },
            { label: "Simulation Capability", value: "What-if analysis for production scenarios" },
            { label: "Reporting", value: "Customizable dashboards with drill-down analytics" }
        ]
    };

    return <SolutionDetailPage {...pageData} />;
};

export default ProductionOptimization;
