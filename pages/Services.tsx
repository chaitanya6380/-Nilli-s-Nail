
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TREATMENT_CATEGORIES } from '../treatments';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }, []);

  const hasPremiumTier = (cat: (typeof TREATMENT_CATEGORIES)[0]) =>
    cat.items.some((i) => i.pricePremium);
  const isPedicureManicure = (cat: (typeof TREATMENT_CATEGORIES)[0]) =>
    cat.slug === 'pedicure-manicure';

  return (
    <div className="pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-24 min-h-screen bg-[#FAF9F6] relative overflow-hidden">
      {/* Decorative corner elements - brochure style */}
      <div className="pointer-events-none absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 opacity-[0.08]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#E7646A]" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M80 20 Q90 30 85 45 Q80 60 70 50 Q60 40 50 50 Q40 60 30 45 Q20 30 30 20" />
          <circle cx="75" cy="35" r="4" />
          <circle cx="65" cy="55" r="3" />
        </svg>
      </div>
      <div className="pointer-events-none absolute bottom-20 left-0 w-24 h-24 sm:w-40 sm:h-40 opacity-[0.06]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#E7646A]" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M20 80 Q30 70 45 75 Q60 80 50 90 Q40 85 50 70 Q60 55 45 60" />
          <circle cx="35" cy="72" r="3" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-[#E7646A] font-bold mb-2">
            Price List
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#333] mb-2">
            Nilli's Nail & Beauty Lounge
          </h1>
          <p className="text-gray-500 text-sm">
            Services for Women & Men
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-10">
          {TREATMENT_CATEGORIES.map((cat, catIdx) => {
            const showNormalPremium = hasPremiumTier(cat) && !isPedicureManicure(cat);
            const showPedicureManicure = isPedicureManicure(cat);

            return (
              <motion.section
                key={cat.id}
                id={cat.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIdx * 0.04 }}
                className="scroll-mt-28"
              >
                {/* Category heading - brochure style pink + underline */}
                <div className="border-b-2 border-[#E7646A] pb-1.5 mb-4">
                  <h2 className="text-lg sm:text-xl font-bold text-[#E7646A] uppercase tracking-wider">
                    {cat.name}
                  </h2>
                </div>

                {/* Content in light pink box */}
                <div className="bg-[#E7646A]/[0.12] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#E7646A]/20">
                  {showNormalPremium && (
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 pb-3 mb-3 border-b border-[#E7646A]/20 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#333]">
                      <span>Service</span>
                      <span className="text-center">Normal</span>
                      <span className="text-center">Premium</span>
                    </div>
                  )}
                  {showPedicureManicure && (
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 pb-3 mb-3 border-b border-[#E7646A]/20 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#333]">
                      <span>Service</span>
                      <span className="text-center">Pedicure</span>
                      <span className="text-center">Manicure</span>
                    </div>
                  )}
                  <ul className="space-y-0">
                    {cat.items.map((item, idx) => (
                      <li
                        key={idx}
                        className={`grid gap-2 sm:gap-4 py-2.5 sm:py-3 text-sm sm:text-base ${
                          showNormalPremium || showPedicureManicure ? 'grid-cols-3' : 'grid-cols-[1fr,auto]'
                        } ${idx < cat.items.length - 1 ? 'border-b border-[#E7646A]/10' : ''}`}
                      >
                        <span className="text-[#333] font-medium min-w-0">
                          {item.name}
                        </span>
                        {showNormalPremium || showPedicureManicure ? (
                          <>
                            <span className="text-[#E7646A] font-semibold tabular-nums text-center">
                              {item.price}
                            </span>
                            <span className="text-[#E7646A] font-semibold tabular-nums text-center">
                              {item.pricePremium || '—'}
                            </span>
                          </>
                        ) : (
                          <span className="text-[#E7646A] font-semibold tabular-nums text-right">
                            {item.price}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* Bridal highlight note - brochure style */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10"
        >
          <div className="bg-[#E7646A] text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
            <p className="text-xs uppercase tracking-[0.3em] opacity-90 mb-1">
              Pre-Bridal & Wedding Day
            </p>
            <p className="font-serif text-2xl sm:text-3xl font-medium mb-2">
              Bridal Package (A + B) – ₹25,000
            </p>
            <p className="text-sm opacity-90 max-w-xl mx-auto">
              (A) Pre-Bridal Package ₹17,000 · (B) Wedding Day Package ₹8,000
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-white text-[#E7646A] text-sm font-semibold hover:bg-[#FAF9F6] transition-all group"
            >
              Enquire
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-xs sm:text-sm mb-6">
            Prices may vary. Contact us for exact quotes and bookings.
          </p>
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-8">
            Nilli's Nail & Beauty Lounge — Services for Women & Men
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#333] text-white text-sm font-medium uppercase tracking-widest hover:bg-[#222] transition-all group"
          >
            Book Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
