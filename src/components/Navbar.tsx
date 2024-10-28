import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PartyPopper, Sparkles, Wine } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  if (isAdminPage) {
    return null;
  }

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Wine className="h-8 w-8 text-black transform transition-transform group-hover:rotate-12" />
                <Sparkles className="h-4 w-4 text-black absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-black tracking-tight">
                  Business&Cocktails
                </span>
                <span className="text-xs text-gray-500 -mt-1">
                  Networking d'exception
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center">
            <Link 
              to="/evenements" 
              className="flex items-center space-x-2 text-black hover:text-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              <PartyPopper className="h-4 w-4" />
              <span>Nos soirées</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}