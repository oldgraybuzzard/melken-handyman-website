'use client';

import { useState } from 'react';
import { services } from '@/lib/data/services';
import { X } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const scrollToContact = () => {
    setSelectedService(null);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional handyman services for your home and property
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-1"
              onClick={() => setSelectedService(service)}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Service Modal */}
        {selectedService && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-6 flex items-center justify-between rounded-t-2xl">
                <h3 className="text-3xl font-bold">
                  {selectedService.title}
                </h3>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="h-7 w-7" />
                </button>
              </div>

              <div className="p-8">
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  {selectedService.description}
                </p>

                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  What We Offer:
                </h4>
                <ul className="space-y-4 mb-8">
                  {selectedService.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-600 text-2xl font-bold mt-0.5">✓</span>
                      <span className="text-gray-700 text-lg">{detail}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className="w-full px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
                >
                  {selectedService.cta}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

