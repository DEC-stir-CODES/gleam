import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { mockData } from '../data/mock';

const Footer = () => {
  return (
    <footer className="py-20" style={{background: 'var(--text-primary)', color: 'white'}}>
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-full" style={{background: 'var(--gradient-button)'}}></div>
              <span className="font-bold text-xl text-white">
                {mockData.company.name}
              </span>
            </div>
            <p className="body-medium mb-6 max-w-md text-gray-300">
              Providing compassionate, evidence-based mental health care to help 
              individuals achieve lasting recovery and improved quality of life.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} style={{color: 'var(--accent-primary)'}} />
                <a href={`tel:${mockData.company.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {mockData.company.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} style={{color: 'var(--accent-primary)'}} />
                <a href={`mailto:${mockData.company.email}`} className="text-gray-300 hover:text-white transition-colors">
                  {mockData.company.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} style={{color: 'var(--accent-primary)'}} />
                <span className="text-gray-300">{mockData.company.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="heading-3 text-white mb-6">Quick Links</h3>
            <nav className="space-y-3">
              {mockData.navigation.map((item) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Programs */}
          <div>
            <h3 className="heading-3 text-white mb-6">Our Programs</h3>
            <nav className="space-y-3">
              {mockData.services.slice(0, 4).map((service) => (
                <a 
                  key={service.id}
                  href={`/services#${service.id}`}
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {service.title}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Crisis Line Banner */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="text-center p-6 rounded-2xl" style={{background: 'rgba(143, 236, 120, 0.1)', border: '1px solid var(--accent-primary)'}}>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Phone size={20} style={{color: 'var(--accent-primary)'}} />
              <span className="heading-3" style={{color: 'var(--accent-primary)'}}>
                24/7 Crisis Support: {mockData.company.phone}
              </span>
            </div>
            <p className="text-gray-300">
              If you're experiencing a mental health emergency, don't wait. Call now.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 {mockData.company.name}. All rights reserved. | 
              <a href="/privacy" className="hover:text-white ml-1">Privacy Policy</a> | 
              <a href="/terms" className="hover:text-white ml-1">Terms of Service</a>
            </div>

            {/* Compliance */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Heart size={14} style={{color: 'var(--accent-primary)'}} />
                <span>HIPAA Compliant</span>
              </div>
              <span>State Licensed</span>
              <span>Accredited Facility</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;