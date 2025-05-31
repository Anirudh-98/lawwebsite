import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Search, TrendingUp, Bot, Shield, Clock, Zap } from 'lucide-react';
interface Props {
  setActiveTab: (tab: string) => void;
}

const HomePage: React.FC<Props> = ({ setActiveTab }) => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              AI-Powered Legal Research
              <span className="block text-blue-300">Made Simple</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Find case judgments, legal strategies, and updated laws with our advanced AI platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setActiveTab('research')}
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Start Research <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => setActiveTab('chat')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center"
              >
                Try AI Assistant <MessageCircle className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Legal Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for comprehensive legal research and case analysis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="h-8 w-8" />,
                title: 'Smart Case Search',
                description: 'Find relevant case judgments instantly with AI-powered search algorithms'
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: 'Real-time Updates',
                description: 'Stay updated with the latest legal amendments and section changes'
              },
              {
                icon: <Bot className="h-8 w-8" />,
                title: 'AI Legal Assistant',
                description: 'Get instant answers to legal questions with our advanced chatbot'
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: 'Secure & Reliable',
                description: 'Bank-grade security for all your legal research and data'
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: '24/7 Availability',
                description: 'Access legal resources and AI assistance anytime, anywhere'
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: 'Lightning Fast',
                description: 'Get results in seconds with our optimized search infrastructure'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50K+', label: 'Case Judgments' },
              { number: '1M+', label: 'Legal Documents' },
              { number: '99.9%', label: 'Uptime' },
              { number: '24/7', label: 'AI Support' }
            ].map((stat, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
