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
    <section id="services" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Services offered
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <span className="text-gray-800 font-medium">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

