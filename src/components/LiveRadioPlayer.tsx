import React from 'react';
import { Radio, Volume2 } from 'lucide-react';

export default function LiveRadioPlayer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Radio className="h-6 w-6 text-red-600 animate-pulse" />
            <div>
              <div className="font-semibold">Live Now</div>
              <div className="text-sm text-gray-600">Morning Show with Kwame</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors">
              Listen Live
            </button>
            <Volume2 className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
}