
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY } from '../constants';
import { Maximize2 } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Hair' | 'Skin' | 'Nails'>('All');
  
  const filteredGallery = filter === 'All' 
    ? GALLERY 
    : GALLERY.filter(item => item.category === filter);

  return (
    <div className="pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-24 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif">Portfolio of Grace</h1>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-6 sm:pt-8">
            {['All', 'Hair', 'Skin', 'Nails'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`text-xs uppercase tracking-[0.3em] pb-2 transition-all ${
                  filter === f 
                    ? 'text-[#E7646A] border-b-2 border-[#E7646A]' 
                    : 'text-gray-400 border-b-2 border-transparent hover:text-gray-600'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredGallery.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl aspect-square shadow-sm cursor-pointer"
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-6 text-center">
                  <Maximize2 className="w-8 h-8 mb-4 stroke-1" />
                  <h3 className="font-serif text-xl mb-1">{item.title}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-[#EAD8C0]">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 sm:mt-24 text-center px-4">
          <p className="text-gray-500 italic mb-8 font-serif text-lg">"Every finish tells a story of transformation."</p>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 text-sm uppercase tracking-widest text-[#E7646A] hover:text-[#d4545a] transition-colors"
          >
            <span>Follow our journey on Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
