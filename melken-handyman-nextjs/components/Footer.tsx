'use client';

import { Facebook, Phone, Mail, MapPin, Shield } from 'lucide-react';

export default function Footer() {
  const handleEmailClick = () => {
    // Protected email - constructed at runtime to avoid bot scraping
    const user = 'theguy';
    const domain = 'melkenhandyman.com';
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16 md:py-20">
      <div className="container">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Melken Handyman</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              Veteran-owned handyman services serving Central Florida with pride and integrity.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61580343762552"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.google.com/maps/place/Melken+Handyman+Solutions/@28.6130581,-81.26076,10z/data=!3m1!4b1!4m6!3m5!1s0x813cdc85b0cc4ad7:0x829b0782ba6e5611!8m2!3d28.6130581!4d-81.26076!16s%2Fg%2F11yjvwp1sm?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-base font-bold shadow-lg"
                aria-label="Google"
              >
                G
              </a>
              <a
                href="https://www.homeadvisor.com/rated.MelkenHandymanSolutions.157885974.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-sm font-bold shadow-lg"
                aria-label="HomeAdvisor"
              >
                HA
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="tel:3213267555"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg">(321) 326-7555</span>
              </a>
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg group w-full"
                aria-label="Send email to Melken Handyman Solutions"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">Click to Email</span>
              </button>
              <a
                href="https://clienthub.getjobber.com/client_hubs/b44c6628-bedb-4fef-ba53-8a664d11ed6f/login/new?source=share_login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary hover:text-white transition-colors text-lg font-semibold"
              >
                Client Login →
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <div className="space-y-3">
              <a href="/" className="block text-gray-400 hover:text-white transition-colors text-lg hover:translate-x-1 transform duration-200">
                Home
              </a>
              <a href="#services" className="block text-gray-400 hover:text-white transition-colors text-lg hover:translate-x-1 transform duration-200">
                Services
              </a>
              <a href="#reviews" className="block text-gray-400 hover:text-white transition-colors text-lg hover:translate-x-1 transform duration-200">
                Reviews
              </a>
              <a href="#faq" className="block text-gray-400 hover:text-white transition-colors text-lg hover:translate-x-1 transform duration-200">
                FAQ
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors text-lg hover:translate-x-1 transform duration-200">
                Contact
              </a>
              <a
                href="https://clienthub.getjobber.com/booking/5c634966-cdc4-461c-b15d-852bce0ed9ca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary hover:text-white transition-colors text-lg font-bold hover:translate-x-1 transform duration-200"
              >
                Book Now →
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Service Areas</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-lg">
                  <p className="font-semibold text-white">Seminole County, FL</p>
                  <p className="text-sm">Sanford, Lake Mary, Longwood, Altamonte Springs</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-lg">
                  <p className="font-semibold text-white">Orange County, FL</p>
                  <p className="text-sm">Orlando, Winter Park, Maitland</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-base">
              &copy; {new Date().getFullYear()} Melken Handyman Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-base">
              <Shield className="w-5 h-5 text-primary" />
              <span>Licensed & Insured • Veteran Owned</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

