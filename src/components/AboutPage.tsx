import React from 'react';
import { Users, Target, Award, BookOpen, Scale, Shield, Lock, UserCheck, Database, Eye } from 'lucide-react';

interface Props {
  setActiveTab?: (tab: string) => void;
}

const AboutUsPage: React.FC<Props> = ({ setActiveTab }) => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering legal professionals with comprehensive case research tools and cutting-edge technology 
            to deliver exceptional legal services and informed decision-making.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To democratize access to legal knowledge by providing comprehensive, searchable databases of case law, 
              judgments, and legal precedents. We strive to make legal research more efficient, accurate, and accessible 
              for practitioners, students, and legal scholars across India.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To become India's most trusted and comprehensive legal research platform, fostering a more informed 
              legal community and contributing to the advancement of justice through technology-driven solutions 
              and innovative research methodologies.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accuracy</h3>
              <p className="text-gray-600">
                We maintain the highest standards of accuracy in our legal databases, ensuring reliable and 
                up-to-date information for all users.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessibility</h3>
              <p className="text-gray-600">
                Making legal research accessible to everyone, from seasoned practitioners to law students, 
                through intuitive design and comprehensive coverage.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                Upholding the highest ethical standards in our operations and maintaining the confidentiality 
                and security of our users' research activities.
              </p>
            </div>
          </div>
        </div>

        {/* Exclusive Access & Security Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Exclusive Access & Security</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Verified Advocates Only</h3>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Access to our comprehensive legal database is exclusively reserved for practicing advocates. 
                We verify each user's credentials through their Bar Council ID to ensure that sensitive 
                legal information reaches only qualified legal professionals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="text-center p-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Secure Authentication</h4>
                <p className="text-sm text-gray-600">Multi-factor authentication with Bar Council ID verification</p>
              </div>

              <div className="text-center p-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Protected Database</h4>
                <p className="text-sm text-gray-600">End-to-end encryption for all legal documents and case files</p>
              </div>

              <div className="text-center p-4">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Access Monitoring</h4>
                <p className="text-sm text-gray-600">Real-time monitoring and audit trails for all platform activities</p>
              </div>

              <div className="text-center p-4">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Data Privacy</h4>
                <p className="text-sm text-gray-600">Strict compliance with legal confidentiality and privacy standards</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center">Why This Level of Security?</h4>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
                <div>
                  <p className="mb-2">
                    <strong>Comprehensive Legal Information:</strong> Our database contains sensitive case judgments, 
                    legal strategies, and precedents that require professional handling and understanding.
                  </p>
                  <p>
                    <strong>Professional Responsibility:</strong> We ensure that legal information is accessed only 
                    by qualified advocates who understand the ethical implications and proper usage of such data.
                  </p>
                </div>
                <div>
                  <p className="mb-2">
                    <strong>Client Confidentiality:</strong> Many legal documents contain confidential information 
                    that must be protected according to professional legal standards and regulations.
                  </p>
                  <p>
                    <strong>Regulatory Compliance:</strong> Our verification process ensures compliance with 
                    Bar Council regulations and maintains the integrity of the legal profession.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '50,000+', label: 'Legal Cases Indexed' },
              { number: '2,500+', label: 'Verified Advocates' },
              { number: '15+', label: 'Years of Experience' },
              { number: '99.9%', label: 'Security Uptime' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
          </div>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Have questions about our services or need assistance with your legal research? 
            Our team of experts is here to help you navigate through complex legal information.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;