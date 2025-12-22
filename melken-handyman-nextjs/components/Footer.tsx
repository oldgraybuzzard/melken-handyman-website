'use client';

import { Facebook } from 'lucide-react';

export default function Footer() {
  const handleEmailClick = () => {
    // Protected email - constructed at runtime to avoid bot scraping
    const user = 'theguy';
    const domain = 'melkenhandyman.com';
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Melken Handyman Solutions</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Veteran-owned handyman services serving Central Florida with pride.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61580343762552"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.google.com/maps/place/Melken+Handyman+Solutions/@28.6130581,-81.26076,10z/data=!3m1!4b1!4m6!3m5!1s0x813cdc85b0cc4ad7:0x829b0782ba6e5611!8m2!3d28.6130581!4d-81.26076!16s%2Fg%2F11yjvwp1sm?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors text-sm font-bold"
                aria-label="Google"
              >
                G
              </a>
              <a
                href="https://www.homeadvisor.com/rated.MelkenHandymanSolutions.157885974.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="HomeAdvisor"
              >
                HA
              </a>
            </div>
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
                className="block hover:text-white transition-colors text-left focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Send email to Melken Handyman Solutions"
              >
                Click to Email
              </button>
              <a
                href="https://clienthub.getjobber.com/client_hubs/b44c6628-bedb-4fef-ba53-8a664d11ed6f/login/new?source=share_login"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors"
              >
                Client Login
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2 text-gray-400">
              <a href="/" className="block hover:text-white transition-colors">
                Home
              </a>
              <a href="#services" className="block hover:text-white transition-colors">
                Services
              </a>
              <a href="#reviews" className="block hover:text-white transition-colors">
                Reviews
              </a>
              <a href="#faq" className="block hover:text-white transition-colors">
                FAQ
              </a>
              <a href="#contact" className="block hover:text-white transition-colors">
                Contact
              </a>
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

