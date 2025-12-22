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
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-gray-900">
          Services offered
        </h2>

        <ul className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex items-center gap-4 p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center" aria-hidden="true">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <span className="text-gray-800 font-medium text-lg">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

