
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { MEMBERSHIPS } from '../constants';

const Membership: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif">Nilli's VIP Club</h1>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Exclusive memberships designed for those who view beauty as a ritual, not a luxury. Enjoy consistent care with privileged access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEMBERSHIPS.map((tier, idx) => (
            <motion.div 
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white rounded-3xl p-10 border shadow-sm flex flex-col ${
                tier.isFeatured ? 'border-[#C6A75E] scale-105 shadow-2xl z-10' : 'border-gray-100'
              }`}
            >
              {tier.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C6A75E] text-white px-6 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold flex items-center space-x-2">
                  <Sparkles className="w-3 h-3" />
                  <span>Most Refined</span>
                </div>
              )}
              
              <div className="mb-10 text-center">
                <h3 className="text-2xl font-serif mb-4">{tier.name}</h3>
                <div className="flex items-baseline justify-center space-x-1">
                  <span className="text-4xl font-serif">{tier.price}</span>
                  <span className="text-gray-400 text-sm italic">/{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {tier.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-start space-x-3 text-sm text-gray-600">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.isFeatured ? 'text-[#C6A75E]' : 'text-gray-300'}`} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-xl text-xs uppercase tracking-widest transition-all ${
                tier.isFeatured 
                  ? 'bg-[#333] text-white hover:bg-black shadow-lg' 
                  : 'bg-[#FAF9F6] text-gray-600 border border-gray-100 hover:bg-white hover:border-[#EAD8C0]'
              }`}>
                Join The Circle
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-white rounded-3xl border border-[#EAD8C0] text-center max-w-4xl mx-auto shadow-sm">
          <h3 className="text-2xl font-serif mb-4">Corporate & Wedding Packages</h3>
          <p className="text-gray-500 mb-8">Bespoke group arrangements for your most special occasions. Contact our concierge for a private consultation.</p>
          <button className="text-[#C6A75E] border-b border-[#C6A75E] pb-1 uppercase tracking-widest text-xs font-bold hover:text-[#b59855] hover:border-[#b59855] transition-colors">
            Inquire Privately
          </button>
        </div>
      </div>
    </div>
  );
};

export default Membership;
