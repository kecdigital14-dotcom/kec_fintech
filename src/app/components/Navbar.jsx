'use client';

import Link from 'next/link';
import { Facebook, Youtube, Linkedin, Phone, Instagram, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <nav className={`px-6 py-4 transition-all duration-300 z-100  ${
      isScrolled ? 'fixed top-0 left-0 right-0 z-50 bg-white shadow-md' : ''
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-28 rounded-lg flex items-center justify-center">
          <img src="/kec_logo.png" alt="KEC Logo"  />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
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
            This Vision
          </Link>
          <Link href="/contact" className="text-[#1a4d4d] font-bold hover:text-[#0f3838] transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Right Section - Social Icons and Phone */}
        <div className="flex items-center gap-6">
          {/* Social Icons with Tooltips */}
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <Link 
              href="https://instagram.com/yourcompany" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-[#1a4d4d] hover:text-[#E4405F] transition-all duration-300 hover:scale-110"
              aria-label="Visit our Instagram"
            >
              <Instagram size={20} />
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
              <Facebook size={20} />
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
              <Globe size={20} />
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
            className="flex items-center gap-2 text-[#1a4d4d] font-medium hover:text-[#0f3838] transition-colors"
            aria-label="Call us"
          >
            <Phone size={18} />
            <span>+91-8287933634</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}