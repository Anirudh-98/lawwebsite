import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import ResearchPage from './components/ResearchPage';
import ChatPage from './components/ChatPage';
import AboutPage from './components/AboutPage';
import PricingPage from './components/PricingPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

const LegalAIPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans antialiased bg-gray-100">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main>
        {activeTab === 'home' && <HomePage setActiveTab={setActiveTab}/>}
        {activeTab === 'about' && <AboutPage setActiveTab={setActiveTab}/>}
        {activeTab === 'research' && <ResearchPage setActiveTab={setActiveTab}/>}
        {activeTab === 'chat' && <ChatPage setActiveTab={setActiveTab}/>}
        {activeTab === 'pricing' && <PricingPage setActiveTab={setActiveTab}/>}
        {activeTab === 'contact' && <ContactPage setActiveTab={setActiveTab}/>}
      </main>

      <Footer />
    </div>
  );
};

export default LegalAIPlatform;
