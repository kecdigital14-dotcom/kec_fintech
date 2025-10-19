'use client';

import Link from 'next/link';
import { Facebook, Youtube, Linkedin, Phone, Instagram, Globe, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`px-4 sm:px-6 py-4 transition-all duration-300 z-100  ${
      isScrolled ? 'fixed top-0 left-0 right-0 z-50 bg-white shadow-md' : ''
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-20 sm:w-24 md:w-28 rounded-lg flex items-center justify-center">
            <img src="/kec_logo.png" alt="KEC Logo" />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-5">
          <Link href="/" className="text-[#1a4d4d] hover:text-[#0f3838] transition-colors font-bold">
            Home
          </Link>
          <Link href="/about" className="text-[#1a4d4d] font-bold hover:text-[#0f3838] transition-colors">
            About Us
          </Link>
          <Link href="/whyus" className="text-[#1a4d4d] font-bold hover:text-[#0f3838] transition-colors">
            Why Us
          </Link>
          <Link href="/ourservices" className="text-[#1a4d4d] font-bold hover:text-[#0f3838] transition-colors">
            Our Services
          </Link>
          <Link href="/thevision" className="text-[#1a4d4d] font-bold hover:text-[#0f3838] transition-colors">
            The Vision
          </Link>
          <Link href="/resources" className="text-[#1a4d4d] font-bold hover:text-[#0f3838] transition-colors">
            Resources
          </Link>
          <Link href="/lendingpartners" className="text-[#1a4d4d] font-bold hover:text-[#0f3838] transition-colors">
            Lending Partners
          </Link>
          <Link href="/contact" className="text-[#1a4d4d] font-bold hover:text-[#0f3838] transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Desktop Right Section - Social Icons and Phone */}
        <div className="hidden md:flex items-center gap-4 lg:gap-4">
          {/* Social Icons with Tooltips */}
          <div className="flex items-center gap-3 lg:gap-2">
            {/* Instagram */}
            <Link 
              href="https://instagram.com/yourcompany" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-[#1a4d4d] hover:text-[#E4405F] transition-all duration-300 hover:scale-110"
              aria-label="Visit our Instagram"
            >
              <Instagram size={18} className="lg:w-5 lg:h-5" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Instagram
              </span>
            </Link>

            {/* Facebook */}
            <Link 
              href="https://facebook.com/yourcompany" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-[#1a4d4d] hover:text-[#1877F2] transition-all duration-300 hover:scale-110"
              aria-label="Visit our Facebook"
            >
              <Facebook size={18} className="lg:w-5 lg:h-5" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Facebook
              </span>
            </Link>

            {/* Website/Portfolio */}
            <Link 
              href="https://yourwebsite.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-[#1a4d4d] hover:text-[#0f3838] transition-all duration-300 hover:scale-110"
              aria-label="Visit our Website"
            >
              <Globe size={18} className="lg:w-5 lg:h-5" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Website
              </span>
            </Link>
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-[#1a4d4d]/30"></div>

          {/* Phone Number */}
          <Link 
            href="tel:+918287933634" 
            className="flex items-center gap-1 text-[#1a4d4d] font-medium hover:text-[#0f3838] transition-colors text-sm lg:text-base"
            aria-label="Call us"
          >
            <Phone size={16} className="lg:w-[18px] lg:h-[18px]" />
            <span className="hidden lg:inline">+91-8287933634</span>
            <span className="lg:hidden">Call</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#1a4d4d] hover:text-[#0f3838] transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-[#1a4d4d]/20 ml-4">
          <div className="flex flex-col gap-4 mt-4">
            <Link 
              href="/" 
              className="text-[#1a4d4d] hover:text-[#0f3838] transition-colors font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-[#1a4d4d] font-bold hover:text-[#0f3838] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/whyus" 
              className="text-[#1a4d4d] font-bold hover:text-[#0f3838] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Why Us
            </Link>
            <Link 
              href="/ourservices" 
              className="text-[#1a4d4d] font-bold hover:text-[#0f3838] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Services
            </Link>
            <Link 
              href="/thevision" 
              className="text-[#1a4d4d] font-bold hover:text-[#0f3838] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              The Vision
            </Link>
            <Link 
              href="/resources" 
              className="text-[#1a4d4d] font-bold hover:text-[#0f3838] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link href="/lendingpartners" className="text-[#1a4d4d] font-bold hover:text-[#0f3838] transition-colors">
            Lending Partners
          </Link>
            <Link 
              href="/contact" 
              className="text-[#1a4d4d] font-bold hover:text-[#0f3838] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            {/* Mobile Social Icons & Phone */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#1a4d4d]/20 ">
              <Link 
                href="https://instagram.com/yourcompany" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a4d4d] hover:text-[#E4405F] transition-colors"
                aria-label="Visit our Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link 
                href="https://facebook.com/yourcompany" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a4d4d] hover:text-[#1877F2] transition-colors"
                aria-label="Visit our Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link 
                href="https://yourwebsite.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a4d4d] hover:text-[#0f3838] transition-colors"
                aria-label="Visit our Website"
              >
                <Globe size={20} />
              </Link>
              <div className="flex-1"></div>
              <Link 
                href="tel:+918287933634" 
                className="flex items-center gap-2 text-[#1a4d4d] font-medium hover:text-[#0f3838] transition-colors"
                aria-label="Call us"
              >
                <Phone size={18} />
                <span>+91-8287933634</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}