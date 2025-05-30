import React from 'react';
import { Scale, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-full md:col-span-1">
          <div className="flex items-center space-x-2 mb-4">
            <Scale className="h-6 w-6 text-blue-500" />
            <span className="text-lg font-bold text-white">LegalAI</span>
          </div>
          <p className="text-sm">AI-Powered Legal Research Platform</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/research" className="hover:text-white">Case Research</a></li>
            <li><a href="/chat" className="hover:text-white">AI Assistant</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Disclaimer</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center"><Mail className="h-4 w-4 mr-2" /> support@legalresearch.in</li>
            <li className="flex items-center"><Phone className="h-4 w-4 mr-2" />+91 40 2345 6789</li>
            <li className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Legal Research Centre<br />
                      123 Law Street, Kukatpally<br />
                      Hyderabad, Telangana 500034<br />
                      India</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
        &copy; 2024 LegalAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
