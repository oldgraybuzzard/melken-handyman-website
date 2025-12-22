'use client';

import Image from 'next/image';
import { Shield, Award, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 md:py-24">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left space-y-6 animate-fade-in">
            {/* Trust Badges */}
            <div className="flex items-center justify-center md:justify-start gap-6 flex-wrap">
              {/* Google Rating Badge */}
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100" role="img" aria-label="5.0 star rating on Google">
                <div className="flex items-center gap-1" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-900 font-bold text-lg" aria-hidden="true">5.0</span>
                <span className="text-gray-600 text-sm">Google</span>
              </div>

              {/* Veteran Owned Badge */}
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold text-sm">Veteran Owned</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              <span className="block mb-2">Dependable handyman help</span>
              <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                built on trust
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
              Professional craftsmanship from a veteran-owned business serving Central Florida with pride.
            </p>

            {/* Service Areas with Icon */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-700">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-lg md:text-xl font-medium">
                Seminole County & Orange County, FL
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a
                href="https://clienthub.getjobber.com/booking/5c634966-cdc4-461c-b15d-852bce0ed9ca"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-10 py-5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 font-semibold text-xl shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                Book Now
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-xl shadow-md hover:shadow-lg"
              >
                Get an Estimate
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-8 max-w-lg mx-auto md:mx-0">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <Clock className="w-5 h-5 text-primary" />
                  <p className="font-bold text-2xl text-gray-900">Fast</p>
                </div>
                <p className="text-sm text-gray-600">Same-day service</p>
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <Award className="w-5 h-5 text-primary" />
                  <p className="font-bold text-2xl text-gray-900">Quality</p>
                </div>
                <p className="text-sm text-gray-600">Expert work</p>
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <Shield className="w-5 h-5 text-primary" />
                  <p className="font-bold text-2xl text-gray-900">Trusted</p>
                </div>
                <p className="text-sm text-gray-600">Licensed & insured</p>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-slide-in-right">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-400/10 rounded-full blur-2xl"></div>

            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/handyman.png"
                alt="Professional handyman at work"
                width={600}
                height={600}
                priority
                className="w-full h-auto"
              />

              {/* Image Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Ready to help</p>
                    <p className="text-2xl font-bold text-primary">(321) 326-7555</p>
                  </div>
                  <a
                    href="tel:3213267555"
                    className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

