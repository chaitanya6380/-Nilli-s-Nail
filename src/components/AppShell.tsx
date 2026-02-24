'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIAdvisor from '@/components/AIAdvisor';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  if (isAdminRoute) {
    // Admin section has its own dedicated layout and header
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#E7646A] selection:text-[#333]">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <AIAdvisor />
    </div>
  );
}

