import React from 'react';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Commitment from './components/Commitment';
import PlatformShowcase from './components/PlatformShowcase';
import Solutions from './components/Solutions';
import DataVsDowntime from './components/DataVsDowntime';
import PredictiveAdvantage from './components/PredictiveAdvantage';
import StrategicOutcome from './components/StrategicOutcome';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Commitment />
      <PlatformShowcase />
      <Solutions />
      <DataVsDowntime />
      <PredictiveAdvantage />
      <StrategicOutcome />
      <Footer />
    </div>
  );
}

export default App;
