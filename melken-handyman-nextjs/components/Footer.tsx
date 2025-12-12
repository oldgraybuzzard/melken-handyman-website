'use client';

import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  const handleEmailClick = () => {
    // Protected email - constructed at runtime
    const user = 'kfelder';
    const domain = 'melkenhandyman.com';
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Melken Handyman Solutions</h3>
            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
              Veteran-owned handyman services serving Seminole County and Orange County, Florida.
            </p>
            <p className="text-gray-300 text-lg font-medium">
              Built on craftsmanship and trust.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="tel:4075020253"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-lg group"
              >
                <Phone className="h-6 w-6 group-hover:scale-110 transition-transform" />
                (407) 502-0253
              </a>
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-lg group"
              >
                <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
                Click to Email
              </button>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Service Areas</h3>
            <ul className="text-gray-300 space-y-2 text-lg">
              <li>Seminole County, FL</li>
              <li>Orange County, FL</li>
              <li>Sanford</li>
              <li>Lake Mary</li>
              <li>Longwood</li>
              <li>Winter Springs</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p className="text-lg">&copy; {new Date().getFullYear()} Melken Handyman Solutions. All rights reserved.</p>
          <p className="mt-3 text-base font-medium">
            🇺🇸 Veteran-Owned Business | Serving Central Florida with Pride
          </p>
        </div>
      </div>
    </footer>
  );
}

