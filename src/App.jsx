import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './solution-pages.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Commitment from './components/Commitment';
import PlatformShowcase from './components/PlatformShowcase';
import Solutions from './components/Solutions';
import DataVsDowntime from './components/DataVsDowntime';
import PredictiveAdvantage from './components/PredictiveAdvantage';
import StrategicOutcome from './components/StrategicOutcome';
import Footer from './components/Footer';
import AssetHealthMonitoring from './pages/AssetHealthMonitoring';
import PredictiveMaintenance from './pages/PredictiveMaintenance';
import ProductionOptimization from './pages/ProductionOptimization';

// Home page component
const HomePage = () => (
  <>
    <Hero />
    <Commitment />
    <PlatformShowcase />
    <Solutions />
    <DataVsDowntime />
    <PredictiveAdvantage />
    <StrategicOutcome />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions/asset-health-monitoring" element={<AssetHealthMonitoring />} />
          <Route path="/solutions/predictive-maintenance" element={<PredictiveMaintenance />} />
          <Route path="/solutions/production-optimization" element={<ProductionOptimization />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
