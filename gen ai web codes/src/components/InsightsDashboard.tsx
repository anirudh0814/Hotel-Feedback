import React from 'react';
import { BarChart, TrendingUp, Users, Building, Settings, MessageCircle } from 'lucide-react';

export interface FeedbackData {
  id: string;
  feedback: string;
  category: string;
  confidence: number;
  timestamp: string;
}

interface InsightsDashboardProps {
  feedbackData: FeedbackData[];
}

const InsightsDashboard: React.FC<InsightsDashboardProps> = ({ feedbackData }) => {
  const getCategoryStats = () => {
    const stats: Record<string, number> = {
      Service: 0,
      Facilities: 0,
      Administration: 0,
      General: 0
    };

    feedbackData.forEach(item => {
      if (stats.hasOwnProperty(item.category)) {
        stats[item.category]++;
      } else {
        stats.General = (stats.General || 0) + 1;
      }
    });

    return stats;
  };

  const stats = getCategoryStats();
  const total = feedbackData.length;

  const getPercentage = (count: number) => total > 0 ? ((count / total) * 100).toFixed(1) : '0';

  const categoryData = [
    { name: 'Service', count: stats.Service || 0, color: 'bg-green-500', barColor: 'bg-green-500', icon: Users },
    { name: 'Facilities', count: stats.Facilities || 0, color: 'bg-blue-500', barColor: 'bg-blue-500', icon: Building },
    { name: 'Administration', count: stats.Administration || 0, color: 'bg-purple-500', barColor: 'bg-purple-500', icon: Settings },
    { name: 'General', count: stats.General || 0, color: 'bg-gray-500', barColor: 'bg-gray-500', icon: MessageCircle }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
      <div className="flex items-center space-x-3 mb-6">
        <BarChart className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Feedback Insights</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {categoryData.map((category) => {
          const IconComponent = category.icon;
          return (
            <div key={category.name} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className={`${category.color} text-white p-3 rounded-lg`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold text-gray-800">{category.count}</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{getPercentage(category.count)}% of total</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Category Distribution</h3>
        <div className="space-y-4">
          {categoryData.map((category) => (
            <div key={category.name} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded ${category.color}`}></div>
                <span className="font-medium text-gray-700">{category.name}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-32 md:w-48 bg-gray-200 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full transition-all duration-500 ${category.barColor}`}
                    style={{ width: `${total > 0 ? (category.count / total) * 100 : 0}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-600 w-12 text-right">
                  {getPercentage(category.count)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {total > 0 && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-2 text-blue-800">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">Total Feedback Processed: {total}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsightsDashboard;
