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
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Melken Handyman Solutions</h3>
            <p className="text-gray-400 leading-relaxed">
              Veteran-owned handyman services serving Central Florida with pride.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-400">
              <a
                href="tel:4075020253"
                className="block hover:text-white transition-colors"
              >
                (407) 502-0253
              </a>
              <button
                onClick={handleEmailClick}
                className="block hover:text-white transition-colors text-left"
              >
                kfelder@melkenhandyman.com
              </button>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Service Areas</h3>
            <p className="text-gray-400">
              Seminole County, FL<br />
              Orange County, FL
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Melken Handyman Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

