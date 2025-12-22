'use client';

import { Check } from 'lucide-react';

export default function Services() {
  const services = [
    'Drywall Repair',
    'Interior Painting',
    'Electrical Repair',
    'Gutter Cleaning',
    'Window Repair',
    'Pressure Cleaning',
    'Home Maintenance',
    'Light Fixture Installation',
    'Door Repair',
    'Furniture Assembly',
    'Appliance Repair',
    'Carpentry Repair'
  ];

  return (
    <section id="services" className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Services We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional handyman services to keep your home in perfect condition
          </p>
        </div>

        {/* Services Grid */}
        <ul className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" role="list">
          {services.map((service, index) => (
            <li
              key={index}
              className="group flex items-center gap-4 p-6 bg-white rounded-xl border-2 border-gray-100 hover:border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-colors duration-300" aria-hidden="true">
                <Check className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={3} />
              </div>
              <span className="text-gray-900 font-semibold text-lg group-hover:text-primary transition-colors">{service}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center px-10 py-5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 font-semibold text-xl shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            Request a Service
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

