import React from 'react';
import { Phone, Clock, MapPin, Mail } from 'lucide-react';
import { mockData } from '../data/mock';

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container">
        {/* Main CTA Block */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="heading-2 mb-6">
            Take the First Step Towards Recovery Today
          </h2>
          <p className="body-large mb-8" style={{color: 'var(--text-secondary)'}}>
            Don't wait for tomorrow to start your healing journey. Our experienced team 
            is ready to help you or your loved one find the right path to recovery.
          </p>
          
          {/* Emergency Notice */}
          <div className="p-6 rounded-2xl mb-8" style={{background: 'var(--accent-wash)', border: '1px solid var(--accent-primary)'}}>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Phone size={20} style={{color: 'var(--accent-text)'}} />
              <span className="heading-3" style={{color: 'var(--accent-text)'}}>
                24/7 Crisis Support Available
              </span>
            </div>
            <p className="body-medium" style={{color: 'var(--text-body)'}}>
              If you're experiencing a mental health crisis, call our crisis line immediately. 
              We're here to help, any time of day or night.
            </p>
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary text-lg px-8 py-4">
              Call Crisis Line: {mockData.company.phone}
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Schedule Assessment
            </button>
          </div>
        </div>

        {/* Contact Options Grid */}
        <div className="ai-grid max-w-3xl mx-auto">
          {/* Phone */}
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{background: 'var(--accent-wash)'}}
              >
                <Phone size={32} style={{color: 'var(--accent-text)'}} />
              </div>
            </div>
            <h3 className="heading-3 mb-2">Call Us</h3>
            <p className="body-medium mb-4" style={{color: 'var(--text-secondary)'}}>
              Speak directly with our admissions team
            </p>
            <a 
              href={`tel:${mockData.company.phone}`}
              className="body-medium font-semibold"
              style={{color: 'var(--accent-text)'}}
            >
              {mockData.company.phone}
            </a>
          </div>

          {/* Hours */}
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{background: 'var(--accent-wash)'}}
              >
                <Clock size={32} style={{color: 'var(--accent-text)'}} />
              </div>
            </div>
            <h3 className="heading-3 mb-2">Our Hours</h3>
            <div className="body-medium" style={{color: 'var(--text-secondary)'}}>
              <p>Crisis Line: 24/7</p>
              <p>Admissions: Mon-Fri 8am-6pm</p>
              <p>Programs: Mon-Sun 7am-7pm</p>
            </div>
          </div>

          {/* Location */}
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{background: 'var(--accent-wash)'}}
              >
                <MapPin size={32} style={{color: 'var(--accent-text)'}} />
              </div>
            </div>
            <h3 className="heading-3 mb-2">Visit Us</h3>
            <p className="body-medium" style={{color: 'var(--text-secondary)'}}>
              {mockData.company.address}
            </p>
            <button className="btn-secondary mt-3 text-sm">
              Get Directions
            </button>
          </div>

          {/* Email */}
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{background: 'var(--accent-wash)'}}
              >
                <Mail size={32} style={{color: 'var(--accent-text)'}} />
              </div>
            </div>
            <h3 className="heading-3 mb-2">Email Us</h3>
            <p className="body-medium mb-4" style={{color: 'var(--text-secondary)'}}>
              General inquiries and information
            </p>
            <a 
              href={`mailto:${mockData.company.email}`}
              className="body-medium font-semibold"
              style={{color: 'var(--accent-text)'}}
            >
              {mockData.company.email}
            </a>
          </div>
        </div>

        {/* Insurance Notice */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl" style={{background: 'var(--bg-section)'}}>
            <h3 className="heading-3 mb-4">
              Insurance & Payment Options
            </h3>
            <p className="body-medium mb-4">
              We accept most major insurance plans and offer flexible payment options. 
              Our admissions team will verify your benefits and work with you to 
              understand your coverage.
            </p>
            <button className="btn-secondary">
              Check Insurance Coverage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;