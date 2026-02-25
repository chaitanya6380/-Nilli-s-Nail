'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAVBAR_HEIGHT = 64;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Membership', path: '/membership' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Fixed navbar */}
      <nav
        style={{ height: NAVBAR_HEIGHT }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center bg-white transition-shadow duration-300 ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group min-w-0">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#E7646A] transition-transform group-hover:rotate-12 flex-shrink-0" />
            <span className="text-base sm:text-xl md:text-2xl font-serif tracking-widest text-[#333] truncate">
              NILLI&apos;S NAIL &amp; BEAUTY
            </span>
          </Link>

          <div className="hidden md:flex space-x-8 lg:space-x-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm uppercase tracking-widest transition-colors hover:text-[#E7646A] ${
                  pathname === link.path
                    ? 'text-[#E7646A] font-medium'
                    : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#E7646A] text-white px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-[#d4545a] transition-all transform hover:-translate-y-0.5 shadow-md"
            >
              Book Now
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden"
            >
              <div className="flex flex-col p-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-serif tracking-wide py-4 border-b border-gray-100 hover:text-[#E7646A] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 bg-[#E7646A] text-white px-6 py-3 rounded-full text-sm uppercase tracking-widest text-center hover:bg-[#d4545a] transition-all"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer so content starts below fixed navbar */}
      <div style={{ height: NAVBAR_HEIGHT }} />
    </>
  );
};

export default Navbar;
