import React from 'react';
import { CheckCircle, AlertCircle, Building, Users, Settings, MessageCircle } from 'lucide-react';

interface ClassificationResultProps {
  feedback: string;
  category: string;
  confidence: number;
  timestamp: string;
}

const ClassificationResult: React.FC<ClassificationResultProps> = ({ 
  feedback, 
  category, 
  confidence, 
  timestamp 
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Service':
        return <Users className="w-5 h-5" />;
      case 'Facilities':
        return <Building className="w-5 h-5" />;
      case 'Administration':
        return <Settings className="w-5 h-5" />;
      default:
        return <MessageCircle className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Service':
        return 'bg-green-500';
      case 'Facilities':
        return 'bg-blue-500';
      case 'Administration':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-6 h-6 text-green-500" />
          <h3 className="text-lg font-semibold text-gray-800">Classification Result</h3>
        </div>
        <div className="text-sm text-gray-500">
          {timestamp}
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <p className="text-gray-700 leading-relaxed">{feedback}</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`${getCategoryColor(category)} text-white p-2 rounded-lg`}>
            {getCategoryIcon(category)}
          </div>
          <div>
            <p className="font-semibold text-gray-800">Category: {category}</p>
            <p className="text-sm text-gray-600">Confidence: {confidence}%</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-16 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${confidence}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-700">{confidence}%</span>
        </div>
      </div>
    </div>
  );
};

export default ClassificationResult;