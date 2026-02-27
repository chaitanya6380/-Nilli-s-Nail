'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Sparkles,
  LayoutDashboard,
  ImageIcon,
  Users,
  MessageSquare,
  LogOut,
  Menu,
  X,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { name: 'Gallery', path: '/admin/gallery', icon: ImageIcon },
  { name: 'Memberships', path: '/admin/memberships', icon: Users },
  { name: 'Contacts', path: '/admin/contacts', icon: MessageSquare },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#1f2937] transform transition-transform duration-300 lg:relative lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-[#E7646A]" />
              <div>
                <h2 className="text-white font-serif tracking-widest text-sm">NILI&apos;S</h2>
                <p className="text-gray-400 text-[10px] uppercase tracking-wider">Admin Panel</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                    isActive
                      ? 'bg-[#E7646A] text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                  {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-gray-700 space-y-1">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-400 hover:text-red-400 hover:bg-gray-700 transition-all w-full"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-500 hover:text-white hover:bg-gray-700 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to website</span>
            </Link>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between lg:justify-end">
          <button
            className="lg:hidden text-gray-600"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X /> : <Menu />}
          </button>
          <div className="text-sm text-gray-500">Welcome, Admin</div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
