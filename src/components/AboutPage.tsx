import React from 'react';
import { Users, Target, Award, BookOpen, Scale, Shield } from 'lucide-react';

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

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Adv. Pradeep',
                  role: 'Chief Legal Officer',
                  experience: '15+ years',
                  specialization: 'Constitutional & Corporate Law',
                  image: 'PS'
                },
                {
                  name: 'Dr. Rajesh Kumar',
                  role: 'Head of Research',
                  experience: '12+ years',
                  specialization: 'Legal Research & Analytics',
                  image: 'RK'
                },
                {
                  name: 'Anirudh Jyothula ',
                  role: 'Cybersecurity Analyst & Full-Stack Developer',
                  experience: '4+ years',
                  specialization: 'Cybersecurity,Full-Stack Development & AI',
                  image: 'AJ'
                },
                {
                  name: 'Prakash',
                  role: 'UI/UX Designer',
                  experience: '5+ years',
                  specialization: 'UI/UX',
                  image: 'MP'
                },
                {
                  name: 'Chaitanya',
                  role: 'UI/UX Designer',
                  experience: '2+ years',
                  specialization: 'UI/UX',
                  image: 'MC'
                },
                {
                  name: 'Sudheer',
                  role: 'AI Engineer',
                  experience: '2+ years',
                  specialization: 'AI Prompt Engineer',
                  image: 'S'
                }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{member.image}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.experience} Experience</p>
                  <p className="text-sm text-gray-500">{member.specialization}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '50,000+', label: 'Legal Cases Indexed' },
              { number: '2,500+', label: 'Active Users' },
              { number: '15+', label: 'Years of Experience' },
              { number: '99.9%', label: 'Uptime Reliability' }
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
