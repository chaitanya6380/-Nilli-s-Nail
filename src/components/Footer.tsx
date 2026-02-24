'use client';

import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FAF9F6] border-t border-[#EAD8C0] pt-12 sm:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12">
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-serif tracking-widest">NILLI&apos;S NAIL &amp; BEAUTY</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Redefining beauty through a lens of luxury and grace. Our sanctuary is dedicated to your well-being.
          </p>
          <div className="flex space-x-4">
            <Instagram className="w-5 h-5 text-gray-400 hover:text-[#E7646A] cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 text-gray-400 hover:text-[#E7646A] cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-[#E7646A] cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-serif mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-[#E7646A]">Services Menu</a></li>
            <li><a href="#" className="hover:text-[#E7646A]">Our Story</a></li>
            <li><a href="#" className="hover:text-[#E7646A]">Gift Cards</a></li>
            <li><a href="#" className="hover:text-[#E7646A]">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif mb-6">Visit Us</h3>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="flex items-start sm:items-center space-x-3">
              <MapPin className="w-4 h-4 text-[#E7646A] flex-shrink-0 mt-0.5 sm:mt-0" />
              <span className="break-words">123 Luxury Lane, Beverly Hills, CA</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-[#E7646A]" />
              <span>+1 (555) 000- luxury</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-[#E7646A]" />
              <span>concierge@elegance.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif mb-6">Mailing List</h3>
          <p className="text-sm text-gray-500 mb-4">Join our inner circle for exclusive updates.</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-white border border-gray-200 px-4 py-3 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-[#E7646A]"
            />
            <button className="absolute right-2 top-1.5 bg-[#E7646A] text-white px-4 py-1.5 rounded-full text-xs uppercase tracking-tighter">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-gray-100 text-center px-4">
        <p className="text-xs text-gray-400 uppercase tracking-widest break-words">
          &copy; 2024 NILLI&apos;S NAIL &amp; BEAUTY LOUNGE. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
