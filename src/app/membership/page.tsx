'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { MEMBERSHIPS } from '@/lib/constants';

export default function Membership() {
  return (
    <div className="pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-24 min-h-screen bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20 space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-[0.25em] uppercase">
            Nilli&apos;s Membership
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Choose between Silver, Gold and Elite to enjoy more value, complimentary services and referral rewards
            over multiple months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {MEMBERSHIPS.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border shadow-sm flex flex-col ${
                tier.isFeatured ? 'border-[#E7646A] md:scale-105 shadow-2xl z-10' : 'border-gray-100'
              }`}
            >
              {tier.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E7646A] text-white px-6 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold flex items-center space-x-2">
                  <Sparkles className="w-3 h-3" />
                  <span>Most Refined</span>
                </div>
              )}

              <div className="mb-8 sm:mb-10 text-center">
                <h3 className="text-xl sm:text-2xl font-serif mb-3 uppercase tracking-[0.2em]">
                  {tier.name}
                </h3>
                <div className="flex flex-col items-center justify-center space-y-1">
                  <span className="text-3xl sm:text-4xl font-serif">{tier.price}</span>
                  <span className="text-[11px] text-gray-400 uppercase tracking-[0.25em]">
                    Membership Fee
                  </span>
                </div>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {tier.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-start space-x-3 text-sm text-gray-600">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.isFeatured ? 'text-[#E7646A]' : 'text-gray-300'}`} />
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

        <div className="mt-16 sm:mt-24 p-6 sm:p-12 bg-white rounded-2xl sm:rounded-3xl border border-[#EAD8C0] max-w-4xl mx-auto shadow-sm text-left">
          <h3 className="text-xl sm:text-2xl font-serif mb-4">Membership Terms &amp; Conditions</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
            <li>Memberships are transferable and valid only for the mentioned time period.</li>
            <li>Appointments must be pre-booked.</li>
            <li>Carrying your membership card for the services is compulsory.</li>
            <li>Products are not included in the membership.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
