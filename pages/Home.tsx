
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, PlayCircle, Sparkles, Palette, Leaf, Flower2, Clock, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Redesigned Hero Section */}
      <section className="relative min-h-screen bg-[#FAF9F6] flex items-center">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F6D6D8]/30 z-0 hidden lg:block" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#EAD8C0]/20 rounded-full blur-3xl z-0" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 pt-24 lg:pt-0">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-10 relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-4"
            >
              <div className="h-[1px] w-12 bg-[#C6A75E]"></div>
              <span className="text-[#C6A75E] uppercase tracking-[0.5em] text-[10px] font-bold">
                Bespoke Beauty Heritage
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-6xl md:text-7xl xl:text-8xl font-serif text-[#333] leading-[1.1]"
              >
                The Art of <br />
                <span className="italic font-light text-[#D8A7B1]">Radiant</span> Living.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-gray-500 text-lg md:text-xl max-w-lg leading-relaxed font-light"
              >
                Step into a sanctuary where clinical precision meets soulful relaxation. Your journey to timeless elegance begins here.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-4"
            >
              <Link to="/contact" className="group relative px-10 py-5 bg-[#333] text-white rounded-full text-xs uppercase tracking-[0.2em] overflow-hidden transition-all hover:pr-14 shadow-2xl w-full sm:w-auto text-center">
                <span className="relative z-10">Book Appointment</span>
                <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all w-4 h-4" />
              </Link>
              
              <Link to="/services" className="text-xs uppercase tracking-[0.2em] text-[#333] border-b border-[#EAD8C0] pb-1 hover:border-[#C6A75E] transition-all font-medium">
                View Treatment Menu
              </Link>
            </motion.div>

          </div>

          {/* Right Column: Framed Imagery */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1.2 }}
              className="relative z-10"
            >
              {/* Main Image Frame */}
              <div className="relative rounded-t-[200px] rounded-b-2xl overflow-hidden border-[12px] border-white shadow-2xl aspect-[4/5] max-w-[450px] mx-auto lg:ml-auto">
                <img 
                  src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=1200" 
                  alt="Elegant treatment" 
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2s]"
                />
              </div>

              {/* Overlapping Detail Image */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute -bottom-12 -left-8 md:-left-20 w-48 h-64 rounded-2xl overflow-hidden border-8 border-white shadow-xl hidden sm:block"
              >
                <img 
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600" 
                  alt="Detail" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Rotating Est. Badge */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-32 h-32 hidden xl:flex items-center justify-center"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-[#C6A75E]/40">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text className="text-[9px] uppercase tracking-[0.2em] font-bold">
                    <textPath xlinkHref="#circlePath">
                      NILLI'S NAIL & BEAUTY LOUNGE • ESTABLISHED 2018 • 
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Star className="w-4 h-4 text-[#C6A75E]" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-30"
        >
          <span className="text-[8px] uppercase tracking-[0.4em] font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-[#333]"></div>
        </motion.div>
      </section>

      {/* Philosophy Section - Enhanced */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        {/* Layered background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6]" />
        <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-[#F6D6D8]/25 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-[400px] h-[400px] bg-[#EAD8C0]/30 rounded-full blur-3xl" />
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C6A75E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image column */}
            <div className="relative order-2 lg:order-1 min-w-0">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_25px_80px_-20px_rgba(0,0,0,0.15)] aspect-[4/5] max-h-[640px]">
                  <img
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800&h=1000"
                    alt="Luxury facial treatment at Nilli's Nail & Beauty Lounge"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02] block"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
                {/* Decorative frame accent */}
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-[#C6A75E]/20" />
                {/* Promise card */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute -bottom-6 -right-4 lg:-right-6 max-w-[300px] bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-[#EAD8C0]/60 hidden md:block"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F6D6D8] to-[#EAD8C0] flex items-center justify-center">
                      <Star className="w-6 h-6 text-[#C6A75E] fill-[#C6A75E]/40" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-[#333] mb-2 italic">The Nilli's Promise</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">Only organic, sustainably sourced products touch your skin.</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Content column */}
            <div className="order-1 lg:order-2 lg:pl-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-10"
              >
                <div>
                  <span className="inline-flex items-center gap-3 text-[#D8A7B1] uppercase tracking-[0.35em] text-[10px] font-bold mb-6 block">
                    <span className="w-10 h-px bg-gradient-to-r from-[#C6A75E] to-[#EAD8C0]" />
                    Our Philosophy
                  </span>
                  <h2 className="text-4xl md:text-5xl xl:text-[3.25rem] font-serif leading-[1.12] text-[#333] tracking-tight">
                    Graceful Beauty,{' '}
                    <span className="italic font-light text-[#D8A7B1]">Scientific Precision</span>.
                  </h2>
                </div>
                <p className="text-gray-500 text-lg leading-[1.75] max-w-xl">
                  We believe true beauty is an inside-out journey. Our therapists combine ancient relaxation techniques with cutting-edge skincare technology to provide results that are both visible and deeply restorative.
                </p>

                {/* Feature list with icons */}
                <div className="space-y-5 pt-2">
                  {[
                    { icon: Sparkles, label: 'Bespoke Skin Analysis', desc: 'Personalized assessment' },
                    { icon: Palette, label: 'Expert Colorists', desc: 'Artistic precision' },
                    { icon: Leaf, label: 'Organic Nail Sanctuary', desc: 'Natural care' },
                    { icon: Flower2, label: 'Aromatherapy Suites', desc: 'Sensory experience' },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx, duration: 0.5 }}
                      className="group flex items-center gap-5 p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#EAD8C0]/40 hover:border-[#C6A75E]/30 hover:bg-white hover:shadow-lg hover:shadow-[#F6D6D8]/15 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F6D6D8]/60 to-[#EAD8C0]/40 flex items-center justify-center text-[#C6A75E] group-hover:from-[#F6D6D8] group-hover:to-[#EAD8C0] transition-colors duration-300">
                        <item.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="block text-sm font-semibold tracking-wide text-[#333] group-hover:text-[#C6A75E] transition-colors">{item.label}</span>
                        <span className="block text-xs text-gray-500 mt-0.5">{item.desc}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#333] text-white text-sm font-medium uppercase tracking-[0.2em] hover:bg-[#222] transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - Enhanced */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#FAF9F6]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-[#F6D6D8]/20 to-transparent rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#EAD8C0]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block text-[#D8A7B1] uppercase tracking-[0.35em] text-[10px] font-bold mb-4">
              Our Specialties
            </span>
            <h2 className="text-4xl md:text-5xl xl:text-[3.25rem] font-serif text-[#333] mb-4">
              Curated Treatments
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Indulge in our signature services, crafted for lasting radiance.
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mx-auto mt-8" />
          </motion.div>

          {/* Service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link to="/services" className="group block">
                  <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-6 shadow-lg shadow-gray-200/50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#F6D6D8]/20 group-hover:-translate-y-2">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-70" />
                    {/* Category badge */}
                    <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-widest text-[#333]">
                      {service.category}
                    </span>
                    {/* Bottom gradient bar with name & duration */}
                    <div className="absolute inset-x-0 bottom-0 p-5 pt-20 bg-gradient-to-t from-black/70 to-transparent">
                      <span className="block text-white font-serif text-lg tracking-wide">{service.name}</span>
                      <div className="flex items-center gap-2 text-white/80 text-xs mt-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#C6A75E] tracking-wide group-hover:gap-3 transition-all">
                    {service.price}
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 transition-opacity" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#333] text-white text-sm font-medium uppercase tracking-[0.2em] hover:bg-[#222] transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              View Full Menu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAF9F6] to-white" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F6D6D8]/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#EAD8C0]/25 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block text-[#D8A7B1] uppercase tracking-[0.35em] text-[10px] font-bold mb-4">
              Client Love
            </span>
            <h2 className="text-4xl md:text-5xl xl:text-[3.25rem] font-serif text-[#333]">
              What They Say <span className="italic text-[#D8A7B1] font-light">About Us</span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            {/* Testimonial cards */}
            <div className="lg:col-span-7 space-y-8">
              {TESTIMONIALS.map((t, idx) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className={`relative ${idx === 1 ? 'lg:ml-12' : ''}`}
                >
                  <div className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-gray-100 border border-[#EAD8C0]/40 hover:shadow-xl hover:shadow-[#F6D6D8]/15 hover:border-[#EAD8C0]/60 transition-all duration-500">
                    {/* Quote icon */}
                    <div className="absolute top-8 right-8 text-[#F6D6D8]">
                      <Quote className="w-12 h-12" strokeWidth={1} />
                    </div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#C6A75E] text-[#C6A75E]" />
                      ))}
                    </div>
                    {/* Quote text */}
                    <p className="text-xl lg:text-2xl font-serif text-gray-700 leading-relaxed pr-8 mb-8">
                      "{t.text}"
                    </p>
                    {/* Author */}
                    <div className="flex items-center gap-5">
                      <div className="relative">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-14 h-14 rounded-2xl object-cover ring-2 ring-[#EAD8C0]/60"
                        />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#C6A75E] flex items-center justify-center">
                          <Star className="w-2.5 h-2.5 fill-white text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="font-serif text-lg font-medium text-[#333]">{t.name}</p>
                        <p className="text-sm uppercase tracking-widest text-[#D8A7B1]">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right side - Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex items-center"
            >
              <div className="relative w-full">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 aspect-[4/5] max-h-[600px]">
                  <img
                    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000"
                    alt="Satisfied Client"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl text-[#C6A75E] hover:bg-white transition-colors"
                    >
                      <PlayCircle className="w-10 h-10" fill="currentColor" />
                    </motion.button>
                  </div>
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#C6A75E]/30 rounded-3xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#F6D6D8]/50">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif">Start Your Transformation</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Discover the perfect balance of luxury and well-being. Reserve your personalized experience today.</p>
          <div className="pt-6">
             <Link to="/contact" className="bg-[#333] text-white px-12 py-5 rounded-full text-sm uppercase tracking-[0.3em] hover:bg-black transition-all shadow-xl">
              Reserve Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
