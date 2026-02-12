
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-24 bg-white">
      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-24 items-center mb-16 sm:mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <span className="text-[#E7646A] uppercase tracking-widest text-xs font-bold">The Heritage</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-tight">Crafting Beauty <br /> Since 2018</h1>
            <p className="text-gray-500 leading-relaxed text-lg">
              Nilli's Nail & Beauty Lounge was born from a simple observation: that the world of beauty had become too fast, too loud, and too impersonal. We envisioned a sanctuary that returned to the roots of luxury—personalized care, unhurried time, and exceptional artistry.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Founded by Elena Sterling, our salon started as a boutique skin studio in the heart of Beverly Hills. Today, we are a full-service retreat known for our meticulous attention to detail and our commitment to using exclusively organic, high-performance ingredients.
            </p>
            <div className="pt-6 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-serif text-[#333]">12k+</h4>
                <p className="text-xs uppercase tracking-widest text-gray-400">Radiant Clients</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-[#333]">15</h4>
                <p className="text-xs uppercase tracking-widest text-gray-400">Master Artists</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000" alt="Elena Sterling" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-[#EAD8C0] p-8 rounded-2xl hidden lg:block">
              <p className="font-serif italic text-xl">"Beauty is the illumination of your soul."</p>
              <p className="text-xs uppercase tracking-widest mt-4 text-gray-600">— Elena Sterling, Founder</p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="py-16 sm:py-24 border-t border-gray-100">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-serif mb-4">Our Core Values</h2>
            <div className="w-20 h-[1px] bg-[#E7646A] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
            {[
              { title: 'Conscious Luxury', desc: 'We only partner with brands that are cruelty-free and environmentally responsible.' },
              { title: 'Unrivaled Artistry', desc: 'Our technicians undergo continuous education to master the latest global techniques.' },
              { title: 'Personalized Care', desc: 'No two individuals are the same. Your treatment is curated specifically for your chemistry.' },
            ].map((value, i) => (
              <div key={i} className="text-center space-y-6">
                <div className="w-16 h-16 bg-[#FAF9F6] border border-[#EAD8C0] rounded-full flex items-center justify-center mx-auto text-[#E7646A] font-serif text-2xl italic">
                  {i + 1}
                </div>
                <h3 className="text-xl font-serif">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
