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
import Contact from './components/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

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
    <Contact />
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
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
