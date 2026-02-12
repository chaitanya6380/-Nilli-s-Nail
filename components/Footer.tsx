
import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF9F6] border-t border-[#EAD8C0] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-serif tracking-widest">NILLI'S NAIL & BEAUTY</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Redefining beauty through a lens of luxury and grace. Our sanctuary is dedicated to your well-being.
          </p>
          <div className="flex space-x-4">
            <Instagram className="w-5 h-5 text-gray-400 hover:text-[#C6A75E] cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 text-gray-400 hover:text-[#C6A75E] cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-[#C6A75E] cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-serif mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-[#C6A75E]">Services Menu</a></li>
            <li><a href="#" className="hover:text-[#C6A75E]">Our Story</a></li>
            <li><a href="#" className="hover:text-[#C6A75E]">Gift Cards</a></li>
            <li><a href="#" className="hover:text-[#C6A75E]">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif mb-6">Visit Us</h3>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-[#C6A75E]" />
              <span>123 Luxury Lane, Beverly Hills, CA</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-[#C6A75E]" />
              <span>+1 (555) 000- luxury</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-[#C6A75E]" />
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
              className="w-full bg-white border border-gray-200 px-4 py-3 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-[#C6A75E]"
            />
            <button className="absolute right-2 top-1.5 bg-[#C6A75E] text-white px-4 py-1.5 rounded-full text-xs uppercase tracking-tighter">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-gray-100 text-center">
        <p className="text-xs text-gray-400 uppercase tracking-widest">
          &copy; 2024 NILLI'S NAIL & BEAUTY LOUNGE. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
