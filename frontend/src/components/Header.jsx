import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { mockData } from '../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="nav-header">
      <div className="flex items-center justify-between w-full px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full" style={{background: 'var(--gradient-button)'}}></div>
          <span className="font-bold text-lg" style={{color: 'var(--text-primary)'}}>
            {mockData.company.name}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {mockData.navigation.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:555-123-4567" className="nav-link flex items-center space-x-1">
            <Phone size={16} />
            <span>Crisis Line</span>
          </a>
          <button className="btn-primary">
            Get Help Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{color: 'var(--text-primary)'}}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg mx-6 mt-2 shadow-lg">
          <div className="flex flex-col py-4">
            {mockData.navigation.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="nav-link block px-6 py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-6 pt-4 border-t border-gray-200 mt-2">
              <a href="tel:555-123-4567" className="btn-secondary w-full mb-3 flex items-center justify-center space-x-2">
                <Phone size={16} />
                <span>Crisis Line</span>
              </a>
              <button className="btn-primary w-full">
                Get Help Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;