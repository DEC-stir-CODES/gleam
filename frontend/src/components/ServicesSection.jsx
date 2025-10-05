import React from 'react';
import { Clock, Users2, Brain, Phone } from 'lucide-react';
import { mockData } from '../data/mock';

const ServicesSection = () => {
  const iconMap = {
    1: Clock,
    2: Users2, 
    3: Brain,
    4: Phone
  };

  return (
    <section className="py-20" style={{background: 'var(--bg-section)'}}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">
            Comprehensive Mental Health Programs
          </h2>
          <p className="body-large max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}}>
            Evidence-based treatment programs designed to meet you where you are 
            in your recovery journey, with flexible options that fit your life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="ai-grid">
          {mockData.services.map((service) => {
            const IconComponent = iconMap[service.id];
            return (
              <div key={service.id} className="product-card">
                {/* Service Icon */}
                <div className="flex items-center space-x-3 mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{background: 'var(--accent-wash)'}}
                  >
                    <IconComponent size={24} style={{color: 'var(--accent-text)'}} />
                  </div>
                  <div>
                    <h3 className="heading-3">{service.title}</h3>
                    <span className="body-small" style={{color: 'var(--text-muted)'}}>
                      {service.audience}
                    </span>
                  </div>
                </div>

                {/* Service Description */}
                <p className="body-medium mb-4">
                  {service.description}
                </p>

                {/* Duration */}
                <div className="mb-4 p-3 rounded-lg" style={{background: 'var(--bg-section)'}}>
                  <span className="body-small font-medium" style={{color: 'var(--accent-text)'}}>
                    Duration: {service.duration}
                  </span>
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="body-medium font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                    Program Features:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="body-small flex items-center space-x-2">
                        <div 
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{background: 'var(--accent-primary)'}}
                        ></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className="btn-secondary w-full">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="heading-3 mb-4">
              Not Sure Which Program Is Right for You?
            </h3>
            <p className="body-medium mb-6" style={{color: 'var(--text-secondary)'}}>
              Our clinical team will work with you to determine the most appropriate 
              level of care based on your individual needs and circumstances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Free Assessment
              </button>
              <button className="btn-secondary">
                Speak with Admissions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;