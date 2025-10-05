import React from 'react';
import { TrendingUp, Heart, Award, Users } from 'lucide-react';
import { mockData } from '../data/mock';

const StatsSection = () => {
  const iconMap = {
    0: TrendingUp,
    1: Heart,
    2: Award, 
    3: Users
  };

  return (
    <section className="py-20">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">
            Proven Results That Matter
          </h2>
          <p className="body-large max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}}>
            Our evidence-based approach and dedicated team deliver measurable outcomes 
            that make a real difference in our clients' lives.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="ai-grid">
          {mockData.statistics.map((stat, index) => {
            const IconComponent = iconMap[index];
            return (
              <div key={index} className="text-center p-8">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{background: 'var(--accent-wash)'}}
                  >
                    <IconComponent size={32} style={{color: 'var(--accent-text)'}} />
                  </div>
                </div>

                {/* Stat Number */}
                <div className="heading-1 mb-3" style={{color: 'var(--accent-text)'}}>
                  {stat.number}
                </div>

                {/* Stat Label */}
                <h3 className="heading-3 mb-2">
                  {stat.label}
                </h3>

                {/* Stat Description */}
                <p className="body-small" style={{color: 'var(--text-muted)'}}>
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Context */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto p-8 rounded-2xl" style={{background: 'var(--bg-section)'}}>
            <h3 className="heading-3 mb-4">
              Why Our Approach Works
            </h3>
            <p className="body-medium mb-6">
              We focus on holistic, evidence-based treatment that addresses not just symptoms, 
              but the whole person. Our integrated approach combines clinical excellence with 
              compassionate care, giving clients the tools they need for lasting recovery.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{background: 'var(--accent-primary)'}}></div>
                <span>Trauma-Informed Care</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{background: 'var(--accent-primary)'}}></div>
                <span>Family Involvement</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{background: 'var(--accent-primary)'}}></div>
                <span>Peer Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{background: 'var(--accent-primary)'}}></div>
                <span>Aftercare Planning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;