import React from 'react';
import { ArrowRight, Shield, Heart, Users } from 'lucide-react';
import { mockData } from '../data/mock';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Main Headline */}
        <h1 className="heading-1 mb-6">
          {mockData.company.tagline}
        </h1>
        
        {/* Subtitle */}
        <p className="body-large mb-8 max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}}>
          Reducing re-hospitalization and relapse through comprehensive, 
          evidence-based treatment for severe mental illness and co-occurring disorders.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="btn-primary flex items-center space-x-2">
            <span>Start Your Recovery</span>
            <ArrowRight size={18} />
          </button>
          <button className="btn-secondary">
            24/7 Crisis Support
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm" style={{color: 'var(--text-muted)'}}>
          <div className="flex items-center space-x-2">
            <Shield size={16} style={{color: 'var(--accent-text)'}} />
            <span>HIPAA Compliant</span>
          </div>
          <div className="flex items-center space-x-2">
            <Heart size={16} style={{color: 'var(--accent-text)'}} />
            <span>Evidence-Based Care</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users size={16} style={{color: 'var(--accent-text)'}} />
            <span>15+ Years Experience</span>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-20" style={{background: 'var(--accent-primary)'}}></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 rounded-full opacity-15" style={{background: 'var(--accent-strong)'}}></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 rounded-full opacity-10" style={{background: 'var(--accent-primary)'}}></div>
      </div>
    </section>
  );
};

export default Hero;