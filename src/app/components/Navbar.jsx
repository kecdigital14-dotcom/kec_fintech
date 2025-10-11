import Link from 'next/link';
import { Facebook, Youtube, Linkedin, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-28 rounded-lg flex items-center justify-center">
          <img src="/kec_logo.png" alt="" srcset="" />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-[#1a4d4d] font-medium hover:text-[#0f3838] transition-colors">
            HOME
          </Link>
          <Link href="/pages" className="text-[#1a4d4d] font-medium hover:text-[#0f3838] transition-colors">
            PAGES
          </Link>
          <Link href="/services" className="text-[#1a4d4d] font-medium hover:text-[#0f3838] transition-colors">
            SERVICES
          </Link>
          <Link href="/projects" className="text-[#1a4d4d] font-medium hover:text-[#0f3838] transition-colors">
            PROJECTS
          </Link>
          <Link href="/blog" className="text-[#1a4d4d] font-medium hover:text-[#0f3838] transition-colors">
            BLOG
          </Link>
          <Link href="/shop" className="text-[#1a4d4d] font-medium hover:text-[#0f3838] transition-colors">
            SHOP
          </Link>
        </div>

        {/* Right Section - Social Icons and Phone */}
        <div className="flex items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link href="#" className="text-[#1a4d4d] hover:text-[#0f3838] transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-[#1a4d4d] hover:text-[#0f3838] transition-colors">
              <Youtube size={20} />
            </Link>
            <Link href="#" className="text-[#1a4d4d] hover:text-[#0f3838] transition-colors">
              <Linkedin size={20} />
            </Link>
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-[#1a4d4d]/30"></div>

          {/* Phone Number */}
          <Link href="tel:+023456789" className="flex items-center gap-2 text-[#1a4d4d] font-medium hover:text-[#0f3838] transition-colors">
            <Phone size={18} />
            <span>+91-8287933634</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}