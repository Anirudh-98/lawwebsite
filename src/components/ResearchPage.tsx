import React from 'react';
import { Search, ArrowRight } from 'lucide-react';

interface Props {
  setActiveTab: (tab: string) => void;
}

const ResearchPage: React.FC<Props> = ({ setActiveTab }) => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal Case Research</h1>
          <p className="text-xl text-gray-600">Search through thousands of case judgments and legal precedents</p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="Search for cases, judgments, legal strategies..."
              className="w-full px-6 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-2 top-2 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Filter Options */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {['All Cases', 'Criminal Law', 'Civil Law', 'Corporate Law', 'Constitutional Law', 'Recent Updates'].map((filter) => (
              <button
                key={filter}
                className="px-6 py-2 bg-white border border-gray-300 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-colors"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Recent Cases */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'ABC vs. State of Maharashtra',
              court: 'Supreme Court of India',
              date: '2024-05-15',
              category: 'Constitutional Law',
              summary: 'Landmark judgment on fundamental rights and their interpretation in modern context.'
            },
            {
              title: 'XYZ Corporation vs. Union of India',
              court: 'Delhi High Court',
              date: '2024-05-10',
              category: 'Corporate Law',
              summary: 'Important ruling on corporate governance and regulatory compliance.'
            },
            {
              title: 'State vs. John Doe',
              court: 'Mumbai High Court',
              date: '2024-05-08',
              category: 'Criminal Law',
              summary: 'Significant precedent in criminal procedure and evidence law.'
            }
          ].map((case_, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {case_.category}
                </span>
                <span className="text-gray-500 text-sm">{case_.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{case_.title}</h3>
              <p className="text-blue-600 font-medium mb-2">{case_.court}</p>
              <p className="text-gray-600 mb-4">{case_.summary}</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Read Full Judgment <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Recent Updates Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recent Legal Updates</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              {[
                {
                  type: 'Amendment',
                  title: 'Criminal Procedure Code Amendment 2024',
                  description: 'New provisions added to Section 154 regarding FIR registration procedures.',
                  date: '2024-05-20'
                },
                {
                  type: 'New Section',
                  title: 'IT Act Section 43B Added',
                  description: 'New cybersecurity compliance requirements for financial institutions.',
                  date: '2024-05-18'
                },
                {
                  type: 'Removed',
                  title: 'Companies Act Section 12A Repealed',
                  description: 'Section 12A regarding dormant companies has been removed and replaced.',
                  date: '2024-05-15'
                }
              ].map((update, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${update.type === 'Amendment' ? 'bg-green-100 text-green-800' : update.type === 'New Section' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                      {update.type}
                    </span>
                    <span className="text-gray-500 text-sm">{update.date}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{update.title}</h4>
                  <p className="text-gray-600">{update.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
