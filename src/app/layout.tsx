import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIAdvisor from '@/components/AIAdvisor';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "Nilli's Nail & Beauty Lounge | Luxury Salon & Spa",
  description: 'Redefining beauty through a lens of luxury and grace. Your sanctuary for personalized beauty care.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <div className="min-h-screen flex flex-col selection:bg-[#E7646A] selection:text-[#333]">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <AIAdvisor />
        </div>
      </body>
    </html>
  );
}
