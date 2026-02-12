
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'py-4 md:py-6 bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group min-w-0">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#E7646A] transition-transform group-hover:rotate-12 flex-shrink-0" />
          <span className="text-base sm:text-xl md:text-2xl font-serif tracking-widest text-[#333] truncate">NILLI'S NAIL & BEAUTY</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm uppercase tracking-widest transition-colors hover:text-[#E7646A] ${location.pathname === link.path ? 'text-[#E7646A] font-medium' : 'text-gray-600'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="bg-[#E7646A] text-white px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-[#d4545a] transition-all transform hover:-translate-y-0.5 shadow-md">
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
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
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-serif tracking-wide py-4 border-b border-gray-100 hover:text-[#E7646A] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
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
  );
};

export default Navbar;
