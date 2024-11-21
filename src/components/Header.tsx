import React from 'react';
import { Radio, Menu, Search, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-2">
            <Radio className="h-8 w-8 text-red-600" />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900">Sweet FM</span>
              <span className="text-sm text-red-600">106.5</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-900 hover:text-red-600">News</a>
            <a href="#" className="text-gray-900 hover:text-red-600">Politics</a>
            <a href="#" className="text-gray-900 hover:text-red-600">Sports</a>
            <a href="#" className="text-gray-900 hover:text-red-600">Entertainment</a>
            <a href="#" className="text-gray-900 hover:text-red-600">Business</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell className="h-5 w-5 text-gray-600" />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}