'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#about', label: 'About' },
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
          <nav className="hidden md:flex items-center gap-8">
            <a href="tel:4075020253" className="text-gray-700 hover:text-primary font-medium transition-colors">
              (407) 502-0253
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors font-semibold"
            >
              Get an Estimate
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
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
          <nav className="md:hidden py-4 border-t border-gray-200">
            <a
              href="tel:4075020253"
              className="block py-3 text-gray-700 hover:text-primary font-medium px-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              (407) 502-0253
            </a>
            <a
              href="#contact"
              className="block py-3 text-gray-700 hover:text-primary font-medium px-4"
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

