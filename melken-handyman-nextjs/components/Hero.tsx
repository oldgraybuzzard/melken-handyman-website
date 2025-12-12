'use client';

import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-20">
      <div className="container flex flex-col md:flex-row items-center gap-8">
        {/* Content */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dependable Handyman Help
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Serving Seminole County & Orange County, Florida
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:4075020253"
              className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors font-semibold"
            >
              Call (407) 502-0253
            </a>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-transparent text-primary border-2 border-primary rounded-md hover:bg-primary hover:text-white transition-colors font-semibold"
            >
              Request Service
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 max-w-xl">
          <img
            src="/hero-image.jpg"
            alt="Professional handyman services"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            style={{ maxHeight: '500px' }}
          />
        </div>
      </div>
    </section>
  );
}

