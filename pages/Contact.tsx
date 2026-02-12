
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left: Info */}
          <div className="space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-5xl md:text-7xl font-serif mb-8">Reach Out</h1>
              <p className="text-gray-500 text-lg leading-relaxed">
                We invite you to experience a new standard of beauty. Whether you have questions or wish to book a private consultation, our concierge team is here to assist.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-[#C6A75E]">
                  <MapPin className="w-5 h-5" />
                  <h4 className="font-serif text-xl text-[#333]">Location</h4>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed pl-8">
                  123 Luxury Lane, Beverly Hills<br />
                  California, 90210
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-[#C6A75E]">
                  <Phone className="w-5 h-5" />
                  <h4 className="font-serif text-xl text-[#333]">Contact</h4>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed pl-8">
                  +1 (555) 000-LUXE<br />
                  concierge@elegance.com
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-[#C6A75E]">
                  <Clock className="w-5 h-5" />
                  <h4 className="font-serif text-xl text-[#333]">Hours</h4>
                </div>
                <div className="text-sm text-gray-500 leading-relaxed pl-8 space-y-1">
                  <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
                  <p>Sat: 10:00 AM - 6:00 PM</p>
                  <p>Sun: By Appointment Only</p>
                </div>
              </div>
            </div>

            {/* Simple Map Placeholder */}
            <div className="h-64 rounded-3xl overflow-hidden shadow-sm grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1000" 
                alt="Map View" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100"
          >
            <h3 className="text-3xl font-serif mb-8 text-center">Inquiry Form</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                  <input type="text" className="w-full bg-[#FAF9F6] border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-[#C6A75E] focus:outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                  <input type="email" className="w-full bg-[#FAF9F6] border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-[#C6A75E] focus:outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1">Service Interest</label>
                <select className="w-full bg-[#FAF9F6] border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-[#C6A75E] focus:outline-none appearance-none">
                  <option>Hair Styling & Color</option>
                  <option>Bespoke Skin Treatment</option>
                  <option>Luxury Nail Care</option>
                  <option>Wedding Package</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1">Your Message</label>
                <textarea rows={6} className="w-full bg-[#FAF9F6] border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-[#C6A75E] focus:outline-none resize-none"></textarea>
              </div>
              <button className="w-full bg-[#333] text-white py-5 rounded-xl text-xs uppercase tracking-widest hover:bg-black transition-all flex justify-center items-center space-x-2 shadow-lg">
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
