'use client';

import Image from 'next/image';
import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const INSTAGRAM_URL = 'https://www.instagram.com/nilisbeautylounge.vizag?igsh=N2kydW9ieGgxMzd5&utm_source=qr';
const FACEBOOK_URL = 'https://www.facebook.com/NilisNailandBeautyLounge?mibextid=wwXIfr&rdid=gKY2oLdqfOYzgGe7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F14UY3ZDfp9j%2F%3Fmibextid%3DwwXIfr#';
const WHATSAPP_NUMBER = '919346007152';
const PHONE_NUMBER = '9346007152';
const ADDRESS = 'First floor, plot no 44, below Let\'s Go Gym, North Extension, Balayya Sastri Layout, Seethammadara, Vrindavan, Visakhapatnam, Andhra Pradesh 530013';

const Footer = () => {
  return (
    <footer className="bg-[#FAF9F6] border-t border-[#EAD8C0] pt-12 sm:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12">
        <div className="space-y-6">
          <a href="/" className="inline-flex items-center space-x-4 group">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Nili's Nail & Beauty Lounge logo"
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-serif tracking-widest">
              NILI&apos;S NAIL &amp; BEAUTY
            </h2>
          </a>
          <p className="text-gray-500 text-sm leading-relaxed">
            Redefining beauty through a lens of luxury and grace. Our sanctuary is dedicated to your well-being.
          </p>
          <div className="flex space-x-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-[#E7646A] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-[#E7646A] transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="text-gray-400 hover:text-[#25D366] transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-serif mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="/services" className="hover:text-[#E7646A]">Services Menu</a></li>
            <li><a href="/about" className="hover:text-[#E7646A]">Our Story</a></li>
            <li><a href="/contact" className="hover:text-[#E7646A]">Contact</a></li>
            <li><a href="/gallery" className="hover:text-[#E7646A]">Gallery</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif mb-6">Visit Us</h3>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-[#E7646A] flex-shrink-0 mt-0.5" />
              <span className="break-words">{ADDRESS}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-[#E7646A]" />
              <a href={`tel:+91${PHONE_NUMBER}`} className="hover:text-[#E7646A]">+91 {PHONE_NUMBER}</a>
            </li>
            <li className="flex items-center space-x-3">
              <WhatsAppIcon className="w-4 h-4 text-[#E7646A] flex-shrink-0" />
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="hover:text-[#E7646A]">WhatsApp</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif mb-6">Mailing List</h3>
          <p className="text-sm text-gray-500 mb-4">Join our inner circle for exclusive updates.</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-white border border-gray-200 px-4 py-3 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-[#E7646A]"
            />
            <button className="absolute right-2 top-1.5 bg-[#E7646A] text-white px-4 py-1.5 rounded-full text-xs uppercase tracking-tighter">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-gray-100 text-center px-4">
        <p className="text-xs text-gray-400 uppercase tracking-widest break-words">
          &copy; 2022 NILI&apos;S NAIL &amp; BEAUTY LOUNGE. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
