import React from 'react';
import { Quote } from 'lucide-react';
import { mockData } from '../data/mock';

const TestimonialsSection = () => {
  return (
    <section className="py-20" style={{background: 'var(--bg-section)'}}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">
            Stories of Recovery and Hope
          </h2>
          <p className="body-large max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}}>
            Hear from clients who found their path to recovery through our programs. 
            These stories represent the transformative power of comprehensive mental health care.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="ai-grid">
          {mockData.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="product-card">
              {/* Quote Icon */}
              <div className="flex justify-start mb-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{background: 'var(--accent-wash)'}}
                >
                  <Quote size={24} style={{color: 'var(--accent-text)'}} />
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="body-medium mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Attribution */}
              <footer className="pt-4 border-t" style={{borderColor: 'var(--border-light)'}}>
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white"
                    style={{background: 'var(--gradient-button)'}}
                  >
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="body-medium font-semibold" style={{color: 'var(--text-primary)'}}>
                      {testimonial.author}
                    </div>
                    <div className="body-small" style={{color: 'var(--text-muted)'}}>
                      {testimonial.program}
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          ))}
        </div>

        {/* Privacy Notice */}
        <div className="text-center mt-12">
          <p className="caption max-w-2xl mx-auto" style={{color: 'var(--text-muted)'}}>
            <strong>Privacy Notice:</strong> All testimonials are shared with client consent. 
            Names and identifying details have been changed to protect client confidentiality 
            in accordance with HIPAA regulations.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="heading-3 mb-4">
              Ready to Start Your Recovery Journey?
            </h3>
            <p className="body-medium mb-6" style={{color: 'var(--text-secondary)'}}>
              Take the first step towards lasting recovery. Our compassionate team 
              is here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Begin Treatment
              </button>
              <button className="btn-secondary">
                Learn About Insurance
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;