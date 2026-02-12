
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Clock, Check } from 'lucide-react';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Hair' | 'Skin' | 'Nails' | 'Waxing'>('All');
  
  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const categories: (typeof activeCategory)[] = ['All', 'Hair', 'Skin', 'Nails', 'Waxing'];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif"
          >
            Service Menu
          </motion.h1>
          <p className="text-gray-500 tracking-widest uppercase text-xs">Exquisite care for your hair, skin, and nails</p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2 rounded-full text-xs uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-[#C6A75E] text-white shadow-lg' 
                    : 'bg-white text-gray-500 border border-gray-100 hover:border-[#EAD8C0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredServices.map((service, idx) => (
            <motion.div 
              layout
              key={service.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">
                  {service.category}
                </div>
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif text-[#333] group-hover:text-[#C6A75E] transition-colors">{service.name}</h3>
                    <span className="text-lg font-medium text-[#C6A75E]">{service.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center text-xs text-gray-400 uppercase tracking-widest space-x-4 mb-8">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Check className="w-3 h-3" />
                      <span>Premium Products</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-[#FAF9F6] border border-[#EAD8C0] text-[#333] py-4 rounded-xl text-xs uppercase tracking-widest hover:bg-[#333] hover:text-white transition-all">
                  Book This Service
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
