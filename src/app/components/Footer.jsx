import React from 'react';
import { Twitter, Facebook, Youtube, Linkedin, Phone, Mail } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Our Team', href: '#' },
    { name: 'Our Portfolio', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact Us', href: '#' }
  ];

  const works = [
    { name: 'Works', href: '#' },
    { name: 'Expertise', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Awards', href: '#' }
  ];

  const solutions = [
    { name: 'Corporate Finance Advisory', href: '#' },
    { name: 'Banking & Financial Services', href: '#' },
    { name: 'Investment & Wealth Management', href: '#' },
    { name: 'Taxation & Compliance Consulting', href: '#' },
    { name: 'Risk & Audit Management', href: '#' },
  ];


  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'Youtube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-teal-950 via-teal-900 to-emerald-950 text-white overflow-hidden rounded-3xl mx-6">
      {/* Decorative 3D Wireframe Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]" viewBox="0 0 200 200">
          <g stroke="currentColor" fill="none" strokeWidth="0.3">
            {[...Array(12)].map((_, i) => {
              const y = 20 + i * 13.33;
              return (
                <ellipse key={`h-${i}`} cx="100" cy="100" rx={80 - Math.abs(6 - i) * 10} ry="5" transform={`translate(0, ${y - 100})`} />
              );
            })}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30);
              return (
                <ellipse key={`v-${i}`} cx="100" cy="100" rx="80" ry="80" transform={`rotate(${angle}, 100, 100) scale(1, 0.3)`} />
              );
            })}
          </g>
        </svg>
      </div>

      <div className="relative z-10 px-12 py-16">
        {/* Top Section with Logo and Social Icons */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-32 rounded-lg flex items-center justify-center">
                <Image
                  src="/kec_logo.png"
                  alt="KEC Logo"
                  width={240}
                  height={60}
                  className="rounded-lg"
                />
              </div>
            </Link>
          </div>

          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-teal-800/50 hover:bg-lime-500 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-teal-800/50 mb-8"></div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-16 mb-10">
          {/* Head Office */}
          <div>
            <h3 className="text-xl font-bold mb-6">Head Office</h3>
            <p className="text-teal-200 text-md mb-8 leading-relaxed">
              429, 4th Floor, Amsal Chamber 2, <br /> Metro Station -  Gate No.3, Bikaji Cama <br /> Place, New Delhi-110066
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white">
                <Phone className="w-4 h-4" />
                <span className="text-md">+91-8287933634</span>
              </div>

              <div className="flex items-center gap-3 text-white">
                <Mail className="w-4 h-4" />
                <span className="text-md">finance@kec.com</span>
              </div>
            </div>
          </div>

          {/* Quick Link */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Link</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-teal-200 hover:text-white text-md transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold mb-6 opacity-0">Link</h3>
              <ul className="space-y-3">
                {works.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-teal-200 hover:text-white text-md transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Our Solutions */}
          <div>
            <h3 className="text-base font-bold mb-6">Our Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-teal-200 hover:text-white text-md transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-teal-800/50 mb-8"></div>

        {/* Copyright */}
        <div>
          <p className="text-center text-teal-200 text-sm">
            Copyright © 2025 KodeSolution. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;