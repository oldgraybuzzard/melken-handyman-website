'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-28">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left">
            {/* Google Rating Badge */}
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6" role="img" aria-label="5.0 star rating on Google">
              <div className="flex items-center gap-1" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-700 font-semibold" aria-hidden="true">5.0</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Dependable handyman help from a veteran-owned business built on craftsmanship and trust.
            </h1>

            {/* Service Areas */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Seminole County, Florida | Orange County, Florida
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://clienthub.getjobber.com/booking/5c634966-cdc4-461c-b15d-852bce0ed9ca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-5 bg-[#1f3b4d] text-white rounded-lg hover:bg-[#152a38] transition-colors font-semibold text-xl shadow-md"
              >
                Book Now
              </a>
              <a
                href="#contact"
                className="inline-block px-10 py-5 bg-white text-[#1f3b4d] border-2 border-[#1f3b4d] rounded-lg hover:bg-gray-50 transition-colors font-semibold text-xl shadow-md"
              >
                Get an Estimate
              </a>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/handyman.png"
                alt="Professional handyman at work"
                width={600}
                height={600}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

