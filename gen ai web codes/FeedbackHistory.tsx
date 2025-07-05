import React, { useState } from 'react';
import { History, Filter, Search, Users, Building, Settings, MessageCircle } from 'lucide-react';

interface FeedbackData {
  id: string;
  feedback: string;
  category: string;
  confidence: number;
  timestamp: string;
}

interface FeedbackHistoryProps {
  feedbackData: FeedbackData[];
}

const FeedbackHistory: React.FC<FeedbackHistoryProps> = ({ feedbackData }) => {
  const [filterCategory, setFilterCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = feedbackData.filter(item => {
    const matchesCategory = filterCategory === 'All' || item.category === filterCategory;
    const matchesSearch = item.feedback.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Service':
        return <Users className="w-4 h-4" />;
      case 'Facilities':
        return <Building className="w-4 h-4" />;
      case 'Administration':
        return <Settings className="w-4 h-4" />;
      default:
        return <MessageCircle className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Service':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Facilities':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Administration':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center space-x-3 mb-6">
        <History className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Feedback History</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search feedback..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-500" />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="All">All Categories</option>
            <option value="Service">Service</option>
            <option value="Facilities">Facilities</option>
            <option value="Administration">Administration</option>
            <option value="General">General</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredData.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <MessageCircle className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <p className="text-lg">No feedback found</p>
            <p className="text-sm">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          filteredData.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border ${getCategoryColor(item.category)}`}>
                  {getCategoryIcon(item.category)}
                  <span className="text-sm font-medium">{item.category}</span>
                </div>
                <div className="text-sm text-gray-500">
                  {item.timestamp}
                </div>
              </div>
              
              <p className="text-gray-700 mb-3 leading-relaxed">{item.feedback}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Confidence:</span>
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${item.confidence}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item.confidence}%</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeedbackHistory;