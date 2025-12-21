'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const jobberFormUrl = 'https://clienthub.getjobber.com/client_hubs/b44c6628-bedb-4fef-ba53-8a664d11ed6f/public/work_request/new?form_id=1957366';

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/melken-logo.png"
              alt="Melken Handyman Solutions"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors text-lg"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:4075020253" className="text-gray-700 hover:text-primary font-medium transition-colors text-lg">
              (407) 502-0253
            </a>
            <a
              href={jobberFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors font-semibold text-lg"
            >
              Get an Estimate
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-4 text-gray-700 hover:text-primary font-medium px-4 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:4075020253"
              className="block py-4 text-gray-700 hover:text-primary font-medium px-4 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              (407) 502-0253
            </a>
            <a
              href={jobberFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-4 text-primary font-semibold px-4 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get an Estimate
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

