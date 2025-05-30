import React, { useState, Dispatch, SetStateAction } from 'react';
import {
  Check,
  ArrowLeft,
  Crown,
  Zap,
  Shield,
  Users,
  Clock,
  FileText,
  Scale,
  MessageCircle,
  Star,
  Sparkles,
  Search,
  BookOpen
} from 'lucide-react';

interface PricingPageProps {
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const PricingPage: React.FC<PricingPageProps> = ({ setActiveTab }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const handleBackClick = () => {
    setActiveTab('home');
  };

  const features = [
    {
      icon: Search,
      title: "Advanced Case Search",
      description: "Search through 50,000+ legal cases and judgments"
    },
    {
      icon: FileText,
      title: "Document Analysis",
      description: "AI-powered analysis of legal documents and contracts"
    },
    {
      icon: Scale,
      title: "Legal Precedents",
      description: "Access comprehensive database of legal precedents"
    },
    {
      icon: BookOpen,
      title: "Legal Research Tools",
      description: "Advanced tools for efficient legal research"
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Get latest legal amendments and case updates"
    },
    {
      icon: MessageCircle,
      title: "Expert Support",
      description: "Priority support from legal research experts"
    }
  ];

  const planDetails = {
    monthly: {
      price: "₹250",
      period: "/month",
      savings: null,
      totalYearly: "₹3000/year",
      monthlyEquivalent: null
    },
    yearly: {
      price: "₹2500",
      period: "/year",
      savings: "Save ₹500",
      monthlyEquivalent: "₹200/month",
      totalYearly: null
    }
  };

  const currentPlan = planDetails[billingCycle];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 mb-6">
            <Crown className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-medium">Professional Legal Research</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Research Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access comprehensive legal databases and advanced research tools to enhance your legal practice
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-xl border border-gray-300 shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all relative ${
                billingCycle === 'yearly'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              {billingCycle === 'yearly' && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 17%
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Features Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg sticky top-28">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                Platform Features
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <feature.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{feature.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-blue-200 rounded-xl shadow-xl overflow-hidden relative">
              {/* Popular Badge */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1 mt-12 ">
                  <Crown className="w-4 h-4" />
                  <span>Most Popular</span>
                </div>
              </div>

              <div className="p-8 pt-12">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Plan</h3>
                  <p className="text-gray-600">Complete legal research platform access</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-gray-900">{currentPlan.price}</span>
                    <span className="text-xl text-gray-600 ml-1">{currentPlan.period}</span>
                  </div>
                  
                  {billingCycle === 'yearly' && currentPlan.savings && (
                    <div className="space-y-1">
                      <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {currentPlan.savings}
                      </div>
                      {currentPlan.monthlyEquivalent && (
                        <p className="text-gray-600 text-sm">
                          That's just {currentPlan.monthlyEquivalent}
                        </p>
                      )}
                    </div>
                  )}
                  
                  {billingCycle === 'monthly' && currentPlan.totalYearly && (
                    <p className="text-gray-600 text-sm">
                      {currentPlan.totalYearly} if billed annually
                    </p>
                  )}
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="text-gray-900 font-semibold mb-4">Everything included:</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "Access to 50,000+ case judgments",
                      "Advanced search and filtering tools",
                      "Legal document analysis with AI",
                      "Real-time legal updates and amendments",
                      "Priority customer support",
                      "Export and citation tools",
                      "Multi-user team access",
                      "Legal research analytics"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl">
                  <div className="flex items-center justify-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Start Your Research Journey</span>
                  </div>
                </button>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">50K+</div>
                      <div className="text-xs text-gray-600">Legal Cases</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">24/7</div>
                      <div className="text-xs text-gray-600">Support</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">99.9%</div>
                      <div className="text-xs text-gray-600">Uptime</div>
                    </div>
                  </div>
                </div>

                {/* Money Back Guarantee */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center space-x-2 text-gray-600 text-sm">
                    <Shield className="w-4 h-4" />
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Can I cancel anytime?</h4>
                  <p className="text-sm text-gray-600">Yes, you can cancel your subscription at any time. No questions asked.</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Is there a free trial?</h4>
                  <p className="text-sm text-gray-600">We offer a 30-day money-back guarantee, so you can try risk-free.</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">What payment methods do you accept?</h4>
                  <p className="text-sm text-gray-600">We accept all major credit cards, UPI, and net banking.</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Do you offer team discounts?</h4>
                  <p className="text-sm text-gray-600">Yes, we offer special pricing for law firms and larger teams.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;