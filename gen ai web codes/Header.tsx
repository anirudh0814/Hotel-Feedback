import React from 'react';
import { Hotel, BarChart3 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Hotel className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Hotel Feedback Classifier</h1>
              <p className="text-blue-100 text-sm">Smart categorization for better service</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-6 h-6" />
            <span className="text-sm font-medium">Analytics Dashboard</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;