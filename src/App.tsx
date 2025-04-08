import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import InteractiveTestPage from './pages/InteractiveTestPage';
import ExpertTestPage from './pages/ExpertTestPage';
import MensaTestPage from './pages/MensaTestPage';
import RavensTestPage from './pages/RavensTestPage';
import GamifiedTestPage from './pages/GamifiedTestPage';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
      <Navigation />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Main Test Page */}
          <Route path="/smart-test" element={<TestPage />} />
          
          {/* Long-tail keyword pages */}
          <Route path="/smart-test-for-intelligence" element={<TestPage />} />
          <Route path="/smart-test-questions-from-experts" element={<ExpertTestPage />} />
          <Route path="/online-intelligence-test-free" element={<TestPage />} />
          
          {/* Authority pages */}
          <Route path="/iq-test-questions-from-mensa" element={<MensaTestPage />} />
          <Route path="/smart-test-based-on-psychological-research" element={<TestPage />} />
          <Route path="/smart-test-inspired-by-ravens-progressive-matrices" element={<RavensTestPage />} />
          
          {/* Feature pages */}
          <Route path="/interactive-iq-test" element={<InteractiveTestPage />} />
          <Route path="/gamified-intelligence-test" element={<GamifiedTestPage />} />
          
          {/* Info pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
          
          {/* Legacy route redirects */}
          <Route path="/test" element={<Navigate to="/smart-test" replace />} />
          <Route path="/iq-test" element={<Navigate to="/smart-test" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App