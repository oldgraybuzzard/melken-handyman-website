'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/melken-logo.png"
              alt="Melken Handyman Solutions"
              width={180}
              height={60}
              className="h-12 md:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary font-semibold transition-colors text-lg relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="tel:3213267555"
              className="flex items-center gap-2 text-gray-700 hover:text-primary font-semibold transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              (321) 326-7555
            </a>
            <a
              href="https://clienthub.getjobber.com/booking/5c634966-cdc4-461c-b15d-852bce0ed9ca"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transform"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile CTA + Menu */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href="tel:3213267555"
              className="p-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors shadow-md"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              className="p-3 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav id="mobile-menu" className="lg:hidden py-4 border-t border-gray-200 bg-white">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-4 text-gray-700 hover:text-primary hover:bg-gray-50 font-semibold px-4 text-lg transition-colors rounded-lg mx-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:3213267555"
              className="flex items-center gap-2 py-4 text-gray-700 hover:text-primary hover:bg-gray-50 font-semibold px-4 text-lg transition-colors rounded-lg mx-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="w-5 h-5" />
              (321) 326-7555
            </a>
            <div className="px-2 pt-2">
              <a
                href="https://clienthub.getjobber.com/booking/5c634966-cdc4-461c-b15d-852bce0ed9ca"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-4 bg-primary text-white text-center font-bold px-4 text-lg rounded-lg shadow-md hover:bg-primary-dark transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

