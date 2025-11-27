import React from 'react';
import SolutionDetailPage from '../components/SolutionDetailPage';

const ProductionOptimization = () => {
    const pageData = {
        title: "Production Optimization",
        subtitle: "Data-Driven Efficiency Gains",
        heroDescription: "Maximize throughput and minimize waste with AI-powered production optimization that identifies bottlenecks, optimizes cycle times, and ensures consistent quality across your manufacturing operations.",

        benefits: [
            {
                icon: "📈",
                title: "Increase OEE by 15-25%",
                description: "Improve Overall Equipment Effectiveness through optimized cycle times, reduced changeovers, and minimized quality defects."
            },
            {
                icon: "⚙️",
                title: "Eliminate Bottlenecks",
                description: "Real-time production analytics identify constraint points in your process, enabling targeted improvements that unlock capacity."
            },
            {
                icon: "♻️",
                title: "Reduce Scrap by 30%",
                description: "Quality prediction models detect process drift before defects occur, preventing scrap generation and rework costs."
            },
            {
                icon: "🚀",
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

        useCases: [
            {
                title: "Injection Molding Optimization",
                scenario: "A plastics manufacturer struggled with inconsistent cycle times and 8% scrap rate due to process variability.",
                result: "AI-optimized injection parameters reduced cycle time by 12% and scrap to 2.5%, increasing capacity by 15% without new equipment."
            },
            {
                title: "Assembly Line Balancing",
                scenario: "An automotive assembly line had uneven workload distribution, causing bottlenecks and 22% idle time at certain stations.",
                result: "Production optimization rebalanced tasks across stations, reducing idle time to 8% and increasing line throughput by 18%."
            },
            {
                title: "Quality Defect Prevention",
                scenario: "A metal stamping operation experienced 12% scrap rate due to tool wear and material variations.",
                result: "Predictive quality models detected process drift early, enabling real-time adjustments. Scrap rate dropped to 3.5%, saving $850K annually."
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
